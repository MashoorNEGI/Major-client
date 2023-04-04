import React, { useState, useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Time from 'src/components/shared/Table';
import URL from 'src/services/URL'
import { getLocalStorageItem } from 'src/utils/Localstorage';
import { getAuthorizationHeader } from 'src/utils/auth'
import { APIloader } from 'src/components/shared/Loader';
function Timetable() {
  const Run = useRef(false)
  const [ loading, setLoading ] = useState(false);
  const [ timetableData, setTimetableData ] = useState(null);
  const { name } = useParams()
  const field = name.length > 5 ? 'users' : 'student'
  useEffect(() => {
    let isMounted = true;

    const fetchData = async () => {
      const { auth } = getLocalStorageItem('Data');
      if (name || name === auth.slice(20, 30)) {
        try {
          setLoading(true);
          const response = await axios.get(`${URL}/${field}/timetable/${name}`, {
            headers: {
              Authorization: getAuthorizationHeader(),
              'Content-Type': 'application/json',
              'If-None-Match': 'ETag-value-from-previous-request'
            },
            maxRedirects: 1
          });
          if (isMounted) {
            setTimetableData(response.data);
            setLoading(false);
            console.log(response.data);
          }
        } catch (error) {
          console.error(error);
        }
      }
    };

    fetchData();

    return () => {
      isMounted = false;
    };
  }, [ name, field ]);
  return (
    loading ?
      <APIloader /> :
      timetableData
        ? <div>
          <h1 className='text-center'>{name} Timetable</h1>
          <Time timetable={timetableData} />
        </div>
        : <h1 className='text-center'>Data Not Found</h1>
  );
}

export default Timetable;
