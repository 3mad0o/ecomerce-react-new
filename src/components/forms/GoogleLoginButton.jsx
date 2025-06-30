// components/GoogleLoginButton.js

import React from 'react';
import { useAuth } from '../Contexts/AuthContext';

const GoogleLoginButton = () => {
    const { loginWithGoogle,setUser,setIsA } = useAuth();
    
    const handleLogin = async () => {
        // Open Google auth in new window
        const googleAuthWindow = window.open(
            'http://localhost:8001/api/auth/google/redirect',
            '_blank',
            'width=500,height=600'
        );
        
        // Listen for message from the popup
        window.addEventListener('message', (event) => {
            console.log(event);
            
            if (event.data.type === 'google-auth') {
                const { token, user } = event.data;
                loginWithGoogle(event.data)
              }
        });
    };
    
    return (
        <button onClick={handleLogin} className="px-4 py-2 border flex gap-2 border-slate-200 dark:border-slate-700 rounded-lg text-slate-700 dark:text-slate-200 hover:border-slate-400 dark:hover:border-slate-500 hover:text-slate-900 dark:hover:text-slate-300 hover:shadow transition duration-150">
            
            <img class="w-6 h-6" src="https://www.svgrepo.com/show/475656/google-color.svg" loading="lazy" alt="google logo" />

            Login with Google
        </button>
    );
};

export default GoogleLoginButton;