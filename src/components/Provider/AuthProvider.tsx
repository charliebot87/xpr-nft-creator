import { createContext, useState, useContext, useEffect, useMemo } from 'react';
import ProtonSDK, { User } from '../../services/proton';

interface AuthContext {
  currentUser: User | undefined;
  authError: string;
  isLoadingUser: boolean;
  login: () => Promise<void>;
  logout: () => Promise<void>;
}

const AuthContext = createContext<AuthContext>({
  currentUser: undefined,
  authError: '',
  isLoadingUser: true,
  login: () => Promise.resolve(),
  logout: () => Promise.resolve(),
});

export const useAuthContext = (): AuthContext => useContext(AuthContext);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [isLoadingUser, setIsLoadingUser] = useState(true);
  const [currentUser, setCurrentUser] = useState<User | undefined>(undefined);
  const [authError, setAuthError] = useState('');

  // Restore session on mount (client-side only)
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const restore = async () => {
      const { user, error } = await ProtonSDK.restoreSession();
      setIsLoadingUser(false);
      if (user) {
        setCurrentUser(user);
      }
      // Don't show error for restore failures - just means no cached session
    };

    restore();
  }, []);

  const login = async () => {
    console.log('[AuthProvider] login triggered');
    setAuthError('');
    const { user, error } = await ProtonSDK.login();
    if (error || !user) {
      setAuthError(error || 'Login failed');
      return;
    }
    setCurrentUser(user);
  };

  const logout = async () => {
    await ProtonSDK.logout();
    setCurrentUser(undefined);
  };

  const value = useMemo(
    () => ({
      currentUser,
      authError,
      isLoadingUser,
      login,
      logout,
    }),
    [currentUser, authError, isLoadingUser]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
