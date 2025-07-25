import React, { useEffect } from 'react'
import apiClient from '../lib/axios_client';
import { useDispatch } from 'react-redux';
import { setUser } from '../redux/User/UserSlice';

export const useUser = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        apiClient.get('auth/user')
            .then(response => {
                const userData = response.data.data;
                dispatch(setUser(userData));
              
            })
            .catch(error => {
                console.error('Error fetching user data:', error);
            });


    }, []);
  return (
    <div>useUser</div>
  )
}
