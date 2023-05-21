import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Time from 'src/components/Table/Table';
import { APIloader } from 'src/components/shared/Loader';
import ApiRequest from 'src/API/apirequest';

function Timetable() {
  const { name } = useParams();
  const [ timetableData, setTimetableData ] = useState(null);
  const [ printMode, setPrintMode ] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const endpoint = name.length > 4 ? `users/timetable/${name}` : `student/timetable/${name}`;
        const response = await ApiRequest(endpoint, 'GET', null, { authorization: true });
        setTimetableData(response);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [ name ]);

  const handlePrint = () => {
    setPrintMode(true);
    window.print();
    setPrintMode(false);
  };

  return (
    <div className={`div-center ${printMode ? 'print-mode' : ''}`}>
      {timetableData ?<> <h1 className='text-center'>{name} Timetable</h1>
       <Time onclick={handlePrint} timetable={timetableData} /></> : <APIloader />}
    </div>
  );
}

export default Timetable;
