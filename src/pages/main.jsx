import React from 'react'

//Fetching Data with Custom Hook
    import useFetch from "react-fetch-hook"


const Main = () => {
    const {data} = useFetch("http://maps.openweathermap.org/maps/2.0/weather/TA2/10/-41.36384/114.57899?appid=363bb53f013659562bdd24040513481f");
    console.log(data);

    return (
        <div>
            <p>{data}</p>
        </div>
    )
}
export default Main;
