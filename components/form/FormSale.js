import React, { useState } from 'react'
import { Form, Button, Input, message, Space, Radio } from 'antd'
import InputMask from 'react-input-mask'
import { sendOrderTelegram } from '../../http/telegramAPI'

const { TextArea } = Input

export const FormSale = ({ handleCancel, title }) => {
	const [tel, setTel] = useState('')
	const onFinish = (values) => {
		let messageForm = `<b>Заказ с сайта</b>\n`
		messageForm += `<b>${title} </b>\n`
		messageForm += `<b>Клиент по имени ${values.name || '-'} </b>\n`
		messageForm += `<b>О клиенте: ${values.kto} </b>\n`
		messageForm += `<b>Неисправность: ${values.message || '-'} </b>\n`
		messageForm += `<b>- - - - - - - - - - - - - - -</b>\n`
		messageForm += `<b>Телефон:</b> ${values.tel}\n`

		sendOrderTelegram(messageForm)
			.then(data => {
				if (data.ok) {
					message.success('Ваш запрос на скидку принят!')
					handleCancel()
				}
			})

	};
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
					label="Имя"
					name="name"
					tooltip=""
				>
					<Input />
				</Form.Item>


				<Form.Item
					label="Телефон"
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
						className='border py-1 px-3 rounded-md w-full'
						beforeMaskedValueChange={beforeMaskedValueChange}
						value={tel}
						onChange={(e) => setTel(e.target.value)}
					/>
				</Form.Item>

				<Form.Item
					label=''
					name="kto"
					// name="address"
					className='mt-8 mb-6'
					rules={[
						{
							required: true,
							message: 'Пожалуйста выберите!',
						},
					]}
				>
					<Radio.Group>
						<Space direction="vertical">
							<Radio value='инвалид'>Инвалид</Radio>
							<Radio value='ветеран'>Ветеран</Radio>
							<Radio value='многодетная'>Многодетная семья</Radio>
						</Space>
					</Radio.Group>
				</Form.Item>



				<Form.Item
					label="Опишите неисправность"
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


			<p className='text-xs text-gray-500'>Скидка могут получить инвалиды, многодетные семьи, ветераны.</p>



		</>
	)
}
