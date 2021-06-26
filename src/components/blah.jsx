import React from 'react'
//Fetching Data with Custom Hook
import useFetch from "react-fetch-hook"

export const Blah = ({latitude,longitude}) => {
    const key = "ce9769b505314d7ba636addc9370870f"
    const GetData=async()=>{
        const response = await fetch(`https://api.breezometer.com/air-quality/v2/current-conditions?lat=${latitude}&lon=${longitude}&key=${key}`)
        const data = await response.json()
        console.log(data)
    }
    React.useEffect(()=>{GetData()},[latitude])
    
    return (
        <div>   
          latitude= {latitude}
          
           {longitude} 
        </div>  
    )
}
