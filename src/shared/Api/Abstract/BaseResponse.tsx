export class BaseResponse<T> {
  Status: number = 0;
  Message?: string;
  Value?: T;
}
