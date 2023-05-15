import {
  Alert,
  AlertDescription,
  AlertIcon,
  AlertTitle,
  Box,
  Button,
  Flex,
  Spacer,
} from "@chakra-ui/react";
import { Link, useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <Flex justifyContent="center" alignItems="center" height="100vh">
      <Box>
        <Alert
          status="error"
          variant="subtle"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          textAlign="center"
          w="fit-content"
          borderRadius={8}
          p={8}
          gap={2}
          position="relative"
          // height="100%"
        >
          <AlertIcon boxSize="40px" mr={0} />
          <AlertTitle fontSize="lg">Oops!</AlertTitle>
          <AlertDescription maxWidth="sm">
            Sorry, an unexpected error has occurred.
          </AlertDescription>
          <Button as={Link} to="/" mt={4}>
            Home
          </Button>
        </Alert>
      </Box>
    </Flex>
  );
}
