import { BaseRepository } from "../Abstract/BaseRepository";
import { BaseResponse } from "../Abstract/Response/BaseResponse";
import { IUserLoginResponse } from "./Response/IUserLoginResponse";

class UserApi extends BaseRepository {
  constructor() {
    super();
    super.collection = "user";
  }

  public async login(
    mail: string,
    password: string
  ): Promise<BaseResponse<IUserLoginResponse>> {
    console.log("login");
    const instance = super.createInstance();
    const result = await instance
      .post(`/${this.collection}/login/email`, {
        mail,
        password,
      })
      .then((response) => {
        console.log("login response");
        console.log(response);

        return new Promise((resolve) => {
          const result: BaseResponse<IUserLoginResponse> = {
            Status: response.data.Status,
            Message: response.data.Message,
            Value: response.data.Value,
          };
          resolve(result);
        });
      })
      .catch((err) => {
        console.log("login error");
        console.log(err);

        return new Promise((resolve) => {
          const result: BaseResponse<IUserLoginResponse> = {
            Status: 0,
            Message: err.message,
          };
          resolve(result);
        });
      });

    console.log("login result");
    return result as BaseResponse<IUserLoginResponse>;
  }
}

export default UserApi;
