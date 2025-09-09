import { NavLink } from 'react-router-dom';
import classes from './Navigation.module.css';

function Navigation() {
  return (
    <header className={classes.header}>
      <div className={classes.inner}>
        <h1 className="logo">¡Conjugado!</h1>
        <nav>
          <ul className={classes.list}>
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive ? classes.active : undefined
                }
                to="reference"
              >
                Reference
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive ? classes.active : undefined
                }
                to="practise"
              >
                Practise
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Navigation;
