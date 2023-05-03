import React from "react";
import Style from 'src/Pages/css/Create.module.css'
export function TimetableBody({
  days,
  handleTimetableChange,
  periodsCount,
  timetableData
}) {
  return <tbody>
    {days.map((day, rowIndex) => <tr key={rowIndex}>
      <td>{day}</td>
      {Array.from({
        length: periodsCount
      }, (_, i) => i).map(colIndex => <td key={colIndex}>
        <div className={Style.cell}>
          <input type="text" value={timetableData[ rowIndex ][ colIndex ].subject} onChange={event => handleTimetableChange(rowIndex, colIndex, "subject", event.target.value)} />
          <input type="time" value={timetableData[ rowIndex ][ colIndex ].start_time} onChange={event => handleTimetableChange(rowIndex, colIndex, "start_time", event.target.value)} />
          <input type="time" value={timetableData[ rowIndex ][ colIndex ].end_time} onChange={event => handleTimetableChange(rowIndex, colIndex, "end_time", event.target.value)} />
        </div>
      </td>)}
    </tr>)}
  </tbody>;
}
