import React from "react";
import GoogleMapReact from "google-map-react";
import { Paper, Typography, useMediaQuery } from "@material-ui/core";
import LocationOnOutlinedIcon from "@material-ui/icons/LocationOnOutlined";
import Rating from "@material-ui/lab";

import useStyles from "./styles";

const Map = () => {
    const classes = useStyles();
    const isMobile = useMediaQuery("(min-width:600px)");

    const coordinates = { lat: 51.509865, lng: 0.118092 };

    return (
        <div className={classes.mapContainer}>
            <GoogleMapReact
                // convert to env variable
                bootstrapURLKeys={{
                    key: "",
                }}
                defaultCenter={coordinates}
                defaultZoom={12}
                margin={[50, 50, 50, 50]}
                options={""}
                onChange={""}
                onChildClick={""}
            ></GoogleMapReact>
        </div>
        // <div>Hello world</div>
    );
};

export default Map;
