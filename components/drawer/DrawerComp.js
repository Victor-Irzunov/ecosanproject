import { Drawer } from 'antd'
import { FormTel } from '../form/FormTel';
import { FormDate } from '../form/FormDate';
import { MenuMobil } from '../header/mobilMenu/MenuMobil';
// import { useScreens } from '@/constants/constants';

export const DrawerComp = ({ openMenu, placement, setOpenMenu, isActiveForm, title }) => {
	// const screens = useScreens()
	const onClose = () => {
		setOpenMenu(false)
	}
	return (
		<Drawer
			title={<div className='pt-1 text-xl'>{title}</div>}
			placement={placement}
			onClose={onClose}
			open={openMenu}
			key={placement}
			width='330px'
		>
			{
				isActiveForm.tel && <FormTel />
			}
			{
				isActiveForm.date && <FormDate />
			}
			{
				isActiveForm.menu && <MenuMobil onClose={onClose} />
			}
		</Drawer>
	)
}
