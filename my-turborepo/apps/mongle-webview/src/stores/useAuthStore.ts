import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface IAuthStore {
  accessToken: string;
  uuid: string;
}

export const useAuthStore = create(
  persist<IAuthStore>(
    () => ({
      accessToken: '',
      uuid: '',
    }),
    {
      name: 'auth-storage',
    }
  )
);

export const setUserAuth = (accessToken: string, uuid: string) =>
  useAuthStore.setState({ accessToken, uuid });

export const logout = useAuthStore.persist.clearStorage;
