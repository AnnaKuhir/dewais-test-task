import {
  Avatar,
  Card,
  CardContent,
  CardHeader,
  Typography,
} from "@mui/material";
import { GitHubUser } from "../../api/servises/userService";

export const UserCard = ({ userData }: { userData: GitHubUser }) => {
  return (
    <Card style={{ width: "100%" }}>
      <CardHeader
        avatar={<Avatar src={userData.avatar_url} />}
        title={userData.login}
        subheader={`Followers: ${userData.followers} | Following: ${userData.following}`}
      />
      <CardContent>
        <Typography>Name: {userData.name}</Typography>
        <Typography>Bio: {userData.bio || "No content"}</Typography>
        <Typography>
          GitHub profile:
          <a href={userData.html_url} target="_blank" rel="noopener noreferrer">
            {userData.html_url}
          </a>
        </Typography>
      </CardContent>
    </Card>
  );
};
