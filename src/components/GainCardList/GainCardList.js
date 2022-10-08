/*

  GainCardList.js

  Creates a flex list of gains.
  Passes a full Gain object to GainCard.

*/


import classes from './GainCardList.module.css';
import GainCard from '../GainCard/GainCard';

function GainCardList(props) {
  return (
    <ul className={classes.cardlist}>
      {props.gains.map((gainData) => {
        return <li className={classes.item} key={gainData.id}>
          <GainCard gainData={gainData} />
        </li>;
      })}
    </ul>
  );
}

export default GainCardList;
