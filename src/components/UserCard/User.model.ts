import { Nullable } from "../../globalTypes";

export interface GitHubUser {
  id: number;
  login: string;
  avatar_url: string;
  html_url: string;
  name: Nullable<string>;
  bio: Nullable<string>;
  followers: number;
  following: number;
}

export interface UserData {
  userData: GitHubUser;
}
