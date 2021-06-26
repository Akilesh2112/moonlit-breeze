import React from "react";
import {TableContainer, Paper, TableCell, TableRow} from "@material-ui/core";

const AirContent = ({ latitude, longitude }) => {
  const [pollutants, SetPollut] = React.useState();
  const [err, SetErr] = React.useState();
  const key = "ce9769b505314d7ba636addc9370870f";
  const url = `https://api.breezometer.com/air-quality/v2/current-conditions?lat=${latitude}&lon=${longitude}&key=${key}&features=breezometer_aqi,local_aqi,health_recommendations,sources_and_effects,pollutants_concentrations,pollutants_aqi_information`;
  const GetData = async () => {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    if (data.data) {
      SetPollut(data.data.pollutants);
      SetErr(null)
    }
    if(data.error) {
      SetErr(data.error);
      SetPollut(null)
    }
  };
  React.useEffect(() => {
    GetData();
  }, [latitude, longitude]);

  return (
    <div>
      {pollutants && (
        <TableContainer component={Paper}>
          <TableRow>
            <TableCell>
              {pollutants.co.full_name}<div>({pollutants.co.display_name})</div>
            </TableCell>
            <TableCell>
              {pollutants.no.full_name} <div>({pollutants.no.display_name})</div> 
            </TableCell>
            <TableCell>
              {pollutants.no2.full_name}<div>({pollutants.no2.display_name})</div>
            </TableCell>
            <TableCell>
              {pollutants.pm10.full_name}<div>({pollutants.pm10.display_name})</div>
            </TableCell>
            <TableCell>
              {pollutants.pm25.full_name}<div>({pollutants.pm25.display_name})</div>
            </TableCell>
            <TableCell>{pollutants.so2.full_name}<div>{pollutants.so2.display_name}</div></TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              {pollutants.co.concentration.value}{"  "}{pollutants.co.concentration.units}
            </TableCell>
            <TableCell>
              {pollutants.no.concentration.value}{"  "}{pollutants.no.concentration.units} 
            </TableCell>
            <TableCell>
              {pollutants.no2.concentration.value}{"  "}{pollutants.no2.concentration.units}
            </TableCell>
            <TableCell>
              {pollutants.pm10.concentration.value}{"  "}{pollutants.pm10.concentration.units}
            </TableCell>
            <TableCell>
              {pollutants.pm25.concentration.value}{"  "}{pollutants.pm25.concentration.units}
            </TableCell>
            <TableCell>{pollutants.so2.concentration.value}{"  "}{pollutants.so2.concentration.units}</TableCell>
          </TableRow>
        </TableContainer>
       
      )} {
          err && <div>
          {err.title} 
          </div>
        }
    </div>
  );

};
export default AirContent;
