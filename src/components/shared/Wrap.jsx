import React, { useState, useEffect, useRef } from 'react'
import Style from './css/Wrap.module.css'
import axios from 'axios';
import URL from 'src/services/URL'
import { APIloader } from './Loader'
import { getAuthorizationHeader } from 'src/services/auth';
export const Search = () => {
  const hasFetchedData = useRef(false)
  const [ data, setData ] = useState([]);
  const [ loading, setLoading ] = useState(false);
  const [ search, setSearch ] = useState('');

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await axios.get(`${URL}/timetables`, {
        headers: {
          Authorization: getAuthorizationHeader()
        }
      });
      setData(response.data);
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
        <input className={Style.input} name="class" placeholder="Search..." onChange={(e) => setSearch(e.target.value)} type="search"></input>
        <div className={Style.table}>
          {
            loading ?
              <APIloader />
              : data &&
              data.filter((data) => {
                return search === ' ' ? data : data.class.toLowerCase().includes(search);
              }).map((data, i) => {
                return (
                  <div key={i} className={Style.book} onClick={() => {
                    window.location = `/view/${data.class}`
                  }}>
                    <p>CLICK ME</p>
                    <div key={i} className={Style.cover}>
                      <p>{data.class}</p>
                    </div>
                  </div>
                )
              })
          }

        </div>
      </div>
    </>
  )
}

