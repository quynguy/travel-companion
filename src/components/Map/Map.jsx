import React from 'react';
import GoogleMapReact from 'google-map-react';
import { Paper, Typography } from '@material-ui/core';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';

import useStyles from './map-styles';

const Map = ({ setCoordinates, setBounds, coordinates, places, setChildClicked }) => {
    const apiKey = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;
    const classes = useStyles();

    return (
        <div className={classes.mapContainer}>
            <GoogleMapReact
                bootstrapURLKeys={{ key: apiKey }}
                defaultCenter={coordinates}
                center={coordinates}
                defaultZoom={14}
                margin={[50, 50, 50, 50]}
                options={''}
                onChange={(e) => {
                    setCoordinates({ lat: e.center.lat, lng: e.center.lng });
                    setBounds({ ne: e.marginBounds.ne, sw: e.marginBounds.sw });
                }}
                onChildClick={(child) => setChildClicked(child)}
            >
                {places?.map((place, i) => {
                    console.log("Rendering LocationOnOutlinedIcon for place:", place); 
                    return (
                        <div
                            className={classes.markerContainer}
                            lat={Number(place.latitude)}
                            lng={Number(place.longitude)}
                            key={i}
                        >
                            <LocationOnOutlinedIcon color="primary" fontSize="large" />
                            <Paper elevation={3} className={classes.paper}>
                                <Typography className={classes.typography} variant="subtitle2" gutterBottom>
                                    {place.name}
                                </Typography>
                                <img
                                    className={classes.pointer}
                                    src={place.photo ? place.photo.images.large.url : 'https://www.foodserviceandhospitality.com/wp-content/uploads/2016/09/Restaurant-Placeholder-001.jpg'}
                                    alt={place.name}
                                />
                                {/* <Rating size="small" value={Number(place.rating)} readOnly /> */}
                            </Paper>
                        </div>
                    );
                })}
            </GoogleMapReact>
        </div>
    );
};

export default Map;
