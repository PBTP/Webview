import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

interface AuthState {
  accessToken: string | null;
  uuid: string | null;
  setAuth: (token: string, uuid: string) => void;
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      accessToken: null,
      uuid: null,
      setAuth: (token, uuid) => {
        set({ accessToken: token, uuid });
        window.dispatchEvent(
          new CustomEvent('auth-update', {
            detail: { token, uuid },
          })
        );
      },
    }),
    {
      name: 'auth-storage',
      storage: createJSONStorage(() => localStorage),
    }
  )
);

export const setUserAuth = (token: string, uuid: string) => {
  useAuthStore.getState().setAuth(token, uuid);
};
