import { Table, Divider } from "antd";
import { LeftOutlined } from "@ant-design/icons";

import { useEffect, useRef, useState } from "react";
import { fetchAllData, fetchById } from "../../../services/fetchData";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";

const columns = [
  {
    title: "English Name",
    dataIndex: "English Name",
  },
  {
    title: "Arabic Name",
    dataIndex: "Arabic Name",
  },
  {
    title: "department id",
    dataIndex: "department id",
  },
  {
    title: "department name",
    dataIndex: "department name",
  },
];

function View() {
  const [data, setData] = useState([]);
  const { id } = useParams();
  const navigate = useNavigate();
  const token = useSelector((state) => state.token);

  useEffect(() => {
    const getData = async () => {
      let APIdata = await fetchById(token, id);
      let tableData = [
        {
          key: APIdata.id,
          "English Name": APIdata.name_en,
          "Arabic Name": APIdata.name_ar,
          "department id": APIdata.department_id,
          "department name": APIdata.department_name,
        },
      ];

      setData(tableData);
    };

    getData();
  }, []);
  return (
    <>
      <button className="back-button" onClick={() => navigate("/user/table")}>
        <LeftOutlined />
      </button>
      <Divider style={{ marginTop: "0px" }}>More details</Divider>
      <Table columns={columns} dataSource={data} size="middle" />
    </>
  );
}

export default View;
