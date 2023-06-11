import { Form, Button, Popconfirm, message, InputNumber, Divider } from 'antd'
import axios from 'axios'
import { useState } from 'react'


export const FormDeleteService = ({ handleCancel }) => {
	const [form] = Form.useForm()


	const onFinish = async (values) => {
		console.log('values:', values)
		await axios.delete('/api/service-delete',
			{
				params: {
					id: values.id
				}
			}
		)
			.then(response => {
				console.log('response::: ', response);
				message.success('Удаление')
				form.resetFields()
				handleCancel()
			})
			.catch(error => {
				console.log('error::: ', error);
			});
	}
	const onFinishFailed = (errorInfo) => {
		console.log('Failed:', errorInfo);
	}

	const fuSubmit = () => {
		form.submit()
	}

	return (
		<>
			<Form
				name="deleteOne"
				labelCol={{
					span: 24,
				}}
				wrapperCol={{
					span: 24,
				}}
				onFinish={onFinish}
				onFinishFailed={onFinishFailed}
				autoComplete="off"
				form={form}
			>
				<Form.Item
					label="Введите номер карточки"
					name="id"
					form={form}
					rules={[
						{
							required: true,
							message: 'Пожалуйста введите номер!',
						},
					]}
				>
					<InputNumber />
				</Form.Item>

				<Form.Item
					wrapperCol={{
						offset: 8,
						span: 16,
					}}
				>
					<Popconfirm
						title="Вы точно хотите удалить товар?"
						onConfirm={fuSubmit}
						okText="Да"
						cancelText="Нет"
					>
						<Button type="primary" danger
						// htmlType="submit"
						>
							Удалить
						</Button>
					</Popconfirm>
				</Form.Item>
			</Form>

		</>

	)
}
