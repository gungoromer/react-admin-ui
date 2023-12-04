import axios, { AxiosInstance } from "axios";

export abstract class HttpClient {
  protected instance: AxiosInstance | undefined;

  protected createInstance(): AxiosInstance {
    this.instance = axios.create({
      baseURL: `${import.meta.env.VITE_BASE_URL}`,
      headers: {
        "Content-Type": "application/json",
      },
    });
    this.initializeResponseInterceptor();
    return this.instance;
  }

  private initializeResponseInterceptor = () => {
    // this.instance?.interceptors.response.use(
    //   function (response) {
    //     console.log("interceptors response");
    //     console.log(response);
    //     // Any status code that lie within the range of 2xx cause this function to trigger
    //     // Do something with response data
    //     return response;
    //   },
    //   function (error) {
    //     console.log("interceptors error");
    //     console.log(error);
    //     // Any status codes that falls outside the range of 2xx cause this function to trigger
    //     // Do something with response error
    //     return Promise.reject(error);
    //   }
    // );

    const token = localStorage.getItem("token");
    this.instance?.interceptors.request.use((config: any) => {
      config.headers = {
        Authorization: `Bearer ${token}`,
      };
      return config;
    });
  };
}
