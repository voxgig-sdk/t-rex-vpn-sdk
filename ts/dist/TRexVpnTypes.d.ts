export interface Authentication {
    email: string;
    expiry?: string;
    password: string;
    token?: string;
    user?: Record<string, any>;
}
export interface AuthenticationCreateData {
    email: string;
    password: string;
}
