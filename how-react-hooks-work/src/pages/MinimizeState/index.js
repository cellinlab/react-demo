import { useCallback, useEffect, useMemo, useState } from "react"
import { useSearchParam } from 'react-use';

const FilterList = ({ data }) => {
  const searchKeyParam = useSearchParam('key') || '';
  const [searchKey, setSearchKey] = useState(searchKeyParam);
  console.log('searchKey', searchKey);

  const filteredData = useMemo(() => {
    return data.filter((item) => item.name.toLocaleLowerCase().includes(searchKey.toLocaleLowerCase()));
  }, [data, searchKey]);

  const handleSearch = useCallback((e) => {
    console.log('handleSearch', e.target.value);
    setSearchKey(e.target.value);
    window.history.pushState(
      {},
      '',
      `${window.location.pathname}?key=${e.target.value}`
    );
  }, []);

  return (
    <div>
      <input
        value={searchKey}
        onChange={handleSearch}
        placeholder="Search..."
      />
      <p>{searchKey}</p>
      <ul>
        {filteredData.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
};

const Demo = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then(users => setData(users));
  }, []);

  return (
    <div>
      <h1>Minimize State</h1>
      <FilterList data={data} />
    </div>
  );
};

export default Demo;

