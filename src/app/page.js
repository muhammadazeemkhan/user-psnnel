"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";

import { Button, Checkbox, Form, Input } from "antd";

export default function Home() {
  const router = useRouter();

  const onFinish = (values) => {
    console.log("Success:", values);
    router.push("/Checkin");
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <main>
      <h1 className="text-center mt-16 text-4xl">Logo</h1>
      <Form
        name="basic"
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 16,
        }}
        style={{
          maxWidth: 600,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          marginLeft: "300px",
          marginTop: "50px",
        }}
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label="Username"
          name="username"
          rules={[
            {
              required: true,
              message: "Please input your username!",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[
            {
              required: true,
              message: "Please input your password!",
            },
          ]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item
          name="remember"
          valuePropName="checked"
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        ></Form.Item>

        <Button htmlType="submit" style={{ marginLeft: "80px" }}>
          Submit
        </Button>
      </Form>
    </main>
  );
}
