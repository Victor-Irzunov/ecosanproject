import React, { useState } from 'react'
import { Button, Divider } from 'antd'
import { RightOutlined } from '@ant-design/icons'
import { DrawerComp } from '../../drawer/DrawerComp'
import Link from 'next/link'
import { DrawerMenuMobilComp } from '@/components/drawerMenuMobil/DrawerMenuMobilComp'


export const MenuMobil = ({ onClose }) => {
	// const [open, setOpen] = useState(false)
	const [isOpen, setIsOpen] = useState(false)
	// const [placement, setPlacement] = useState('')
	// const [title, setTitle] = useState('')
	// const [isActiveForm, setIsActiveForm] = useState({
	// 	tel: false,
	// 	date: false,
	// 	menu: false,
	// })

	// const showDrawer = (position, title, str) => {
	// 	setOpen(true)
	// 	setPlacement(position)
	// 	setTitle(title)
	// 	switch (str) {
	// 		case 'tel': setIsActiveForm(prev => ({ ...prev, tel: true, date: false, menu: false }))
	// 			break
	// 		case 'date': setIsActiveForm(prev => ({ ...prev, tel: false, date: true, menu: false }))
	// 			break
	// 	}
	// }

	const showDrawerMenuMobil = () => {
		setIsOpen(true)
	}


	return (
		<div className='h-full'>
			<nav className='h-full'>
				<ul className='h-full flex flex-col justify-start items-start text-sm cursor-pointer'>
					<li>
						<Link href='/'
							className="cursor-pointer"
							onClick={onClose}
							style={{ color: '#000' }}
						>
							Главная страница
						</Link>
					</li>
					<Divider style={{ marginTop: '8px', marginBottom: '8px' }} />

					<li className='flex justify-between items-center w-full'>
						<Link href='/uslugi'
							className="cursor-pointer"
							onClick={onClose}
							style={{ color: '#000' }}
						>
							Услуги
						</Link>
						<RightOutlined
							onClick={showDrawerMenuMobil}
						/>
					</li>
					<Divider style={{ marginTop: '8px', marginBottom: '8px' }} />

					<li className='flex justify-between items-center w-full'>
						<Link href='/ceny'
							className="cursor-pointer"
							onClick={onClose}
							style={{ color: '#000' }}
						>
							Цены
						</Link>
					</li>
					<Divider style={{ marginTop: '8px', marginBottom: '8px' }} />

					<li className='flex justify-between items-center w-full'>
						<Link href='/o-kompanii'
							className="cursor-pointer"
							onClick={onClose}
							style={{ color: '#000' }}
						>
							О компании
						</Link>
					</li>
					<Divider style={{ marginTop: '8px', marginBottom: '8px' }} />

					<li className='flex justify-between items-center w-full'>
						<Link href='/statya'
							className="cursor-pointer"
							onClick={onClose}
							style={{ color: '#000' }}
						>
							Статьи
						</Link>
					</li>
					<Divider style={{ marginTop: '8px', marginBottom: '8px' }} />

					<li className='flex justify-between items-center w-full'>
						<Link href='/kontakty'
							className="cursor-pointer"
							onClick={onClose}
							style={{ color: '#000' }}
						>
							Контакты
						</Link>
					</li>

					{/* <li className='mt-16'>
						<Button
							type='text'
							onClick={() => showDrawer('right', 'Заказать на дату', 'date')}
						>
							Задать вопрос
						</Button>
					</li> */}

				</ul>
			</nav>
			<DrawerMenuMobilComp isOpen={isOpen} setIsOpen={setIsOpen} onClose={onClose } />
			{/* <DrawerComp open={open} placement={placement} title={title} setOpen={setOpen} isActiveForm={isActiveForm} /> */}
		</div>
	)
}
