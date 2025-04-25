// hooks/useAuthInit.ts
import { useEffect, useState } from 'react';
import { useAppDispatch } from '../app/hook';
import { authService } from '../features/auth/authService';
import { setUser } from '../features/auth/authSlice';

export const useAuthInit = () => {
  const dispatch = useAppDispatch();
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('accessToken');

    if (token) {
      authService.getProfile()
        .then((profile) => {
          dispatch(setUser(profile));
        })
        .finally(() => setReady(true));
    } else {
      setReady(true);
    }
  }, [dispatch]);

  return ready;
};
