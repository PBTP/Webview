import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface ITokenStore {
  accessToken: string;
}

export const useTokenStore = create(
  persist<ITokenStore>(
    () => ({
      accessToken: '',
    }),
    {
      name: 'token-storage',
    }
  )
);

export const setAccessToken = (accessToken: string) =>
  useTokenStore.setState({ accessToken });

export const logout = useTokenStore.persist.clearStorage;
