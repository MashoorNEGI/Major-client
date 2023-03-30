import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Time from '../components/shared/Table/Table';
import URL from '../services/URL'
import { getLocalStorageItem, setLocalStorageItem } from '../components/shared/utlis/Localstorage';
function Timetable() {
  const [ timetableData, setTimetableData ] = useState(null);
  const { name } = useParams()
  const field = name.length >5 ? 'users' : 'student'
  const getdata = () => {
    const { auth } = getLocalStorageItem('Data')
    if (name === getLocalStorageItem('Data').class || name === auth.slice(20, 30)) {
      axios.get(`${URL}/${field}/timetable`, {
        headers: {
          Authorization: `bearer ${getLocalStorageItem('Data').auth}`
        }
      })
        .then(response => {
          setTimetableData(response.data);
        })
        .catch(error => {
          console.log(error);
        })
    }
  }
  useEffect(() => {
    getdata()
  }, []);
  return (
    (
      timetableData
        ? <div>
          <h1 className='text-center'>{name} Timetable</h1>
          <Time timetable={timetableData} />
        </div>
        : <h1 className='text-center'>Data Not Found</h1>
    )
  );
}

export default Timetable;