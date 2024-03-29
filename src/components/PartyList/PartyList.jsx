// CODE AND INSPIRATION FROM:
// https://youtu.be/7GO4P0ewVfI
// https://youtu.be/UKdQjQX1Pko

import React from "react";
import img1 from "../../img/test.jpg";
import {
    CircularProgress,
    Grid,
    Typography,
    InputLabel,
    MenuItem,
    FormControl,
    Select,
} from "@material-ui/core";

import PartyDetails from "../PartyDetails/PartyDetails";
import useStyles from "./styles";

const PartyList = () => {
    const classes = useStyles();
    const [type, setType] = React.useState("Events");
    const [rating, setRating] = React.useState("");

    const parties = [
        { name: "Event 1", description: "This is a description", image: img1 },
        { name: "Event 2", description: "This is a description", image: img1 },
        { name: "Event 3", description: "This is a description", image: img1 },
        { name: "Event 4", description: "This is a description", image: img1 },
        { name: "Event 5", description: "This is a description", image: img1 },
        { name: "Event 6", description: "This is a description", image: img1 },
        { name: "Event 7", description: "This is a description", image: img1 },
        { name: "Event 8", description: "This is a description", image: img1 },
    ];

    return (
        <div className={classes.container}>
            <Typography variant="h4">Events around you</Typography>
            <FormControl className={classes.formControl}>
                <InputLabel>Type</InputLabel>
                <Select value={type} onChange={(e) => setType(e.target.value)}>
                    <MenuItem value="Events">Events</MenuItem>
                    <MenuItem value="DJs">DJs</MenuItem>
                </Select>
            </FormControl>
            <Grid container spacing={3} className={classes.list}>
                {parties?.map((party, i) => (
                    <Grid item key={i} xs={12} md={6}>
                        <PartyDetails party={party} />
                    </Grid>
                ))}
            </Grid>
        </div>
    );
};

export default PartyList;
