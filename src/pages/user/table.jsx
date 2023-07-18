import React, { useEffect, useState } from "react";
import { Space, Table } from "antd";
import { fetchAllData } from "../../services/fetchData";
import { deleteById } from "../../services/deleteData";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Clients = () => {
  const [data, setData] = useState([]);
  const navigate = useNavigate();
  const token = useSelector((state) => state.token);
  const [change, setChange] = useState(true);
  const columns = [
    {
      title: "English Name",
      dataIndex: "English Name",
      key: "English Name",
    },
    {
      title: "Arabic Name",
      dataIndex: "Arabic Name",
      key: "Arabic Name",
    },

    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <Space size="middle">
          <Link onClick={() => navigate(`/user/view/${record.key}`)}>View</Link>
          <Link onClick={() => navigate(`/user/edit/${record.key}`)}>Edit</Link>
          <Link
            onClick={async () => {
              await deleteById(token, record.key);
              setChange(!change);
            }}
          >
            Delete
          </Link>
        </Space>
      ),
    },
  ];

  useEffect(() => {
    const getData = async () => {
      let APIdata = await fetchAllData(token);
      APIdata = APIdata.map((item) => {
        return {
          key: item.id,
          "English Name": item.name_en,
          "Arabic Name": item.name_ar,
        };
      });

      setData(APIdata);
    };

    getData();
  }, [change]);

  return (
    <>
      <div className="header">
        <button className="small-button" onClick={() => navigate("/user/add")}>
          add
        </button>
      </div>
      <Table columns={columns} dataSource={data} />
    </>
  );
};
export default Clients;
