import { NavLink } from 'react-router-dom';
import classes from './Navigation.module.css';

function Navigation() {
  return (
    <header className={classes.header}>
      <h1>¡Conjugado!</h1>
      <nav>
        <ul className={classes.list}>
          <li>Reference</li>
          <li>Practise</li>
        </ul>
      </nav>
    </header>
  );
}

export default Navigation;
