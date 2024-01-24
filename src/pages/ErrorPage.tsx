import { Box, Heading, Text } from "@chakra-ui/react";
import { isRouteErrorResponse, useRouteError } from "react-router-dom";
import NavBar from "../components/NavBar";

const ErrorPage = () => {
  const error = useRouteError();

  const errorString = isRouteErrorResponse(error)
    ? "This page does not exist"
    : "An unexpected error occured";

  return (
    <>
      <NavBar />
      <Box p="5">
        <Heading fontSize="6xl" as="h1">
          Oops!!
        </Heading>
        <Text fontSize="xl">{errorString}</Text>
      </Box>
    </>
  );
};

export default ErrorPage;
