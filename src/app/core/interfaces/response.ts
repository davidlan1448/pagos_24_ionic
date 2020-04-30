export interface IResponse {
    success: boolean;
    data: any;
    message: string;
}

export interface IResponseError {
    success: boolean;
    data: any;
    message: string;
    errorCode: number | string;
}