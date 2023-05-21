import React from 'react';
import { Table, Button} from 'antd';
import Style from 'src/components/css/Table.module.css';

const Time = ({ timetable,onclick }) => {
    const now = new Date();
    const currentTime = now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });
    const currentDay = now.toLocaleDateString('en-US', { weekday: 'long' });

    const getSlot = (day, slotIndex) => {
        const slot = day.periods[ slotIndex ];
        if (!slot) {
            return null;
        }
        const isActive = currentTime > slot.start_time && currentTime <= slot.end_time && currentDay === day.day;

        if (slot.subject === 'Break') {
            return <div className={Style.break}>{slot.subject}</div>;
        }

        return (
            <div className={`${Style.periodWrapper} ${isActive ? Style.active : ''}`}>
                <div className={Style.class}>{slot.class}</div>
                <div className={Style.subject}>{slot.subject}</div>
            </div>
        );
    };

    const daysWithGaps = timetable.days.map((day) => {
        const newPeriods = [];
        for (let i = 0; i < day.periods.length; i++) {
            const currentSlot = day.periods[ i ];
            const nextSlot = day.periods[ i + 1 ];
            if (currentSlot) {
                newPeriods.push(currentSlot);
                if (nextSlot && nextSlot.start_time !== currentSlot.end_time) {
                    newPeriods.push({
                        start_time: currentSlot.end_time, end_time: nextSlot.start_time, subject: 'Break',
                    });
                }
            }
        }
        return { ...day, periods: newPeriods };
    });

    const periodTimes = [ ...new Set(daysWithGaps.flatMap((day) => day.periods.map((period) => period.start_time))) ].sort();

    const columns = [
        {
            title: 'Time', dataIndex: 'time', key: 'time', className: Style.period, align: 'center', width: 90,
        }, ...daysWithGaps.map((day) => ({
            title: day.day, dataIndex: day.day, key: day.day, className: Style.day, align: 'center', width: 90, render: (text, record) => getSlot(day, record.periodIndex),
        })),
    ];

    const data = periodTimes.map((time, i) => ({
        key: time, time: time, periodIndex: i, ...daysWithGaps.reduce((acc, day) => ({ ...acc, [ day.day ]: '' }), {}),
    }));

    return (
        <div className={Style.timetable}>
            <Table
                columns={columns}
                dataSource={data}
                pagination={false}
                scroll={{ x: true }}
                bordered
                size="small"
            />
            <br/>
            <Button type='primary' className='btn-print' onClick={onclick} style={{float:'right'}}>Print</Button>
        </div>
    );
};

export default Time;
