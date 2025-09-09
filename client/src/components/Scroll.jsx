import classes from './Scroll.module.css';

function Scroll({ children }) {
  return <div className={classes.scroll}>{children}</div>;
}

export default Scroll;
