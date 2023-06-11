"use client"
import Image from 'next/image'
import logo from '../../public/logo/logo.webp'
import logoMobil from '../../public/logo/logoMobil.webp'
import Link from 'next/link'
import { motion, AnimatePresence } from "framer-motion"
import { useState } from 'react'
import CyrillicToTranslit from 'cyrillic-to-translit-js'
import { dataService } from '@/constants/data/DataService'
import { MenuOutlined } from '@ant-design/icons'
import { useScreens } from '@/constants/constants'
import { DrawerComp } from '../drawer/DrawerComp'

const Header = () => {
  const [hover, setHover] = useState(false)
  const [openMenu, setOpenMenu] = useState(false)
  const [placement, setPlacement] = useState('')
	const [title, setTitle] = useState('')
  const screens = useScreens()
  const cyrillicToTranslit = new CyrillicToTranslit()
  const handleMouseLeave = () => {
    setHover(false)
  }
  const handleMouseEnter = () => {
    setHover(true)
  }

  const showDrawer = (position, title) => {
		setOpenMenu(true)
		setPlacement(position)
		setTitle(title)
	}

  const navBar = [
    {
      id: 1,
      name: 'Главная',
      link: '/'
    },
    {
      id: 2,
      name: 'Услуги',
      link: '/uslugi'
    },
    {
      id: 3,
      name: 'Цены',
      link: '/ceny'
    },
    {
      id: 4,
      name: 'О компании',
      link: '/o-kompanii'
    },
    {
      id: 5,
      name: 'Статьи',
      link: '/statya'
    },
    {
      id: 6,
      name: 'Контакты',
      link: '/kontakty'
    },
  ]

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 py-2 bg-white shadow-xl"
      onMouseLeave={handleMouseLeave}
    >
      <div className="container mx-auto">
        <div className='flex justify-between items-center'>
          <div className=''>
            <Link href='/'>
              <Image src={screens.lg ? logo : logoMobil} width={screens.lg ? 220 : 80} alt='логотип компании ООО Экосанпроект' />
            </Link>
          </div>

          <nav className='xz:hidden sd:block'>
            <ul className='flex justify-between items-center'>
              {
                navBar.map(el => {
                  return (
                    <li key={el.id}
                      className='mx-2 uppercase font-light text-sm'
                      onMouseEnter={el.id === 2 ? handleMouseEnter : handleMouseLeave}
                    >
                      <Link
                        href={el.link}
                      >
                        {el.name}
                      </Link>
                    </li>
                  )
                })
              }
            </ul>
          </nav>

         
          <div className=''>
            <a href='tel:80295086162' className='block xx:text-lg xz:pt-2 xz:text-sm'>
              +375 29 508-61-62
            </a>
          </div>

          <div className='xz:inline-block sd:hidden'>
            <MenuOutlined
              className='text-3xl'
              onClick={() => showDrawer('right', 'Меню')}
            />
          </div>
        </div>
      </div>

      <AnimatePresence>
        {
          hover &&
          (<motion.div
            initial={{ heigth: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className='w-full mt-2'
            style={{ borderTop: '1px solid #ccc', zIndex: '100000' }}
          >
            <div className='container mx-auto px-10'>
              <div className='pt-6 pb-4 text-sm border-t-black  font-light flex justify-between items-start flex-wrap'>

                {
                  dataService.map(el => {
                    return (
                      <div className='mb-1' key={el.id}>
                        <p className='font-semibold'>
                          {el.title}
                        </p>
                        <ul className='h-full text-sm cursor-pointer flex flex-col justify-between items-start'>
                          {
                            el.children.map(elem => {
                              return (
                                <li className='' key={elem.id}>
                                  <Link href={{
                                    pathname: `/uslugi/${cyrillicToTranslit.transform(elem.link.split(' ').join('-'))}`
                                  }}
                                    className="cursor-pointer hover:text-blue-700"
                                    onClick={handleMouseLeave}
                                  >
                                    {elem.title2}
                                  </Link>
                                </li>
                              )
                            })
                          }
                        </ul>
                      </div>
                    )
                  })
                }

              </div>
            </div>
          </motion.div>)
        }
      </AnimatePresence>

      <DrawerComp
        openMenu={openMenu}
        placement={placement}
        title={title}
        setOpenMenu={setOpenMenu}
        isActiveForm={{ menu: true }}
      />
    </header>
  )
}

export default Header
