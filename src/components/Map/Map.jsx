import React from 'react';
import GoogleMapReact from 'google-map-react';
import { Paper, Typography, useMediaQuery } from '@material-ui/core';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import Rating from '@material-ui/lab';

import useStyles from './styles';

const Map = () => {
    const apiKey = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;
    const classes = useStyles();
    const isMobile = useMediaQuery('(min-width:600px)'); // set to false if device is larger than 600px
    const coordinates = { lat: 0, lng: 0 };

    return (
        <div className={classes.mapContainer}>
            <GoogleMapReact
                bootstrapURLKeys={{ key: apiKey}}
                defaultCenter={coordinates}
                center={coordinates}
                defaultZoom={14}
                margin={[50, 50, 50, 50]}
                options={''}
                onChange={''}
                onChildClick={''}
            >

            </GoogleMapReact>
        </div>
    );
}

export default Map;