import { GitHubUser } from "../../components/UserCard/User.model";
import { httpClient } from "../HttpClient/HttpClient";
import { BaseResponse } from "../HttpClient/HttpClient.model";

class UserService {
  getUserByUserName(userName: string): Promise<BaseResponse<GitHubUser>> {
    return httpClient.get<BaseResponse<GitHubUser>>(
      //we can creat baseUrl https://api.github.com in .env file and use it throughout the project
      `https://api.github.com/users/${userName}`
    );
  }
}

export const userService = new UserService();
