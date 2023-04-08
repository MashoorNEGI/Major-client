import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Time from 'src/components/shared/Table';
import { getLocalStorageItem } from 'src/utils/Localstorage';
import { APIloader } from 'src/components/shared/Loader';
import ApiRequest from 'src/API/apirequest';
function Timetable() {
  const [ loading, setLoading ] = useState(false);
  const [ timetableData, setTimetableData ] = useState(null);
  const { name } = useParams()
  const [ printMode, setPrintMode ] = useState(false);
  // const field = name.length > 5 ? 'users' : 'student'
  useEffect(() => {
    let isMounted = true;
    const fetchData = async () => {
      const { auth } = getLocalStorageItem('Data');
      // const data = name === auth.split(".")[ 2 ].slice(0, 6) ? auth : name

      try {
        setLoading(true);
        const response = await (name.length > 5 ? ApiRequest('users/timetable', 'GET', null, { authorization: true }) : ApiRequest(`student/timetable/${name}`, 'GET', null, { authorization: true }))
        if (isMounted) {
          setTimetableData(response);
          setLoading(false);
          console.log(response);
        }
      } catch (error) {
        setLoading(false);
        console.error(error);
      }
    }

    fetchData();

    return () => {
      isMounted = false;
    };
  }, [ name ]);


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
          <h1 className='text-center'>{name} Timetable</h1>
          <Time timetable={timetableData} />
          <button className="btn btn-print" onClick={handlePrint}>
            Print
          </button>
        </div>
        : <h1 className='text-center'>Data Not Found</h1>
  );
}

export default Timetable;
