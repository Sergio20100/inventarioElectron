import { Button, Form, Input, Select, Typography, Upload, message } from "antd";
import type { UploadProps } from "antd";

import React from "react";

const { Option } = Select;

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};

const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

const FormProductos: React.FC = () => {
  const [form] = Form.useForm();

  const onFinish = (values: any) => {
    console.log(values);
  };

  const onReset = () => {
    form.resetFields();
  };

  const date = new Date();
  console.log(date.toISOString().split("T")[0]);

  const props: UploadProps = {
    fileList: [],
    name: "file",
    action: "https://www.mocky.io/v2/5cc8019d300000980a055e76",
    headers: {
      authorization: "authorization-text",
    },
    onChange(info) {
      if (info.file.status !== "uploading") {
        console.log(info.file, info.fileList);
      }
      if (info.file.status === "done") {
        message.success(`${info.file.name} file uploaded successfully`);
      } else if (info.file.status === "error") {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
  };

  return (
    <Form
      {...layout}
      form={form}
      name="control-hooks"
      onFinish={onFinish}
      style={{ maxWidth: 600 }}>
      <Form.Item
        name="product_name"
        label="Nombre del Producto"
        rules={[{ required: true }]}>
        <Input />
      </Form.Item>
      <Form.Item name="marca" label="Marca" rules={[{ required: true }]}>
        <Select
          placeholder="Seleccione una de las siguientes..."
          //   onChange={onGenderChange}
          allowClear>
          <Option value="male">male</Option>
          <Option value="female">female</Option>
          <Option value="other">other</Option>
          {/* esto sera un array con las marcas  */}
        </Select>
      </Form.Item>
      <Form.Item
        name="manufacturer"
        label="Fabricante"
        rules={[{ required: true }]}>
        <Input />
      </Form.Item>
      <Form.Item name="UPC" label="SKU o UPC" rules={[{ required: false }]}>
        <Input />
      </Form.Item>
      <Form.Item
        name="batchNumber"
        label="Numero de Lote"
        rules={[{ required: false }]}>
        <Input type="number" />
      </Form.Item>
      <Form.Item
        name="vencimiento"
        label="fecha de vencimiento"
        rules={[{ required: true }]}>
        <Input type="date" min={date.toISOString().split("T")[0]} />
      </Form.Item>
      <Form.Item name="quantity" label="Cantidad" rules={[{ required: true }]}>
        <Input type="number" min={0} />
      </Form.Item>
      <Form.Item
        name="unit_cost"
        label="Costo unitario"
        rules={[{ required: true }]}>
        <Input type="number" min={0} />
      </Form.Item>
      <Form.Item
        name="unit_value"
        label="Valor unitario"
        rules={[{ required: true }]}>
        <Input type="number" min={0} />
      </Form.Item>
      <Form.Item name="category" label="Categoria" rules={[{ required: true }]}>
        <Select
          showSearch
          style={{ width: 200 }}
          placeholder="Search to Select"
          optionFilterProp="children"
          filterOption={(input, option) =>
            (option?.label ?? "").includes(input)
          }
          filterSort={(optionA, optionB) =>
            (optionA?.label ?? "")
              .toLowerCase()
              .localeCompare((optionB?.label ?? "").toLowerCase())
          }
          options={[
            {
              value: "1",
              label: "Not Identified",
            },
          ]}
        />
      </Form.Item>
      <Form.Item
        name="location"
        label="Ubicacion en estante"
        rules={[{ required: true }]}>
        <Select
          showSearch
          style={{ width: 200 }}
          placeholder="Search to Select"
          optionFilterProp="children"
          filterOption={(input, option) =>
            (option?.label ?? "").includes(input)
          }
          filterSort={(optionA, optionB) =>
            (optionA?.label ?? "")
              .toLowerCase()
              .localeCompare((optionB?.label ?? "").toLowerCase())
          }
          options={[
            {
              value: "1",
              label: "Not Identified",
            },
          ]}
        />
      </Form.Item>
      <Form.Item
        name="reorder_point"
        label="Alerta minimo unidad"
        rules={[{ required: false }]}>
        <Input type="number" min={0} />
      </Form.Item>
      <Form.Item name="unit" label="Unidad de medida">
        <Select
          showSearch
          style={{ width: 200 }}
          placeholder="Search to Select"
          optionFilterProp="children"
          filterOption={(input, option) =>
            (option?.label ?? "").includes(input)
          }
          filterSort={(optionA, optionB) =>
            (optionA?.label ?? "")
              .toLowerCase()
              .localeCompare((optionB?.label ?? "").toLowerCase())
          }
          options={[
            {
              value: "1",
              label: "Not Identified",
            },
          ]}
        />
      </Form.Item>
      <Form.Item name="product_description" label="Descripcion de producto">
        <Input.TextArea />
      </Form.Item>
      <Form.Item name="image" label="Imagen">
        <Upload {...props}>
          <Button>Click para seleccionar imagen</Button>
        </Upload>
      </Form.Item>
      <Form.Item name="barcode" label="Codigo de barra">
        <Input />
      </Form.Item>
      <Form.Item {...tailLayout}>
        <Button type="primary" htmlType="submit">
          Registrar
        </Button>
        <Button htmlType="button" onClick={onReset}>
          Reset
        </Button>
        {/* <Button type="link" htmlType="button" onClick={onFill}>
          Fill form
        </Button> */}
      </Form.Item>
    </Form>
  );
};

export default FormProductos;
