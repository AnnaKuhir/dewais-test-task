import { AxiosResponse } from "axios";
import { AnyType } from "../../globalTypes";

export interface BaseResponse<T = AnyType> extends AxiosResponse {
  data: T;
}
