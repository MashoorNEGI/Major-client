import React, { useState, useEffect } from "react";
import { Table, Button } from "antd";

import ApiRequest from "src/API/apirequest";
import { v4 as uuidv } from 'uuid'

const TeacherRecord = () => {
    const [ dataSource, setDataSource ] = useState([]);
    const [ pagination, setPagination ] = useState({ current: 1, pageSize: 4, total: 0 });

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const res = await ApiRequest("Tablerecord", "GET", null, { authorization: false });
        if (res) {
            const data = Object.values(res);
            const newData = data.flatMap((item, index) => item.map(record => ({
                key: uuidv(),
                timetable: index === 1 ? "Teacher" : "Class",
                name: record.class || record.teacheremail,
            })));
            setDataSource(newData);
            setPagination({ ...pagination, total: newData.length });
        }
    };

    const handleTableChange = pagination => {
        setPagination(pagination);
    };
    const handleDelete = record => {
        const regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(record.name)
        const data = { type: `${regex ? 'Teacher' : 'class'}`, name: record.name }
        const newDataSource = dataSource.filter(item =>
            item.key !== record.key);
        ApiRequest('deleteTable', 'POST', data, { authorization: false })
        setDataSource(newDataSource);
        setPagination({ ...pagination, total: newDataSource.length });
    };

    const columns = [
        { title: "Timetable", dataIndex: "timetable", key: "timetable", align: 'center' },
        { title: "Name", dataIndex: "name", key: "name", align: 'center' },
        {
            title: "Action", key: "action", align: 'center', render: (_, record) => (
                <Button type="primary" danger onClick={() => handleDelete(record)}>
                    Delete
                </Button>
            )
        }
    ];

    return (
        <div style={{ margin: "auto", width: "90%" }}>
            <h1 align="center" style={{ padding: "50px" }}>Admin Page</h1>
            <Table dataSource={dataSource} onChange={handleTableChange}
                scroll={{ x: true }}
                pagination={pagination} columns={columns} />
        </div>
    );
};

export default TeacherRecord;
