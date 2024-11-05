import { create } from 'zustand';
import { persist } from 'zustand/middleware';

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
        console.log('Setting auth:', { token, uuid });
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
      onRehydrateStorage: () => {
        console.log('Rehydrating auth store');
        return (state) => {
          console.log('Rehydrated state:', state);
        };
      },
    }
  )
);

export const setUserAuth = (token: string, uuid: string) => {
  console.log('setUserAuth called:', { token, uuid });
  useAuthStore.getState().setAuth(token, uuid);
};
