import { create } from 'zustand';

interface ITokenStore {
  accessToken: string;
}

export const useTokenStore = create<ITokenStore>()(() => ({
  accessToken: '',
}));

export const setAccessToken = (accessToken: string) =>
  useTokenStore.setState({ accessToken });
