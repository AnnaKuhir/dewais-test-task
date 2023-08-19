import {
  Avatar,
  Card,
  CardContent,
  CardHeader,
  Typography,
} from "@mui/material";
import { UserData } from "./User.model";

export const UserCard: React.FC<UserData> = ({
  userData: { avatar_url, login, followers, following, name, bio, html_url },
}) => {
  return (
    <Card style={{ width: "100%" }}>
      <CardHeader
        avatar={<Avatar src={avatar_url} />}
        title={login}
        subheader={`Followers: ${followers} | Following: ${following}`}
      />
      <CardContent>
        <Typography>Name: {name}</Typography>
        <Typography>Bio: {bio || "No content"}</Typography>
        <Typography>
          GitHub profile:
          <a href={html_url} target="_blank" rel="noopener noreferrer">
            {html_url}
          </a>
        </Typography>
      </CardContent>
    </Card>
  );
};
