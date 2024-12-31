import React, { useEffect } from 'react';

type GeoLocation = {
    city: string;
    country: string;
    ip: string;
    loc: string;
    org: string;
    postal: string;
    region: string;
}
const ProfilePage: React.FC = () => {
    const [geoLocation, setGeoLocation] = React.useState<GeoLocation | null>(null);

    useEffect(() => {
        fetch('https://spiderweb-ajayk93-cuat.vercel.app/api/geoip')
            .then(response => response.json())
            .then(data => setGeoLocation(data as GeoLocation))
            .catch(error => console.error('Error fetching geo location:', error));
    }, []);

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