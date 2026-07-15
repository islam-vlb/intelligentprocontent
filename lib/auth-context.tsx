"use client";

import { createContext, useContext, useEffect, useState, ReactNode } from "react";

const PREFIX = "ipca_";
const USERS_KEY = `${PREFIX}users`;
const SESSION_KEY = `${PREFIX}session`;

export type User = {
  name: string;
  email: string;
};

type StoredUser = User & { password: string };

type AuthResult = { ok: true } | { ok: false; error: string };

type AuthContextType = {
  user: User | null;
  loading: boolean;
  register: (name: string, email: string, password: string) => AuthResult;
  login: (email: string, password: string) => AuthResult;
  logout: () => void;
  updateName: (name: string) => void;
};

const AuthContext = createContext<AuthContextType | null>(null);

function readUsers(): StoredUser[] {
  try {
    const raw = localStorage.getItem(USERS_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

function writeUsers(users: StoredUser[]) {
  localStorage.setItem(USERS_KEY, JSON.stringify(users));
}

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(SESSION_KEY);
      if (raw) setUser(JSON.parse(raw));
    } catch {}
    setLoading(false);
  }, []);

  function register(name: string, email: string, password: string): AuthResult {
    const users = readUsers();
    const normalizedEmail = email.trim().toLowerCase();
    if (users.some((u) => u.email === normalizedEmail)) {
      return { ok: false, error: "An account with this email already exists." };
    }
    const newUser: StoredUser = { name: name.trim(), email: normalizedEmail, password };
    writeUsers([...users, newUser]);
    const sessionUser: User = { name: newUser.name, email: newUser.email };
    localStorage.setItem(SESSION_KEY, JSON.stringify(sessionUser));
    setUser(sessionUser);
    return { ok: true };
  }

  function login(email: string, password: string): AuthResult {
    const users = readUsers();
    const normalizedEmail = email.trim().toLowerCase();
    const found = users.find((u) => u.email === normalizedEmail && u.password === password);
    if (!found) {
      return { ok: false, error: "Invalid email or password." };
    }
    const sessionUser: User = { name: found.name, email: found.email };
    localStorage.setItem(SESSION_KEY, JSON.stringify(sessionUser));
    setUser(sessionUser);
    return { ok: true };
  }

  function logout() {
    localStorage.removeItem(SESSION_KEY);
    setUser(null);
  }

  function updateName(name: string) {
    if (!user) return;
    const trimmed = name.trim();
    if (!trimmed) return;
    const users = readUsers();
    writeUsers(users.map((u) => (u.email === user.email ? { ...u, name: trimmed } : u)));
    const sessionUser: User = { name: trimmed, email: user.email };
    localStorage.setItem(SESSION_KEY, JSON.stringify(sessionUser));
    setUser(sessionUser);
  }

  return (
    <AuthContext.Provider value={{ user, loading, register, login, logout, updateName }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used within AuthProvider");
  return ctx;
}
