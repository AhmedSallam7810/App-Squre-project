import { Select, Space, Button, Form, Input, Radio } from "antd";
import React, { useEffect, useState } from "react";
import { redirect, useNavigate, useParams } from "react-router-dom";
import { LeftOutlined } from "@ant-design/icons";
import { fetchById } from "../../../services/fetchData";
import { edit_client } from "../../../services/editData";
import { useSelector } from "react-redux";

const Add = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const token = useSelector((state) => state.token);

  const [form] = Form.useForm();
  const [formLayout, setFormLayout] = useState("vertical");
  const onFormLayoutChange = ({ layout }) => {
    setFormLayout(layout);
  };
  const formItemLayout = null;

  const buttonItemLayout = null;

  const [name_en, setName_en] = useState("");
  const [name_ar, setName_ar] = useState("");

  const submit_edit = async () => {
    const res = await edit_client(token, id, {
      name_en: name_en,
      name_ar: name_ar,
    });

    if (res === true) {
      navigate("/user/table");
    } else {
      console.log("error");
    }
  };

  useEffect(() => {
    const getData = async () => {
      let APIdata = await fetchById(token, id);
      setName_en(APIdata.name_en);
      setName_ar(APIdata.name_ar);
    };

    getData();
  }, []);

  return (
    <div>
      <Form
        {...formItemLayout}
        layout={formLayout}
        form={form}
        initialValues={{
          layout: formLayout,
        }}
        onValuesChange={onFormLayoutChange}
        style={{
          padding: "80px 10px",
        }}
      >
        <Form.Item
          style={{ width: "80vh", marginTop: "3vh" }}
          label="Name in English"
        >
          <Input
            placeholder="english name"
            onChange={(e) => setName_en(e.target.value)}
            value={name_en}
          />
        </Form.Item>

        <Form.Item
          style={{ width: "80vh", marginTop: "3vh" }}
          label="Name in Arabic"
        >
          <Input
            placeholder="arabic name"
            onChange={(e) => setName_ar(e.target.value)}
            value={name_ar}
          />
        </Form.Item>

        <Form.Item
          style={{
            width: "80vh",
            marginTop: "5vh",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <button
            className="small-button"
            style={{ width: "15vh", marginRight: "25vh" }}
            onClick={submit_edit}
          >
            Submit
          </button>

          <button
            className="small-button"
            style={{ width: "15vh", marginleft: "25vh" }}
            onClick={() => navigate("/user/table")}
          >
            Cancel
          </button>
        </Form.Item>

        <Form.Item></Form.Item>
      </Form>
    </div>
  );
};
export default Add;
