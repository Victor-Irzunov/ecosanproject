import { Form, Button, Input, message, InputNumber, Divider } from 'antd'
import axios from 'axios'
import { useState } from 'react'
import FormService from './FormService'



export const FormGetOneService = ({ handleCancel }) => {
	const [form] = Form.useForm()
	const [data, setData] = useState({})

	const onFinish = async (values) => {
		console.log('values:', values)
		await axios.get('/api/service-data',
			{
				params: {
					id: values.id
				}
			}
		)
			.then(response => {
				console.log('response::: ', response);
				setData(response)
			})
			.catch(error => {
				console.log('error::: ', error);
			});
	}
	const onFinishFailed = (errorInfo) => {
		console.log('Failed:', errorInfo);
	}
	function isEmptyObject(obj) {
		return Object.keys(obj).length === 0 && obj.constructor === Object;
	}



	return (
		<>
			<Form
				name="getOne"
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
					<Button type="primary" htmlType="submit">
						Получить
					</Button>
				</Form.Item>
			</Form>

			<Divider />

			{
				!isEmptyObject(data) ?
					<FormService data={data} />
					:
					null
			}
		</>

	)
}
