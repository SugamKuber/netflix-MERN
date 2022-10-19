///heheeee
import { useEffect, useState } from 'react';
import axios from 'axios';
import Table from '../Table/Table';
import Sort from '../Sort/Sort';
import Genre from '../Genre/Genre';
import Pagination from '../Pagination/Pagination';
import Search from '../Search/Search';
import './Home.css';

const base_url = process.env.REACT_APP_API_URL;

function Home() {
  const [obj, setObj] = useState({});
  const [sort, setSort] = useState({ sort: 'rating', order: 'desc' });
  const [filterGenre, setFilterGenre] = useState([]);
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState('');

  useEffect(() => {
    const getAllVideos = async () => {
      try {
        const url = `${base_url}?page=${page}&sort=${sort.sort},${
          sort.order
        }&genre=${filterGenre.toString()}&search=${search}`;
        const { data } = await axios.get(url);
        setObj(data);
      } catch (err) {
        console.log(err);
      }
    };

    getAllVideos();
  }, [sort, filterGenre, page, search]);

  return (
    <div className='wrapper'>
      <div className='container'>
        <div className='head'>
          <img
            src='./images/logo.png'
            alt='logo'
            className='logo'
          />
          <Search setSearch={(search) => setSearch(search)} />
        </div>
        <div className='body'>
          <div className='table_container'>
            <Table movies={obj.movies ? obj.movies : []} />
            <Pagination
              page={page}
              limit={obj.limit ? obj.limit : 0}
              total={obj.total ? obj.total : 0}
              setPage={(page) => setPage(page)}
            />
          </div>
          <div className='filter_container'>
            <Sort
              sort={sort}
              setSort={(sort) => setSort(sort)}
            />
            <Genre
              filterGenre={filterGenre}
              genres={obj.genres ? obj.genres : []}
              setFilterGenre={(genre) => setFilterGenre(genre)}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
