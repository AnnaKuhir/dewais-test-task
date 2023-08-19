import { AxiosResponse } from "axios";
// we can add aliases throughout the project to get rid of long paths
import { AnyType } from "../../globalTypes";

export interface BaseResponse<T = AnyType> extends AxiosResponse {
  data: T;
}
