import React, { useState, useEffect, useRef } from 'react'
import Style from './css/Wrap.module.css'
import { APIloader } from 'src/components/shared/Loader'
import ApiRequest from 'src/API/apirequest';
export const Search = () => {
  const hasFetchedData = useRef(false)
  const [ data, setData ] = useState([]);
  const [ loading, setLoading ] = useState(false);
  const [ search, setSearch ] = useState('');

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await ApiRequest('timetables', 'GET', null, { authorization: true })
      setData(Object.values(response));
      console.log(Object.values(response))
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (!hasFetchedData.current) {
      fetchData();
      hasFetchedData.current = true;
    }
  }, [ hasFetchedData ]);

  return (
    <>
      <div className='div-center'>
        <input className={Style.input} name="class" placeholder="Search..." onChange={(e) => setSearch(e.target.value)} type="search" />
        <div className={Style.table}>
          {loading ? (
            <APIloader />
          ) : (
            data &&
            data
              .filter((data) => {
                const classMatch = data.class && data.class.toLowerCase().includes(search.toLowerCase());
                const teacherMatch = data.teacheremail && data.teacheremail.toLowerCase().includes(search.toLowerCase());
                return search.trim() === '' ? data : (classMatch || teacherMatch);
              })
              .map((data, i) => {
                const teacherName = data.teacheremail && data.teacheremail.split('@')[ 0 ]; // Extract the name from email
                return (
                  <div
                    key={i}
                    className={Style.book}
                    onClick={() => {
                      window.location = `/view/${data.class || teacherName}`;
                    }}
                  >
                    <p>CLICK ME</p>
                    <div key={i} className={Style.cover}>
                      <p>{data.class || teacherName}</p> {/* Display teacherName instead of data.teacheremail */}
                    </div>
                  </div>
                );
              })
          )}
        </div>
      </div>


    </>
  )
}

