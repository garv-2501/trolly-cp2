import React from "react";
// For google maps search bar autocomplete:
import { Autocomplete } from "@react-google-maps/api";
// Material UI imports:
import { AppBar, Toolbar, Typography, InputBase, Box } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
// Importing styles:
import useStyles from "./styles";

const Header = () => {
    // Using the styles:
    const classes = useStyles();

    return (
        // The basic way of making a header that I found on the internet.
        // Someone please edit it to make it look better.
        // Mind that I am using material-ui, so go through the docs to see how to use it.
        <AppBar position="static">
            <Toolbar className={classes.toolbar}>
                <Typography variant="h5" className={classes.title}>
                    Trolly
                </Typography>
                <Box display="flex">
                    <Typography variant="h6" className={classes.title}>
                        Find your party:
                    </Typography>
                    {/* <Autocomplete> */}
                    <div className={classes.search}>
                        <div className={classes.searchIcon}>
                            <SearchIcon />
                        </div>
                        <InputBase
                            placeholder="Search…"
                            classes={{
                                root: classes.inputRoot,
                                input: classes.inputInput,
                            }}
                            inputProps={{ "aria-label": "search" }}
                        />
                    </div>
                    {/* </Autocomplete> */}
                </Box>
            </Toolbar>
        </AppBar>
    );
};

export default Header;
