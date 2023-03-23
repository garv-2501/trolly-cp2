// SOME CODE AND INSPIRATION FROM:
// https://youtu.be/fzxEECHnsvU
// https://material-ui.com/components

import React, { useState } from "react";
// For google maps search bar autocomplete:
// import { Autocomplete } from "@react-google-maps/api";
// Material UI imports:
import { Mail, Notifications } from "@material-ui/icons";
import {
  AppBar,
  Avatar,
  Badge,
  Box,
  InputBase,
  Menu,
  MenuItem,
  Modal,
  styled,
  Toolbar,
  Typography,
} from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";

// Functions for different component's styling for the header navbar: ( edit this to make it look like self made )
const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});

const Search = styled("div")(({ theme }) => ({
  backgroundColor: "white",
  padding: "0 10px",
  marginBottom: "5px",
  borderRadius: "5px",
  width: "40%",
}));

const Icons = styled(Box)(({ theme }) => ({
  display: "none",
  alignItems: "center",
  gap: "20px",
  [theme.breakpoints.up("sm")]: {
    display: "flex",
  },
}));

const UserBox = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: "10px",
  [theme.breakpoints.up("sm")]: {
    display: "none",
  },
}));

// The main navbar component:
const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <AppBar position="sticky">
      <StyledToolbar>
        <Typography
          variant="h4"
          sx={{
            display: { xs: "none", sm: "block" },
            fontWeight: "bold",
          }}
        >
          Trolly
        </Typography>
        <Search>
          <SearchIcon color="black" />
          <InputBase placeholder="search..." />
        </Search>
        <Icons>
          <Badge badgeContent={2} color="error">
            <Notifications />
          </Badge>
          <Avatar
            sx={{ width: 30, height: 30 }}
            src="https://cdn.pixabay.com/photo/2016/04/08/16/13/people-1316427_960_720.jpg"
            onClick={(e) => setOpen(true)}
          />
        </Icons>
        <UserBox onClick={(e) => setOpen(true)}>
          <Avatar
            sx={{ width: 30, height: 30 }}
            src="https://cdn.pixabay.com/photo/2016/04/08/16/13/people-1316427_960_720.jpg"
          />
          <Typography variant="span">John</Typography>
        </UserBox>
      </StyledToolbar>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        open={open}
        onClose={(e) => setOpen(false)}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
      >
        <MenuItem>Upgraded</MenuItem>
        <MenuItem>My events</MenuItem>
        <MenuItem>Saved</MenuItem>
        <MenuItem>Logout</MenuItem>
      </Menu>
    </AppBar>
  );
};

export default Header;

// OLD CODE:

// const Header = () => {
//     // Using the styles:
//     const classes = useStyles();

//     return (
//         // The basic way of making a header that I found on the internet.
//         // Someone please edit it to make it look better.
//         // Mind that I am using material-ui, so go through the docs to see how to use it.
//         <AppBar position="static">
//             <Toolbar className={classes.toolbar}>
//                 <Typography variant="h5" className={classes.title}>
//                     Trolly
//                 </Typography>
//                 <Box display="flex">
//                     <Typography variant="h6" className={classes.title}>
//                         Find your party:
//                     </Typography>
//                     {/* <Autocomplete> */}
//                     <div className={classes.search}>
//                         <div className={classes.searchIcon}>
//                             <SearchIcon />
//                         </div>
//                         <InputBase
//                             placeholder="Search…"
//                             classes={{
//                                 root: classes.inputRoot,
//                                 input: classes.inputInput,
//                             }}
//                             inputProps={{ "aria-label": "search" }}
//                         />
//                     </div>
//                     {/* </Autocomplete> */}
//                 </Box>
//             </Toolbar>
//         </AppBar>
//     );
// };

// export default Header;
