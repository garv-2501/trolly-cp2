import React from "react";
import {
    Card,
    CardContent,
    Typography,
    CardActions,
    CardActionArea,
    Button,
    CardMedia,
} from "@material-ui/core";

const PartyDetails = ({ party }) => {
    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="160"
                    image="./test.jpg"
                    alt="Poster"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        Lizard
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Lizards are a widespread group of squamate reptiles,
                        with over 6,000 species, ranging across all continents
                        except Antarctica
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size="small" color="primary">
                    Share
                </Button>
            </CardActions>
        </Card>
    );
};

export default PartyDetails;
