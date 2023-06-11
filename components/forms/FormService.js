import React, { useEffect, useState } from 'react'
import { Form, Input, Button, Upload, message, InputNumber } from 'antd'
import { UploadOutlined } from '@ant-design/icons'
import axios from 'axios'
import { useRouter } from 'next/router'

const { TextArea } = Input

const FormService = ({ data }) => {
  const [form] = Form.useForm()
  const [loading, setLoading] = useState(false)
  const router = useRouter()

  const onFinish = async (values) => {
    console.log('values:', values)
    try {
      setLoading(true);
      const formData = new FormData();

      formData.append('id', data.data.id);
      formData.append('h2', values.h2 || '');
      formData.append('description', values.description || '');
      formData.append('subscription', values.subscription || '');
      formData.append('list', values.list || '');
      formData.append('info', values.info || '');
      formData.append('info2', values.info2 || '');
      formData.append('badge', values.badge || '');
      formData.append('price', values.price || 0);
      formData.append('discount', values.discount || 0);

      if (values.img) {
        formData.append('img', values.img[0].originFileObj);
      }
      formData.append('alt', values.alt || '');

      const response = await axios.post('/api/service-update', formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      if (response.data) {
        message.success(response.data.message);
        form.resetFields()
        router.push('/')
        handleCancel()
      }
    } catch (error) {
      console.error('Error saving data:', error);
      message.error('Failed to save data.');
    } finally {
      setLoading(false);
    }
  }
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  }


  return (
    <Form
      form={form}
      name='data'
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
      labelCol={{
        span: 24,
      }}
      initialValues={
        {
          h2: data?.data.h2,
          alt: data?.data.alt,
          description: data?.data.description,
          subscription: data?.data.subscription,
          list: data?.data.list,
          info: data?.data.info,
          info2: data?.data.info2,
          badge: data?.data.badge,
          price: data?.data.price,
          discount: data?.data.discount,
        }
      }
    >
      <Form.Item
        name="img"
        label="Изменить изображение"
        valuePropName="fileList"
        getValueFromEvent={(e) => e.fileList}
      // rules={[{ required: true, message: 'Please upload an image' }]}
      >
        <Upload
          name="img"
          accept="image/*"
          maxCount={1}
          beforeUpload={() => false}
        >
          <Button icon={<UploadOutlined />}>Загрузить</Button>
        </Upload>
      </Form.Item>

      <Form.Item
        name="alt"
        label="Описание к картинке"
      >
        <Input />
      </Form.Item>

      <Form.Item
        name="h2"
        label="Заголовок"
      >
        <TextArea
          autoSize allowClear showCount
        />
      </Form.Item>

      <Form.Item
        name="description"
        label="Заголовок"
      >
        <TextArea
          autoSize allowClear showCount
        />
      </Form.Item>

      <Form.Item
        name="subscription"
        label="Заголовок"
      >
        <TextArea
          autoSize allowClear showCount
        />
      </Form.Item>

      <Form.Item
        name="list"
        label="Список"
        tooltip='Перенос на следующую строку "/"'
      >
        <TextArea
          autoSize allowClear showCount
        />
      </Form.Item>


      <Form.Item
        name="info"
        label="Заголовок"
      >
        <TextArea
          autoSize allowClear showCount
        />
      </Form.Item>
      <Form.Item
        name="info2"
        label="Заголовок"
      >
        <Input />
      </Form.Item>

      <Form.Item
        name="badge"
        label="Реклама"
      >
        <TextArea
          autoSize allowClear showCount
        />
      </Form.Item>

      <Form.Item
        name="price"
        label="Цена"
      >
        <InputNumber />
      </Form.Item>


      <Form.Item
        name="discount"
        label="Скидка"
      >
        <InputNumber />
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit" loading={loading}>
          Сохранить
        </Button>
      </Form.Item>
    </Form>
  )

}

export default FormService
