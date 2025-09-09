import { useLoaderData } from 'react-router-dom';
import SearchBar from '../components/SearchBar';
import CardList from '../components/CardList';
import Scroll from '../components/Scroll';

function Reference() {
  const data = useLoaderData();

  console.log(data.rows);
  const verbs = data.rows;
  return (
    <>
      <SearchBar />
      <Scroll>
        <CardList verbs={verbs} />
      </Scroll>
    </>
  );
}

export default Reference;

export async function loader() {
  const response = await fetch('http://localhost:4000/');

  if (!response.ok) {
    throw new Response(JSON.stringify({ message: 'Could not fetch verbs.' }));
  } else {
    console.log(response);
    return response;
  }
}
