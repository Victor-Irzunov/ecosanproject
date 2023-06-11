"use client"
import { Modal } from 'antd'
import { FormQuestion } from '../form/FormQuestion'
import { FormTel } from '../form/FormTel'


export const ModalUniversal = ({ isModalOpen, title = '', handleCancel, isActive }) => {

	return (
		<Modal
			title={title}
			open={isModalOpen}
			onCancel={handleCancel}
			centered
			footer={null}
		>
			{
				isActive.consultation && <FormQuestion />
			}

			{
				isActive.tel && <FormTel />
			}



		</Modal>
	)
}
