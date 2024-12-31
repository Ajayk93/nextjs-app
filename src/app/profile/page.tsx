"use client"
import { get } from 'http';
import React, { useEffect } from 'react';

type GeoLocation = {
    city: string;
}

const ProfilePage: React.FC = () => {
    const [geoLocation, setGeoLocation] = React.useState<GeoLocation | null>(null);

    useEffect(() => {
        async function fetchGeoLocation() {
            try{
                const response =  await fetch('https://spiderweb-ajayk93-cuat.vercel.app/api/geoip')
                const result: GeoLocation  = await response.json();
                setGeoLocation(result)
            }
            catch(error){
                console.error('Error fetching geo location:', error);
            }
       }
        fetchGeoLocation();
        }, 
    []);

    console.log('geoLocation:', geoLocation);
    return (
        <div>
            <h1>Profile Page</h1>
            <p>Welcome to your profile!</p>
            <p>Geo Location: {geoLocation?.city}</p>
        </div>
    );
};

export default ProfilePage;