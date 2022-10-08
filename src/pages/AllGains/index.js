
import useAllGains from './useAllGains';

import GainCardList from '../../components/GainCardList/GainCardList';
import GainSorter from '../../components/GainSorter/GainSorter';
import classes from './AllGains.module.css';

function AllGains() {

  const [sortedGains, setSortedGains] = useAllGains();

  return (
    <div className={classes.container}>
      <GainSorter
        parentArray={sortedGains}
        setParentArray={(a) => setSortedGains(a)}
      />
      <GainCardList gains={sortedGains} />
    </div>
  );
}

export default AllGains;
