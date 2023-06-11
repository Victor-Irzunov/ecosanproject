import React from 'react';
import { Divider, Drawer } from 'antd';
// import { useScreens } from '@/constants/constants';
import Link from 'next/link';
import { dataService } from '@/constants/data/DataService';
import CyrillicToTranslit from 'cyrillic-to-translit-js';
import Image from 'next/image';
import link from '../../public/link.svg'

export const DrawerMenuMobilComp = ({ isOpen, setIsOpen, onClose }) => {
	// const screens = useScreens();
	const cyrillicToTranslit = new CyrillicToTranslit();
	const onClose2 = () => {
		setIsOpen(false)
		
	};
	const onClose3 = () => {
		onClose()
		setIsOpen(false)
	};

	return (
		<Drawer
			title={<div className='pt-1 text-xl'></div>}
			placement='right'
			onClose={onClose2}
			open={isOpen}
			key='011'
			width='320px'
		>
			<ul className=''>
				{
					dataService.map((el, idx) => {
						return (
							<div className='mb-2' key={el.id}>
								<Divider className={`${idx === 0 && 'hidden'}`} />
								<p className='font-semibold text-base mb-1'>
									{el.title}
								</p>
								<ul className='h-full text-sm cursor-pointer flex flex-col justify-between items-start'>
									{
										el.children.map(elem => {
											return (
												<li className='underline mb-2.5 flex w-full justify-start items-end' key={elem.id}>
													<Link href={{
														pathname: `/uslugi/${cyrillicToTranslit.transform(elem.link.split(' ').join('-'))}`
													}}
														className="cursor-pointer hover:text-blue-700"
														onClick={onClose3}
													>
														{elem.title2}
													</Link>
													<Image src={link} width={15} alt={elem.title2} className='ml-2' />
												</li>
											)
										})
									}
								</ul>
							</div>
						)
					})
				}
			</ul>
		</Drawer>
	)
}
