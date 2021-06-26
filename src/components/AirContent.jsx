import React from "react";
import { TableContainer, Paper, TableCell, TableRow } from "@material-ui/core";

const AirContent = ({ latitude, longitude }) => {
  const [pollutants, SetPollut] = React.useState();
  const [input, SetInput] = React.useState();
  const key = "ce9769b505314d7ba636addc9370870f";
  const url = `https://api.breezometer.com/air-quality/v2/current-conditions?lat=${latitude}&lon=${longitude}&key=${key}&features=breezometer_aqi,local_aqi,health_recommendations,sources_and_effects,pollutants_concentrations,pollutants_aqi_information`;
  const GetData = async () => {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data.data);
    if (data.data !== null) SetPollut(data.data.pollutants);
  };
  React.useEffect(() => {
    GetData();
  }, [input]);

  return (
    <div>
      <input
        type="text"
        value={input}
        onChange={(e) => {
          SetInput(e.target.value);
        }}
      />
      {pollutants}
       <TableContainer component={Paper}> 
          <TableRow>
              <TableCell>
                  meow test
              </TableCell>
              <TableCell>
                  nyan test
              </TableCell>
              </TableRow>
              <TableRow>
              <TableCell>
                  meow test
              </TableCell>
              <TableCell>
                  nyan test
              </TableCell>
          </TableRow>
      </TableContainer>
    </div>
  );
};
export default AirContent;