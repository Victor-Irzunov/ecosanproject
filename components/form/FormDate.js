import React, { useState } from 'react'
import { Form, Button, Input, DatePicker, TimePicker, message } from 'antd'
import InputMask from 'react-input-mask'
import { sendOrderTelegram } from '../../http/telegramAPI'

const { TextArea } = Input

export const FormDate = ({onClose,title}) => {
	const [tel, setTel] = useState('')


	const onFinish = (values) => {
		let messageForm = `<b>Заказ с сайта</b>\n`
		messageForm += `<b>${title} </b>\n`
		messageForm += `<b>Предварительная запись </b>\n`
		messageForm += `<b>на дату:</b> ${values.date.$d.toLocaleDateString("ru-RU")}\n`
		messageForm += `<b>время:</b> ${values.time.$d.toLocaleTimeString("ru-RU")}\n`
		messageForm += `<b>- - - - - - - - - - - - - - -</b>\n`
		messageForm += `<b>Телефон:</b> ${values.tel}\n`
		messageForm += `<b>Сообщение:</b> «${values.message || '-'}»\n`

		sendOrderTelegram(messageForm)
			.then(data => {
				if (data.ok) {
					message.success('Заказ принят')
					onClose()
				}
			})
	}

	const onFinishFailed = (errorInfo) => {
		console.log('Failed:', errorInfo);
	}

	const beforeMaskedValueChange = (newState, oldState, userInput) => {
		var { value } = newState
		var selection = newState.selection
		var cursorPosition = selection ? selection.start : null
		if (value.endsWith('-') && userInput !== '-' && !tel.endsWith('-')) {
			if (cursorPosition === value.length) {
				cursorPosition--
				selection = { start: cursorPosition, end: cursorPosition }
			}
			value = value.slice(0, -1)
		}
		return {
			value,
			selection
		}
	}
	return (
		<>
			<Form
				name="basic"
				labelCol={{
					span: 24,
				}}
				wrapperCol={{
					span: 24,
				}}
				
				onFinish={onFinish}
				onFinishFailed={onFinishFailed}
				autoComplete="off"
			>


				<Form.Item
					label='Выберите дату'
					name="date"
					// tooltip="Если на эту дату свободный мастеров нет Вам перезвонит наш менеджер"
					rules={[
						{
							required: true,
							message: 'Пожалуйста выберите дату!',
						},
					]}
				>
					<DatePicker
					/>
				</Form.Item>

				<Form.Item
					label='Выберите время'
					name="time"
					// tooltip="Если на это время свободный мастеров нет Вам перезвонит наш менеджер"
					rules={[
						{
							required: true,
							message: 'Пожалуйста выберите время!',
						},
					]}
				>
					<TimePicker
						showTime={{
							format: 'HH:mm',
						}}
					/>
				</Form.Item>

				<Form.Item
					label='Сообщение'
					name="message"
					tooltip=""
				>
					<TextArea
						placeholder="Сообщение"
						autoSize={{
							minRows: 3,
						}}
					/>
				</Form.Item>


				<Form.Item
					label='
					Телефон'
					name="tel"
					
					tooltip="код оператора и номер"
					rules={[
						{
							required: true,
							message: 'Пожалуйста введите номер!',
						},
					]}
				>
					<InputMask
						placeholder="29 123-45-67"
						mask="+3\7\5 99 999 99 99"
						maskChar={'-'}
						className='border py-1 px-4 rounded-md w-full'
						beforeMaskedValueChange={beforeMaskedValueChange}
						value={tel}
						onChange={(e) => setTel(e.target.value)}
					/>
				</Form.Item>

				<Form.Item
					wrapperCol={{
						offset: 8,
						span: 16,
					}}
				>
					<Button type="primary" htmlType="submit">
						Отправить заказ
					</Button>
				</Form.Item>
			</Form>

			<p className='text-orange-500 text-[10px] mt-10 uppercase'>15% скидка по предварительной записи</p>

		</>
	)
}
