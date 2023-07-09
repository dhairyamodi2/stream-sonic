import { User } from "api/src/types/Prisma";

export interface AuthState {
    isAuthenticated : boolean;
    isLoading : boolean;
    user : User | null;
    message: string;
    visited: boolean
}


export interface AuthActions {
    type : string;
    payload : {user : User | null, message : string}
}


