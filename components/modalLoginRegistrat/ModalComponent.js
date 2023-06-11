import React, { useState } from 'react'
import { Button, Modal, Collapse } from 'antd'
import { FormLogin } from '../forms/FormLogin'
import { FormRegister } from '../forms/FormRegister'
import { FormGetOneService } from '../forms/FormGetOneService'
import FormDataInfo from '../forms/FormDataInfo'
import FormUpdateService from '../forms/FormUpdateService'
import { FormDeleteService } from '../forms/FormDeleteService'
import { useScreens } from '@/constants/constants'

const { Panel } = Collapse

const ModalComponent = ({ isModalOpen, setIsModalOpen, isForm }) => {
	const [isAccount, setIsAccount] = useState(false)
	const screens = useScreens()

	const handleCancel = () => {
		setIsModalOpen(false)
	}
	return (
		<Modal
			open={isModalOpen}
			title={<p className='text-2xl font-bold'>{(isAccount && "Регистрация") || (!isAccount && !isForm ? "Вход" : '') || (isForm && !isAccount ? 'Админка' : '')}</p>}
			centered
			footer={null}
			// onOk={handleOk}
			onCancel={handleCancel}
			width={screens.lg ? '800px' : '375px'}
		>
			{
				!isAccount && !isForm &&
				<>
					<p className='font-extralight mb-3'>Для доступа в Ваш личный кабинет введите e-mail.</p>
					<FormLogin handleCancel={handleCancel} />
					<span>Нет аккаунта?</span>
					<Button type='link' onClick={() => {
						setIsAccount(true)
						handleCancel()
						setTimeout(() => { setIsModalOpen(true) }, 0.5)
					}}>Зарегистрироваться</Button>
				</>
			}
			{
				isAccount &&
				<>
					<p className='font-extralight mb-3'>Для доступа в Ваш личный кабинет введите e-mail.</p>
					<FormRegister handleCancel={handleCancel} />
					<span>Есть аккаунт?</span>
					<Button type='link' onClick={() => {
						setIsAccount(false)
						handleCancel()
						setTimeout(() => { setIsModalOpen(true) }, 0.7)
					}}>Вход</Button>
				</>
			}
			{
				isForm && !isAccount ?
					<Collapse>
						<Panel header="Изменить данные" key="1">
							<FormDataInfo />
						</Panel>
						<Panel header="Изменить карточку" key="2">
							<FormGetOneService handleCancel={handleCancel} />
						</Panel>
						<Panel header="Добавить карточку" key="3">
							<FormUpdateService handleCancel={handleCancel} />
						</Panel>
						<Panel header="Удалить карточку" key="4">
							<FormDeleteService handleCancel={handleCancel} />
						</Panel>
					</Collapse>

					:
					null
			}
		</Modal>
	)
}
export default ModalComponent