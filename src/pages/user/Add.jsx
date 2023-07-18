import { Select, Space, Button, Form, Input, Radio } from "antd";
import React, { useState } from "react";
import { add_client } from "../../services/addData";
import { useNavigate, useParams } from "react-router-dom";
import { LeftOutlined } from "@ant-design/icons";
import { useSelector } from "react-redux";

const Add = () => {
  const navigate = useNavigate();
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
  const [dep, setDep] = useState("1");

  const submit_add = async () => {
    const res = await add_client(token, {
      name_en: name_en,
      name_ar: name_ar,
      department_id: dep,
    });

    if (res === 200) {
      navigate("/user/table");
    } else {
      console.log("error");
    }
  };

  return (
    <div>
      <button className="back-button" onClick={() => navigate("/user/table")}>
        <LeftOutlined />
      </button>
      <Form
        {...formItemLayout}
        layout={formLayout}
        form={form}
        initialValues={{
          layout: formLayout,
        }}
        onValuesChange={onFormLayoutChange}
        style={{
          padding: "30px 10px",
        }}
      >
        <Form.Item style={{ width: "80vh" }} label="Name in English">
          <Input
            placeholder="english name"
            onChange={(e) => setName_en(e.target.value)}
          />
        </Form.Item>

        <Form.Item style={{ width: "80vh" }} label="Name in Arabic">
          <Input
            placeholder="arabic name"
            onChange={(e) => setName_ar(e.target.value)}
          />
        </Form.Item>
        <label
          style={{
            width: "80vh",
            marginBottom: "10px",
          }}
        >
          Department
        </label>
        <Select
          style={{
            width: "80vh",
            marginBottom: "50px",
          }}
          onChange={(value) => {
            setDep(value);
          }}
          options={[
            {
              value: "1",
              label: "1",
            },
            {
              value: "2",
              label: "2",
            },
            {
              value: "4",
              label: "4",
            },
          ]}
        />

        <Form.Item style={{ marginRight: "2vh" }}>
          <button className="small-button" onClick={submit_add}>
            Submit
          </button>
        </Form.Item>
      </Form>
    </div>
  );
};
export default Add;
