import React, { useEffect, useState } from 'react'
import { useLoading } from '../../../contexts/LoadingProvider';
import { useDispatch, useSelector } from 'react-redux';
import apiClient from '../../../lib/axios_client';
import { set } from 'react-hook-form';
import { setCategories } from '../../../redux/Category/CategorySlice';

export const useCategories = () => {
    const {setLoading} = useLoading();
    const dispatch = useDispatch();
    useEffect(() => {
        setLoading(true);
        apiClient.get('/categories')
            .then((res) => {
                const data = res.data.data;
                dispatch(setCategories(data));
            })
            .catch((err) => {})
            .finally(() => {
                setLoading(false);
            });
    },[])

  return { categories: useSelector((state) => state.category.categories)}
}
