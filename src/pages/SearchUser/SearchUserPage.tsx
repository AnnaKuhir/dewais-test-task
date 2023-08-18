import { Avatar, Box, Container, Typography } from "@mui/material";
import { Button } from "../../components/Button";
import SearchIcon from "@mui/icons-material/Search";
import { ControlledInput } from "../../components/ControlledInput";
import { getUserByUserName, selectUser } from "../../slices/userSlice";
import { useAppDispatch, useAppSelector } from "../../store/store";
import { useForm } from "react-hook-form";
import { UserCard } from "../../components/UserCard/UserCard";

export const SearchUserPage = () => {
  const dispatch = useAppDispatch();
  const { user } = useAppSelector(selectUser);

  const { handleSubmit, control } = useForm<{ username: string }>({
    defaultValues: { username: "" },
  });

  const onSubmit = (data: { username: string }) => {
    if (data.username) {
      dispatch(getUserByUserName({ userName: data.username }));
    }
  };
  return (
    <Container maxWidth="sm" className="container">
      <Box display="flex" flexDirection="column">
        <Typography variant="h4" gutterBottom>
          GitHub User Search
        </Typography>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Box display="flex" flexDirection="column">
            <ControlledInput
              name="username"
              control={control}
              label="User Name"
            />
            <Button startIcon={<SearchIcon />}>Search</Button>
          </Box>
        </form>
        {user && <UserCard userData={user} />}
      </Box>
    </Container>
  );
};
