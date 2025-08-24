export interface User {
    id: number;
    username: string;
    email: string;
    full_name: string;
    is_active: boolean;
    role: string;
}

export interface LoginResponse {
    access_token:string;
    token_type: string;
}