import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Time from 'src/components/shared/Table';
import URL from 'src/services/URL'
import { getLocalStorageItem } from 'src/utils/Localstorage';
import { getAuthorizationHeader } from 'src/services/auth'
import { APIloader } from 'src/components/shared/Loader';
function Timetable() {
  const [ loading, setLoading ] = useState(false);
  const [ timetableData, setTimetableData ] = useState(null);
  const { name } = useParams()
  const [ printMode, setPrintMode ] = useState(false);
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
          setLoading(false);
          console.error(error);
        }
      }
    };

    fetchData();

    return () => {
      isMounted = false;
    };
  }, [ name, field ]);


  const handlePrint = () => {
    setPrintMode(true);
    window.print();
    setPrintMode(false);
  };
  return (
    loading ?
      <APIloader /> :
      timetableData
        ? <div className={`div-center ${printMode ? 'print-mode' : ''}`}>
          <h1 className='text-center'>{name}Timetable</h1>
          <Time timetable={timetableData} />
          <button className="btn btn-print" onClick={handlePrint}>
            Print
          </button>
        </div>
        : <h1 className='text-center'>Data Not Found</h1>
  );
}

export default Timetable;
