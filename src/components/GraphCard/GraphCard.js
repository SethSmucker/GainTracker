/*

  Displays total Gain completion for the last week

  [PROPS]
    props.gains - all of the gains to be calculated

*/
import { ResponsiveContainer, AreaChart, XAxis, YAxis, Area, Tooltip, /*CartesianGrid,*/ } from "recharts";


function GraphCard(props) { //takes pre-processed data

  //Generate X labels depending on the day
  //Put gains in from last week


  //Make list with key/value pairs
    //keys are the 7 prev days
    //values are the number of times its found
    
    //initialize all keys' values to 0

    //loop through all gains
      //if gain was checked in last 7 days
      //(if(curDate.getTime >= today.getTime()-7){
      //    dateTallies[curDate]++ 
      //})
        //inc that key/value

    //https://stackoverflow.com/questions/492994/compare-two-dates-with-javascript

  return (
    <ResponsiveContainer width="100%" height={600}>

      <AreaChart data={props.gainData}>
        <Area dataKey="value" />
        <XAxis dataKey="date" />
        <YAxis datakey="value" />
        <Tooltip />

      </AreaChart>

    </ResponsiveContainer>
  );
}

export default GraphCard;
