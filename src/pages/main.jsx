import React from 'react'

//Fetching Data with Custom Hook
    import useFetch from "react-fetch-hook"


const Main = () => {
    const {data} = useFetch("https://randomuser.me/api/");
    console.log(data);

    return (
        <div>
        </div>
    )
}
export default Main;
