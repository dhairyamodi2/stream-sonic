export interface ResponseType<T> {
    status : 200 | 201 | 400 | 401 | 403 | 422 | 500;
    success: boolean;
    message: string;
    data: T
}