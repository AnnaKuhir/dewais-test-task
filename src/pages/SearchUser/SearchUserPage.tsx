import { useRef } from "react";
import { Box, CircularProgress, Container, Typography } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import {
  getUserByUserName,
  resetUser,
  selectUser,
} from "../../slices/userSlice";
import { useAppDispatch, useAppSelector } from "../../store/store";
import { useForm } from "react-hook-form";
import DeleteIcon from "@mui/icons-material/Delete";
import { Nullable } from "../../globalTypes";
import { Button, ControlledInput, UserCard } from "../../components";

type FromInputs = {
  username: string;
};

export const SearchUserPage = () => {
  const dispatch = useAppDispatch();
  const { user, error, isLoading } = useAppSelector(selectUser);
  const searchRef = useRef<Nullable<HTMLInputElement>>(null);
  const defaultValues: FromInputs = { username: "" };

  const {
    handleSubmit,
    control,
    reset,
    formState: { isValid },
  } = useForm<FromInputs>({
    defaultValues,
  });

  const onSubmit = async ({ username }: FromInputs) => {
    if (username) {
      dispatch(getUserByUserName({ userName: username }));
    }
  };

  const onReset = () => {
    dispatch(resetUser());
    reset();
    searchRef.current?.focus();
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
                onClick={onReset}
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
