import { HttpClient } from "./HttpClient";
import { BaseResponse } from "./Response/BaseResponse";

export interface IBaseRepository {
  get<T>(id: any): Promise<BaseResponse<T>>;
  getMany<T>(skip: number, take: number): Promise<BaseResponse<T[]>>;
  create<T>(id: any, item: T): Promise<BaseResponse<T>>;
  update<T>(id: any, item: T): Promise<BaseResponse<T>>;
  delete<T>(id: any): Promise<BaseResponse<T>>;
}

export abstract class BaseRepository
  extends HttpClient
  implements IBaseRepository
{
  public collection: string | undefined;

  public async get<T>(id: string): Promise<BaseResponse<T>> {
    const instance = this.createInstance();

    const result = await instance
      .get(`/${this.collection}/${id}`)
      .then((response) => {
        console.log("baserepository response");
        console.log(response);

        return new Promise((resolve) => {
          const result: BaseResponse<T> = {
            Status: response.data.Status,
            Message: response.data.Message,
            Value: response.data.Value,
          };
          resolve(result);
        });
      })
      .catch((err) => {
        console.log("baserepository error");
        console.log(err);

        return new Promise((resolve) => {
          const result: BaseResponse<T> = {
            Status: 0,
            Message: err.message,
          };
          resolve(result);
        });
      });
    return result as BaseResponse<T>;
  }

  public async getMany<T>(
    skip: number,
    take: number
  ): Promise<BaseResponse<T[]>> {
    const instance = this.createInstance();

    const result = await instance
      .get(`/${this.collection}?skip=${skip}&take=${take}`)
      .then((response) => {
        return new Promise((resolve) => {
          const result: BaseResponse<T> = {
            Status: response.data.Status,
            Message: response.data.Message,
            Value: response.data.Value,
          };
          resolve(result);
        });
      })
      .catch((err) => {
        return new Promise((resolve) => {
          const result: BaseResponse<T> = {
            Status: 0,
            Message: err.message,
          };
          resolve(result);
        });
      });

    return result as BaseResponse<T[]>;
  }

  public async create<T>(item: T): Promise<BaseResponse<T>> {
    const instance = this.createInstance();
    const result = await instance
      .post(`/${this.collection}/`, item)
      .then((response) => {
        return new Promise((resolve) => {
          const result: BaseResponse<T> = {
            Status: response.data.Status,
            Message: response.data.Message,
            Value: response.data.Value,
          };
          resolve(result);
        });
      })
      .catch((err) => {
        return new Promise((resolve) => {
          const result: BaseResponse<T> = {
            Status: 0,
            Message: err.message,
          };
          resolve(result);
        });
      });
    return result as BaseResponse<T>;
  }

  public async update<T>(id: string, item: T): Promise<BaseResponse<T>> {
    const instance = this.createInstance();
    const result = await instance
      .put(`/${this.collection}/${id}`, item)
      .then((response) => {
        return new Promise((resolve) => {
          const result: BaseResponse<T> = {
            Status: response.data.Status,
            Message: response.data.Message,
            Value: response.data.Value,
          };
          resolve(result);
        });
      })
      .catch((err) => {
        return new Promise((resolve) => {
          const result: BaseResponse<T> = {
            Status: 0,
            Message: err.message,
          };
          resolve(result);
        });
      });
    return result as BaseResponse<T>;
  }

  public async delete<T>(id: any): Promise<BaseResponse<T>> {
    const instance = this.createInstance();
    const result = await instance
      .delete(`/${this.collection}/${id}`)
      .then((response) => {
        return new Promise((resolve) => {
          const result: BaseResponse<T> = {
            Status: response.data.Status,
            Message: response.data.Message,
            Value: response.data.Value,
          };
          resolve(result);
        });
      })
      .catch((err) => {
        return new Promise((resolve) => {
          const result: BaseResponse<T> = {
            Status: 0,
            Message: err.message,
          };
          resolve(result);
        });
      });
    return result as BaseResponse<T>;
  }
}
