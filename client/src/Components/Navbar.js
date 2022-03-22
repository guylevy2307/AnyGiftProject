import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { Link, useHistory } from "react-router-dom";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#1976d2",
    },
  },
});

export default function Navbar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{
              flexGrow: 1,
              textAlign: "center",
              fontWeight: "400",
              fontSize: "1.5rem",
              letterSpacing: "0.04rem",
            }}
          >
            AnyGift
          </Typography>
          <Button href="/cards" color="inherit">
            Cards
          </Button>
          <Button href="/categories" color="inherit">
            Categories
          </Button>
          <Button href="/sign-up" color="inherit">
            Sign-Up
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
