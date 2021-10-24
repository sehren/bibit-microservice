import { HttpException } from '@nestjs/common';

export class Responses {
  message: string;
  data: any;

  constructor(message = '', data: any = null) {
    this.message = message;
    this.data = data;
  }
}

export const response = (message: string, data: any = null) =>
  new Responses(message, data);

export const responseError = (message: string, code = 400) => {
  return Promise.reject(new HttpException({ message: message }, code));
};
