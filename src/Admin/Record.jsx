import React, { useState, useEffect } from "react";
import { Table, Button } from "antd";
import ApiRequest from "src/API/apirequest";
import { v4 as uuidv } from 'uuid'

const Record = () => {
    const [ dataSource, setDataSource ] = useState([]);
    const [ pagination, setPagination ] = useState({ current: 1, pageSize: 4, total: 0 });

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const res = await ApiRequest("record", "GET", null, { authorization: false });
        if (res) {
            const data = Object.values(res);
            const newData = data.flatMap((item, index) => item.map(record => ({
                key: uuidv(),
                name: record.name,
                accountType: index === 1 ? "Teacher" : "Student",
                email: record.email,
                password: "xxxx",
                subject: record.subjects || '----',
                class: record.class || '----'
            })));
            setDataSource(newData);
            setPagination({ ...pagination, total: newData.length });
        }
    };

    const handleTableChange = pagination => {
        setPagination(pagination);
    };

    const handleDelete = record => {
        const newDataSource = dataSource.filter(item => item.key !== record.key);
        setDataSource(newDataSource);
        setPagination({ ...pagination, total: newDataSource.length });
    };

    const columns = [
        { title: "Name", dataIndex: "name", key: "name" },
        { title: "Account Type", dataIndex: "accountType", key: "accountType" },
        { title: "Email", dataIndex: "email", key: "email" },
        { title: "Password", dataIndex: "password", key: "password" },
        { title: "Subject", dataIndex: "subject", key: "subject" },
        { title: "Class", dataIndex: "class", key: "class" },
        {
            title: "Action", key: "action", render: (_, record) => (
                <Button type="primary" danger onClick={() => handleDelete(record)}>
                    Delete
                </Button>
            )
        }
    ];

    return (
        <div style={{ margin: "auto", width: "90%" }}>
            <h1 align="center" style={{ padding: "50px" }}>Admin Page</h1>
            <Table dataSource={dataSource} onChange={handleTableChange} pagination={pagination} columns={columns} />
        </div>
    );
};

export default Record;
