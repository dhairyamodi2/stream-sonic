export interface ResponseType<T>{
    success: boolean;
    message: string;
    data: T
}