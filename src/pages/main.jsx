import React from 'react'
//import Blah from '../components/blah'
import MapComponent  from '../components/map';
import BreezoMap from '../components/breezMap';
const MainPage = () =>
{
    // const [ coords, SetCoords ] = React.useState( {} )
    // navigator.geolocation.getCurrentPosition( position =>
    // {
    //     SetCoords( position.coords )
    // } );

    return (
        <div>
            {/* <Blah latitude={ coords.latitude } longitude={ coords.longitude } /> */ }
            <BreezoMap></BreezoMap>
        </div>
        
    )
}
export default MainPage;
