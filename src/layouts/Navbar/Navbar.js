import { Link } from 'react-router-dom';

import classes from './Navbar.module.css';

function Navbar() {

  return (
    <div className={classes.container}>
      <h1 className={classes.title}>GAIN TRACKER</h1>
      <ul className={classes.navbar}>
        <Link to='/Home' className={classes.link}>
          Home Page
        </Link>
        <Link to='/AllGains' className={classes.link}>
          All Gains
        </Link>
        <Link to='/Settings' className={classes.link}>
          Settings
        </Link>
        <Link to='/DevTools' className={classes.link}>
          Dev Tools
        </Link>
      </ul>
    </div>
  );
}

export default Navbar;
