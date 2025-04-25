
export interface User {
    uid: string;
    email: string;
    username: string;
    role: string[];
    picture?: string;
  }
  
  export interface LoginPayload {
    email: string;
    password: string;
  }
  
  export interface LoginResponse {
    authenticated: boolean;
    token: string;
    refreshToken: string;
  }
  
  export interface AuthState {
    user: User | null;
    token: string | null;
    loading: boolean;
    error: string | null;
  }
  