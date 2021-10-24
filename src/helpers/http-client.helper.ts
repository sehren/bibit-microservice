import axios, { AxiosInstance, AxiosResponse } from 'axios';
import * as https from 'https';

declare module 'axios' {
  // @ts-ignore
  interface AxiosResponse<T = any> extends Promise<T> {}
}

export abstract class HttpClient {
  protected readonly instance: AxiosInstance;

  public constructor(baseURL: string) {
    this.instance = axios.create({
      httpsAgent: new https.Agent({
        rejectUnauthorized: false,
      }),
      baseURL,
    });

    this._initializeResponseInterceptor();
  }

  private _initializeResponseInterceptor = (): void => {
    this.instance.interceptors.response.use(
      this._handleResponse,
      this._handleError,
    );
  };

  private _handleResponse = ({ data }: AxiosResponse): any => data;

  protected _handleError = (error: { any }): any => Promise.reject(error);
}
