'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

export interface User {
  id: string;
  email: string;
  name: string;
  phone?: string;
  role?: 'admin' | 'user';
}

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => Promise<boolean>;
  logout: () => void;
  register: (email: string, password: string, name: string, phone?: string) => Promise<boolean>;
  isAuthenticated: boolean;
  isLoading: boolean;
  isAdmin: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Mock users database (in production, this would be an API call)
const mockUsers: Array<User & { password: string }> = [
  {
    id: '1',
    email: 'admin@devicestore.vn',
    password: 'admin123',
    name: 'Admin',
    phone: '0123456789',
    role: 'admin',
  },
  {
    id: '2',
    email: 'user@example.com',
    password: 'user123',
    name: 'Người Dùng',
    phone: '0987654321',
    role: 'user',
  },
];

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  // Load user from localStorage on mount
  useEffect(() => {
    const savedUser = localStorage.getItem('user');
    if (savedUser) {
      try {
        setUser(JSON.parse(savedUser));
      } catch (error) {
        console.error('Error loading user from localStorage:', error);
        localStorage.removeItem('user');
      }
    }
    setIsLoading(false);
  }, []);

  // Save user to localStorage whenever user changes
  useEffect(() => {
    if (user) {
      localStorage.setItem('user', JSON.stringify(user));
    } else {
      localStorage.removeItem('user');
    }
  }, [user]);

  const login = async (email: string, password: string): Promise<boolean> => {
    // Simulate API call delay
    await new Promise((resolve) => setTimeout(resolve, 500));

    const foundUser = mockUsers.find(
      (u) => u.email === email && u.password === password
    );

    if (foundUser) {
      const { password: _, ...userWithoutPassword } = foundUser;
      setUser(userWithoutPassword);
      return true;
    }

    return false;
  };

  const register = async (
    email: string,
    password: string,
    name: string,
    phone?: string
  ): Promise<boolean> => {
    // Simulate API call delay
    await new Promise((resolve) => setTimeout(resolve, 500));

    // Check if user already exists
    const existingUser = mockUsers.find((u) => u.email === email);
    if (existingUser) {
      return false; // User already exists
    }

    // Create new user - always as 'user' role, never 'admin'
    const newUser: User = {
      id: Date.now().toString(),
      email,
      name,
      phone,
      role: 'user', // Always set role to 'user' for new registrations
    };

    // Add to mock database
    mockUsers.push({ ...newUser, password });

    setUser(newUser);
    return true;
  };

  const logout = () => {
    setUser(null);
  };

  const isAdmin = user?.role === 'admin' || user?.email === 'admin@devicestore.vn';

  return (
    <AuthContext.Provider
      value={{
        user,
        login,
        logout,
        register,
        isAuthenticated: !!user,
        isLoading,
        isAdmin,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}

