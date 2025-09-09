import { NavLink } from 'react-router-dom';
import classes from './Navigation.module.css';

function Navigation() {
  return (
    <header className={classes.header}>
      <div className={classes.inner}>
        <h1 className="logo">¡Conjugado!</h1>
        <nav>
          <ul className={classes.list}>
            <li>Reference</li>
            <li>Practise</li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Navigation;
