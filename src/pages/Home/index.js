import GainCardList from '../../components/GainCardList/GainCardList';

import GraphCard from '../../components/GraphCard/GraphCard';
import classes from './Home.module.css';
import useHome from './useHome';

function Home() {
  const [gainsOfTheDay, weeklyData] = useHome();

  return (
    <div className={classes.container}>
      <div className={classes.gridLayout}>
        <div className={classes.gainContainer}>
          <p className={classes.gotdTitle}>Gains of the Day</p>
          <GainCardList gains={gainsOfTheDay} />
        </div>
        <div className={classes.graphContainer}>
          <GraphCard gainData={weeklyData} />
        </div>
      </div>
    </div>
  );
}

export default Home;
