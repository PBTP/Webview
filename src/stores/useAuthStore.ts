import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface IAuthStore {
  accessToken: string;
  uuid: string;
  setAuth: (token: string, uuid: string) => void;
}

export const useAuthStore = create(
  persist<IAuthStore>(
    (set) => ({
      accessToken: '',
      uuid: '',
      setAuth: (token, uuid) => set({ accessToken: token, uuid }),
    }),
    {
      name: 'auth-storage',
    }
  )
);

export const setUserAuth = (accessToken: string, uuid: string) =>
  useAuthStore.getState().setAuth(accessToken, uuid);

export const logout = useAuthStore.persist.clearStorage;
