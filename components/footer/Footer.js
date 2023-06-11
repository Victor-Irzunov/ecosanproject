'use client'
import telegram from '../../public/social-icon/telegram.svg'
import viber from '../../public/social-icon/viber.svg'
import instagram from '../../public/social-icon/instagram.svg'
import { PhoneOutlined, MailOutlined } from '@ant-design/icons'
import { useScreens } from '@/constants/constants'
import Image from 'next/image'

const Footer = () => {
	const screens = useScreens()
	return (
		<footer className="mt-auto relative bg-[#246F9A] py-6">
			<div className="container mx-auto">
				<div className='flex justify-between items-start text-white flex-wrap'>

					<div className='font-light text-base xs:mb-4'>
						<p className='border-b border-t-transparent border-l-transparent border-r-transparent border-white/60 border-solid text-lg'>
							Информация
						</p>
						<ul className='no-underline list-none pl-0'>
							<li className='no-underline list-none'>
								Статьи
							</li>
							<li className='no-underline list-none'>
								О компании
							</li>
						</ul>
					</div>

					<div className='font-light text-base xs:mb-4 xx:mb-4 xy:mb-4 xz:mb-4 xm:mb-0 xz:mt-2 ss:mt-0'>
						<p className='border-b border-t-transparent border-l-transparent border-r-transparent border-white/60 border-solid text-lg'>
							Контакты
						</p>
						<p>
							<PhoneOutlined className='mr-3 rotate-90 text-lg' />
							<a href='tel:80295086162' className='text-white'>
								+375 29 508 61 62
							</a>
						</p>
						<p>
							<MailOutlined className='mr-3 text-lg' />
							ecosanproect@gmail.com
						</p>
					</div>

					<div className='font-light text-base xs:mb-4 xx:mb-4 xy:mb-4 xz:mb-4 xm:mb-0'>
						<p className='border-b border-t-transparent border-l-transparent border-r-transparent border-white/60 border-solid font-light text-lg'>
							Юр. адрес
						</p>
						<p>
							220015, г. Минск, ул. Одоевского, 115А, пом. 268
						</p>
					</div>
					<div className='font-light text-base xs:mb-4 xx:mb-4 xy:mb-4 xz:mb-4 xm:mb-0'>
						<p className='border-b border-t-transparent border-l-transparent border-r-transparent border-white/60 border-solid font-light text-lg'>
							График работы
						</p>
						<p>
							Пн-Пт - 08:00 - 18:00
						</p>
						<p>
							Сб-Вс - выходной
						</p>
					</div>

					<div className='font-light text-base xs:mb-4 xx:mb-4 xy:mb-4 xz:mb-4 xm:mb-0'>
						<p className='border-b border-t-transparent border-l-transparent border-r-transparent border-white/60 border-solid font-light text-lg'>
							Мы в соц. сетях
						</p>
						<div className='flex justify-evenly items-center pt-3'>
							<a href='https://www.instagram.com/ecosanproect' target='_blank' >
								<Image src={instagram} width={25} alt='иконка инстаграма' />
							</a>
							<a href={`${screens.md ? 'https://t.me/Andrei_ECO' : 'https://t.me/@Andrei_ECO'}`} target='_blank' >
								<Image src={telegram} width={25} alt='иконка телеграма' />
							</a>
							<a href='viber://chat?number=%2B375' target='_blank' >
								<Image src={viber} width={25}alt='иконка вайбера'  />
							</a>
						</div>
					</div>
				</div>
				<div
					className='mt-6 border-t pt-2'
				>
					<p className='text-slate-50/50 xs:text-xs xz:text-[10px]' >Copyright © 2018-2023 | Разработка и Продвижение
						<a href='https://vi-tech.by' target='_blank' rel="noreferrer" className='text-sky-400 no-underline'> VI:TECH</a>
					</p>
				</div>
			</div>
		</footer>
	)
}


export default Footer
