import React from 'react'
import MapComponent  from '../components/map';

const MainPage = () =>
{
    // const [ coords, SetCoords ] = React.useState( {} )
    // navigator.geolocation.getCurrentPosition( position =>
    // {
    //     SetCoords( position.coords )
    // } );

    return (
        <div>
            <MapComponent></MapComponent>
        </div>
        
    )
}
export default MainPage;
