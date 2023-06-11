
import Image from 'next/image';
import {
	dataService1,
	dataService2,
	dataService3,
	dataService4,
	dataService5,
	dataService6,
	dataService7,
	dataService8,
	dataService9,
	dataService10,
	dataService11,
	dataService12,
	dataService13,
	dataService14,
	dataService15,
	dataService16,
	dataService17,
} from '@/constants/data/DataService';
import click from '../../../public/click-blue.svg'
import Link from 'next/link';
export function generateMetadata({ params: { link } }) {
	return {
		title: '123',

	}
}

const UniversalServicePage = ({ params: { link } }) => {
	let data

	switch (link) {
		case 'razrabotka-proekta-sanitarno-zashchitnoi-zoni':
			data = dataService1
			break
		case 'aerodinamicheskie-ispitaniya-i-pasportizatsiya-sistem-ventilyatsii':
			data = dataService2
			break
		case 'inventarizatsiya-vibrosov':
			data = dataService3
			break
		case 'izmereniya-istochnikov-vibrosov':
			data = dataService4
			break
		case 'proverka-effektivnosti-gazoochistnikh-ustanovok':
			data = dataService5
			break
		case 'poluchenie-razresheniya-na-vibrosi':
			data = dataService6
			break
		case 'zapolnenie-zhurnalov-ucheta':
			data = dataService7
			break
		case 'zapolnenie-gosudarstvennoi-statisticheskoi-otchetnosti':
			data = dataService8
			break
		case 'razrabotka-instruktsii-po-obrashcheniyu-s-otkhodami':
			data = dataService9
			break
		case 'inventarizatsiya-otkhodov-proizvodstva':
			data = dataService10
			break
		case 'zapolnenie-zhurnalov-ucheta-pod-9-10':
			data = dataService11
			break
		case 'razrabotka-normativov-obrazovaniya-otkhodov':
			data = dataService12
			break
		case 'poluchenie-razresheniya-na-zakhoronenie-otkhodov':
			data = dataService13
			break
		case 'otchetnosti-po-forme-1-otkhodi':
			data = dataService14
			break
		case 'inventarizatsiya-zelenikh-nasazhdenii':
			data = dataService15
			break
		case 'razrabotka-ekologicheskogo-pasporta-predpriyatiya':
			data = dataService16
			break
		case 'razrabotka-instruktsii-po-osushchestvleniyu-ekologicheskikh-nablyudenii':
			data = dataService17
			break
	}


	return (
		<>
			<section className="min-h-screen pt-32 pb-24">

				<article className="container mx-auto">
					{
						data && data.map(el => {
							return (
								<div className='' key={el.id}>

									<h1 className="uppercase text-2xl font-semibold">
										{el.h1}
									</h1>
									<div className="mt-10">
										<div className="float-right ss:ml-5 xz:ml-0 mb-4">
											<Image src={el.img} width={450} alt={el.alt} className="object-cover" />
										</div>
										{el.text.map((elem, idx) => {
											return (
												<p className={`text-justify text-sm ${idx === el.text2.length - 1 ? 'mt-2' : 'mt-1'}`} key={idx}>
													{elem}
												</p>
											)
										})}
										<div className='mt-6'>
											<h2 className='text-xl mb-2 font-semibold'>
												{el.h2}
											</h2>
											{el.text2.map((elem, idx) => {
												return (
													<p className={`text-justify text-sm ${idx === el.text2.length - 1 ? 'mt-2' : 'mt-1'}`} key={idx}>
														{elem}
													</p>
												)
											})}
										</div>
										<div className='mt-5'>
											<h3 className='text-[#1F6F99] text-lg font-bold '>
												{el.price}
											</h3>
											<div className='ss:w-1/2 xz:w-full mt-5'>
												<p className='text-xs text-gray-600 text-justify'>
													Для получения более точной информации о стоимости и сроках, пожалуйста, свяжитесь с нами по телефону <a href='tel:80295086162' className='font-semibold inline'>+375 29 508-61-62</a> или нажмите на кнопку ниже. Наша команда с удовольствием ответит на все ваши вопросы и предоставит детальную информацию о наших услугах. Не упустите возможность получить точные данные, чтобы принять правильное решение.
												</p>
											</div>
											<button
												className='px-3 py-0.5 mt-8 text-xs shadow-lg rounded-md border border-[#1F6F99] bg-blue-100 text-[#1F6F99] uppercase'
											>
												<Link
													 href={{
														pathname: '/question',
														query: { link: `/${link}` },
													 }}
												>
													узнать точную цену и сроки
													<Image src={click} width={15} alt='клик' className='inline ml-1' />
												</Link>
											</button>
										</div>
									</div>
								</div>
							)
						})
					}

				</article>
			</section>
		</>
	)
}
export default UniversalServicePage;
