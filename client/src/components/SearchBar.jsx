import { Input } from 'antd';
import classes from './SearchBar.module.css';

const { Search } = Input;

function SearchBar() {
  return (
    <Search
      className={classes.searchBar}
      placeholder="input search text"
      enterButton="Buscar!"
      size="large"
    />
  );
}

export default SearchBar;
