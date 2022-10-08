/*

  Displays a single Gain in card format.

  [PROPS]
    props.gainData - the entire Gain object to be displayed

*/

import { useContext } from 'react';
import LocalGainsContext from '../../context/local-gains-context';

import classes from './GainCard.module.css';
import useConfetti from "../../hooks/useConfetti.js";

function GainCard(props) {

  const LocalGainsCtx = useContext(LocalGainsContext);
  const [fireConfetti, confettiComponent] = useConfetti();

  return (
    <div className={props.gainData.doneToday ? classes.cardDone : classes.card}>
      {confettiComponent}
      <div className={classes.counter}>{props.gainData.counter}</div>
      <div
        className={props.gainData.doneToday ? classes.titleDone : classes.title}
        onClick={() => {
          if(LocalGainsCtx.incrementGain(props.gainData)){
            fireConfetti();
          }
        }}
      >
        {props.gainData.title}
      </div>
    </div>
  );
}

export default GainCard;
