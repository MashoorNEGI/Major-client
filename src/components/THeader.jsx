import React from "react";
import Style from 'src/Pages/css/Create.module.css'
export function TimetableHeader({
  handlePeriodsCountChange,
  periodsCount,
  Classes,
  setClasses
}) {
  return <div className={Style.container}>
                <div className={Style.inputcontainer}>
                    <div className={Style.inputwrapper}>
                        <label htmlFor="leftInput" className={Style.inputlabel}>No. of periods:</label>
                        <input type="text" id="leftInput" className={Style.inputfield} onChange={handlePeriodsCountChange} value={periodsCount} />
                    </div>
                    <div className={Style.inputwrapper}>
                        <label htmlFor="rightInput" className={Style.inputlabel}>Class Room:</label>
                        <input type="text" id="rightInput" className={Style.inputfield} value={Classes} onChange={e => setClasses(e.target.value)} />
                    </div>
                </div>
            </div>;
}
  