import { Box, Button, Container, Grid } from "@mui/material";
import React from "react";

const Login = () => {
  // 50 - NavBar height
  return (
    <Container>
      <Grid
        container
        style={{ height: window.innerHeight - 50 }}
        alignItems="center"
        justifyContent="center" 
      >
        <Grid
          style={{ width: 400, background: "lightgray" }}
          container
          alignItems="center"
          direction="column"
        >
          <Box p={5}>
            <Button variant="outlined">Выйти с помощью Google</Button>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Login;
