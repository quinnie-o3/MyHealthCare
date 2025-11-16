import { Heart } from 'lucide-react';

export default function LoginHeader() {
  return (
    <div className="text-center mb-8 animate-fade-in">
      <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-3xl mb-4 shadow-lg hover:scale-110 transition-transform duration-300">
        <Heart className="w-11 h-11 text-white animate-pulse" />
      </div>
      <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-2">
        MyHealthCare
      </h1>
      <p className="text-gray-600 font-medium">Sign in to continue your care journey</p>
    </div>
  );
}

