import { useRef } from "react";
import { Box, CircularProgress, Container, Typography } from "@mui/material";
import { Button } from "../../components/Button";
import SearchIcon from "@mui/icons-material/Search";
import { ControlledInput } from "../../components/ControlledInput";
import {
  getUserByUserName,
  resetUser,
  selectUser,
} from "../../slices/userSlice";
import { useAppDispatch, useAppSelector } from "../../store/store";
import { useForm } from "react-hook-form";
import { UserCard } from "../../components/UserCard/UserCard";
import DeleteIcon from "@mui/icons-material/Delete";
import { Nullable } from "../../globalTypes";

export const SearchUserPage = () => {
  const dispatch = useAppDispatch();
  const { user, error, isLoading } = useAppSelector(selectUser);
  const searchRef = useRef<Nullable<HTMLInputElement>>(null);

  const {
    handleSubmit,
    control,
    reset,
    formState: { isValid },
  } = useForm<{
    username: string;
  }>({
    defaultValues: { username: "" },
  });

  const onSubmit = async (data: { username: string }) => {
    if (data.username) {
      dispatch(getUserByUserName({ userName: data.username }));
    }
  };

  return (
    <Container maxWidth="sm" className="container">
      <Box display="flex" flexDirection="column" gap="20px">
        <Typography variant="h4" gutterBottom>
          GitHub User Search
        </Typography>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Box display="flex" flexDirection="column" gap="20px">
            <ControlledInput
              inputRef={searchRef}
              name="username"
              control={control}
              label="User Name"
              rules={{
                required: true,
              }}
            />
            <Box display="flex" gap="10px">
              <Button
                startIcon={<SearchIcon />}
                disabled={isLoading || !isValid}
              >
                Search
              </Button>
              <Button
                startIcon={<DeleteIcon />}
                disabled={!user}
                type="button"
                onClick={() => {
                  dispatch(resetUser());
                  reset();
                  searchRef.current?.focus();
                }}
              >
                Reset
              </Button>
            </Box>
          </Box>
        </form>
        <Box display="flex" justifyContent="center">
          {user ? (
            <UserCard userData={user} />
          ) : error ? (
            <Typography>{error}</Typography>
          ) : null}
          {isLoading && <CircularProgress />}
        </Box>
      </Box>
    </Container>
  );
};
