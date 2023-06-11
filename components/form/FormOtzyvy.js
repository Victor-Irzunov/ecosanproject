import { Button, Form, Input, Checkbox, Rate, message } from 'antd'

import React, { useState } from 'react'
import { sendOrderTelegram } from '../../http/telegramAPI'

const { TextArea } = Input

export const FormOtzyvy = ({ setAdd }) => {
	const [isCheck, setIsCheck] = useState(false)

	const onFinish = (values) => {
		console.log('Success:', values)
		let messageForm = `<b>Отзыв с сайта</b>\n`
		messageForm += `<b> </b>\n`
		messageForm += `<b>Клиент по имени ${values.name} оставил отзыв </b>\n`
		messageForm += `<b>Отзыв: ${values.message} </b>\n`
		messageForm += `<b>Оценка: ${values.rate} звёздочек</b>\n`
		messageForm += `<b>- - - - - - - - - - - - - - -</b>\n`
		messageForm += `<b>Телефон:</b> ${values.tel}\n`
		messageForm += `<b>Авто:</b> ${values.avto}\n`

		sendOrderTelegram(messageForm)
			.then(data => {
				if (data.ok) message.success('Ваш отзыв принят')
			})
	}
	const onFinishFailed = (errorInfo) => {
		console.log('Failed:', errorInfo)
	}
	const onChange = (e) => {
		console.log(`checked = ${e.target.checked}`);
		setIsCheck(e.target.checked)
	};

	return (
		<Form
			name="otzyvy"
			labelCol={{
				span: 8,
			}}
			wrapperCol={{
				span: 16,
			}}
			initialValues={{
				remember: false,
			}}
			onFinish={onFinish}
			onFinishFailed={onFinishFailed}
			autoComplete="off"
		>
			<Form.Item
				label="Имя"
				name="name"
				rules={[
					{
						required: true,
						message: 'Напишите своё имя!',
					},
				]}
			>
				<Input />
			</Form.Item>

			<Form.Item
				label="Что делали"
				name="rab"
				rules={[
					{
						required: true,
						message: 'Напишите что Вам делали!',
					},
				]}
			>
				<Input />
			</Form.Item>

			<Form.Item
				label="Телефон"
				name="tel"
				tooltip='Публиковаться не будет.'
				rules={[
					{
						required: true,
						message: 'Пожалуйста введите номер телефона!',
					},
				]}
			>
				<Input />
			</Form.Item>

			<Form.Item
				label="Отзыв"
				name="message"
				tooltip="Опишите почему вызывали, как о нас узнали, как проходил процесс, впечатления о проделаной работе."
				rules={[
					{
						required: true,
						message: 'Пожалуйста напишите отзыв!',
					},
				]}
			>
				<TextArea
					placeholder=""
					autoSize={{
						minRows: 3,
					}}
				/>
			</Form.Item>


			<Form.Item
				label="Ваша оценка"
				name="rate"
				rules={[
					{
						required: true,
						message: 'Пожалуйста оцените!',
					},
				]}
			>
				<Rate allowHalf />
			</Form.Item>

			<Form.Item
				name="client"
				valuePropName="checked"
				wrapperCol={{
					offset: 2,
					span: 16,
				}}
			>
				<Checkbox onChange={onChange}>Я клиент Вашей службы</Checkbox>
			</Form.Item>

			<Form.Item
				wrapperCol={{
					offset: 8,
					span: 16,
				}}
			>
				<Button type="primary"
					htmlType="submit"
					disabled={!isCheck}
				>
					Отправить
				</Button>
			</Form.Item>
			<p className='text-[12px]'>За оставленый отзыв мы дарим клиенту 15% скидку на наши услуги, пожизненно!</p>
			<p className='underline' onClick={() => setAdd(false)}>скрыть форму</p>
		</Form>
	)
}
