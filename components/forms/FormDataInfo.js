import { useEffect, useState } from 'react'
import { Form, Input, Button, Upload, message } from 'antd'
import { UploadOutlined } from '@ant-design/icons'
import axios from 'axios'
import { useRouter } from 'next/router'

const { TextArea } = Input

const FormDataInfo = ({ handleCancel }) => {
	const [form] = Form.useForm()
	const [loading, setLoading] = useState(false)
	const [data, setData] = useState({})
	const router = useRouter()

	useEffect(() => {
		axios.get('/api/data-info')
			.then(response => {
				console.log('response:', response)
				if (response.data.length) {
					setData(response.data[0])
				} else {
					message.warning('Данных нет')
				}
			})
	}, [])

	const onFinish = async (values) => {

		console.log('values:', values)
		try {
			setLoading(true);
			const formData = new FormData();
			formData.append('id', data.id);
			formData.append('tel1', values.tel1 || '');
			formData.append('tel2', values.tel2 || '');
			formData.append('rezhim', values.rezhim || '-');
			formData.append('h1', values.h1 || '');
			formData.append('h2', values.h2 || '');
			formData.append('h3', values.h3 || '');
			formData.append('h4', values.h4 || '');
			formData.append('p', values.p || '');
			formData.append('info', values.info || '');
			formData.append('content', values.content || '');
			if (values.img_fon) {
				formData.append('img_fon', values.img_fon[0].originFileObj);
			}
			formData.append('alt', 'фоновое изображение установка спутникового телевидения');

			const response = await axios.post('/api/data', formData, {
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
	function isEmptyObject(obj) {
		return Object.keys(obj).length === 0 && obj.constructor === Object;
	 }

	if (!isEmptyObject(data)) {
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
						tel1: data?.tel1,
						rezhim: data?.rezhim,
						tel2: data?.tel2,
						h1: data?.h1,
						h2: data?.h2,
						h3: data?.h3,
						h4: data?.h4,
						p: data?.p,
						info: data?.info,
						content: data?.content
					}
				}
			>
				<Form.Item
					name="img_fon"
					label="Загрузите новое фоновое изображение"
					valuePropName="fileList"
					getValueFromEvent={(e) => e.fileList}
				>
					<Upload
						name="img_fon"
						accept="image/*"
						maxCount={1}
						beforeUpload={() => false}
					>
						<Button icon={<UploadOutlined />}>Загрузить</Button>
					</Upload>
				</Form.Item>


				<Form.Item
					name="tel1"
					label="Телефон 1"
					tooltip='Пример: +375 29 000 00 00'
				>
					<Input placeholder='+375 29 000 00 00' />
				</Form.Item>

				<Form.Item
					name="tel2"
					label="Телефон 2"
					tooltip='Пример: +375 29 000 00 00'
				>
					<Input placeholder='+375 29 000 00 00' />
				</Form.Item>

				<Form.Item
					name="rezhim"
					label="Режим работы"
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
					name="h1"
					label="Главный заголовок"
				>
					<Input />
				</Form.Item>

				

				<Form.Item
					name="h3"
					label="Заголовок"
				>
					<TextArea
						autoSize allowClear showCount
					/>
				</Form.Item>

				<Form.Item
					name="h4"
					label="Заголовок"
				>
					<TextArea
						autoSize allowClear showCount
					/>
				</Form.Item>

				<Form.Item
					name="p"
					label=""
				>
					<TextArea
						autoSize allowClear showCount
					/>
				</Form.Item>


				<Form.Item
					name="info"
					label="Текст с призывом к действию"
					tooltip='Перенос на следующую строку "/"'
				>
					<TextArea
						autoSize allowClear showCount
					/>
				</Form.Item>



			

				<Form.Item
					name="content"
					label="Уникальный контент"
					tooltip='Для поисковых роботов с ключами по тексту. Перенос на следующую строку "/"'
				>
					<TextArea
						autoSize allowClear showCount
					/>
				</Form.Item>

				<Form.Item>
					<Button type="primary" htmlType="submit" loading={loading}>
						Сохранить
					</Button>
				</Form.Item>
			</Form>
		)
	} else {
		return <p>Данных пока нет</p>
	}
}

export default FormDataInfo
