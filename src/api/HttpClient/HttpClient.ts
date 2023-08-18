import axios, { AxiosInstance, AxiosRequestConfig } from "axios";

const axiosInstance = axios.create();

class HttpClient {
  private httpClient: AxiosInstance;

  constructor(httpClient: AxiosInstance) {
    this.httpClient = httpClient;
  }

  get<ResponseData>(
    url: string,
    config?: AxiosRequestConfig
  ): Promise<ResponseData> {
    return this.httpClient.get(url, config);
  }
}

export const httpClient = new HttpClient(axiosInstance);
