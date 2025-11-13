import axios from 'axios';
import API_BASE_URL from './config';

const apiClient = axios.create({
    baseURL: API_BASE_URL,
    headers: {
        "Content-Type": "application/json"
    },
});

//Add token to all request
//interceptors: let you run your code or modify request/response before they are handled by then or catch

apiClient.interceptors.request.use(
    (config) => {
    const token = localStorage.getItem('access_token');
    if (token){
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
    },
    (error) => { 
        return Promise.reject(error);
}
);

apiClient.interceptors.response.use(
    (response) => response, //Pass through successful responses
    async (error) => { //Handle 401 errors
        const originalRequest = error.config;
    if (error.response?.status === 401 && !originalRequest._retry){
        originalRequest._retry = true;
        try {
            const refreshToken = localStorage.getItem('refresh_token');
            const response = await axios.post(`${API_BASE_URL}/api/v1/token/refresh`, {
                refresh: refreshToken,
        });
        const { access } = response.data;
        localStorage.setItem('access_token', access);

        //Retry original request with new token
        originalRequest.headers.Authorization = `Bearer ${access}`;
        return apiClient(originalRequest); //send the original request again
        }
        catch (refreshError) {
          //  Refresh token failed, logout user
            localStorage.removeItem('access_token');
            localStorage.removeItem('refresh_token');
            localStorage.removeItem('user');
            window.location.href = '/login';
            return Promise.reject(refreshError);
        }
    }
    return Promise.reject(error);
}
);


//AUTH APIs 
export const register = async (userData) => {
    try {
        const response = await apiClient.post('/api/v1/auth/register/', userData);
        return response.data;
    } catch (error){
        if (error.response & error.response.data){
            throw error.response.data;
        }
        throw error; //Nếu không có response data, throw do lỗi axios
    }
};

export const login = async (credentials) => {
    try {
        const response = await apiClient.post('/api/v1/auth/login', credentials);
        //Save tokens and user to LocalStorage
        if (response.data.tokens){
            localStorage.setItem('access_token', response.data.tokens.access);
            localStorage.setItem('refresh_token', response.data.tokens.refresh);
            localStorage.setItem('user', JSON.stringify(response.data.user));
        }
        return response.data;
    } catch (error){
        throw error.response?.data || error.message;
    }
};

export const logout = async() => {
    try {
        const refreshToken = localStorage.getItem('refresh_token');
        if (refreshToken){
            await apiClient.post('/api/v1/logout', { refresh: refreshToken });
        } 
    } catch (error){
            console.error("Logout error:", error);
        } finally {
            localStorage.removeItem('access_token');
            localStorage.removeItem('refresh_token');
            localStorage.removeItem('user');
            window.location.href = '/login';
        }
    };

export const getProfilfe = async () => {
    try {
        const response = await apiClient.get('/api/v1/auth/profile');    
        return response.data;
    } catch (error) {
        throw error.response?.data || error.message;
    }
};

export const updateProfile = async (profileData) => {
    try {
        const response = await apiClient.put('/api/v1/auth/profile', userData);
        return response.data;
    } catch (error) {
        throw error.response?.data || error.message;
    }
};


//Check if user is authenticated
export const isAuthenticated = ()  => {
    const token = localStorage.getItem('access_token');
    const user = localStorage.getItem('user');
    return !!(token && user);
};

export const getCurrrentUser = () => {
    const user = localStorage.getItem('user');
    return user ? JSON.parse(user) : null;
};

export default apiClient;
