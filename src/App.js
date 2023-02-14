import React from "react";

// Imports from material-ui
import { CssBaseline, Grid } from "@material-ui/core";

// Importing the App components from the components folder
import Header from "./components/Header/Header";
import Map from "./components/Map/Map";
import PartyDetails from "./components/PartyDetails/PartyDetails";
import PartyList from "./components/PartyList/PartyList";

const App = () => {
    return (
        <>
            <CssBaseline />
            <Header />
            <Grid container spacing={3} style={{ width: "100%" }}>
                <Grid item xs={12} md={4}>
                    <PartyList />
                </Grid>
                <Grid item xs={12} md={8}>
                    <Map />
                </Grid>
            </Grid>
        </>
    );
};

export default App;
