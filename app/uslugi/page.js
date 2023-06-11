import img from '../../public/click.svg'
import CyrillicToTranslit from 'cyrillic-to-translit-js'
import Image from 'next/image'
import Link from 'next/link'
import { dataContent, dataService } from '../../constants/data/DataService'


export const metadata = {
	title: 'Услуги по разработке документации, проектов и проведению измерений в сфере промышленной экологии и санитарии',
	description: 'Получение разрешений в сферах: атмосферного воздуха, отходов, водопотребления и водоотведения. Разработка и сопровождение проекта санитарно-защитной зоны при прохождении оценки риска здоровью населения и санитарно-гигиенической экспертизы. Паспортизация вентиляционных систем и проверка эффективности газоочистных установок для вновь вводимых и эксплуатируемых объектов.',
}

const ServicePage = () => {
	const cyrillicToTranslit = new CyrillicToTranslit()

	return (
		<section className="py-32 min-h-screen">
			<div className="container mx-auto">

				<h1 className="text-3xl uppercase mb-7">
					Услуги
				</h1>
				<article>
					<p className="font-light xz:text-sm ss:text-base text-justify">
						Одной из наших основных задач является получение разрешений в различных сферах, таких как атмосферный воздух, отходы, водопотребление и водоотведение. Мы предлагаем полное сопровождение этого процесса, включая разработку необходимой документации и проведение соответствующих измерений и испытаний.
						Особое внимание мы уделяем разработке и сопровождению проектов санитарно-защитных зон. Мы помогаем оценить риск для здоровья населения и проводим санитарно-гигиеническую экспертизу, разрабатывая необходимые меры для обеспечения безопасности окружающей среды и здоровья людей.
						Мы также предлагаем услуги по паспортизации вентиляционных систем и проверке эффективности газоочистных установок для новых и эксплуатируемых объектов. Наша команда экспертов поможет вам обеспечить соответствие требованиям экологической безопасности и гарантировать эффективную работу систем очистки воздуха.
						Наша организация гордится своим профессионализмом, опытом и уникальным подходом к каждому проекту. Мы стремимся предоставлять услуги на самом высоком уровне, обеспечивая нашим клиентам надежность, качество и экологическую безопасность. Если вам требуется помощь в области промышленной экологии и санитарии, обратитесь к нам, и мы с удовольствием окажем вам необходимую поддержку.
					</p>
				</article>
				<div className="flex justify-between items-center flex-wrap mt-10">

					{
						dataService.map(el => {
							return (
								<div key={el.id} className='bg-[#f7f7f7] px-2 py-5 mb-16 rounded-md'>
									<h2 className='text-center uppercase font-semibold'>
										{el.title}
									</h2>
									{
										el.children.map(elem => {
											return (
												<div
													key={elem.id}
													className="border shadow-xl rounded-lg py-3 px-4 bg-[#fff] flex xz:flex-col ss:flex-row mb-8 mt-8"
												>
													<div className='ss:w-3/12 xz:w-full ss:pr-4 xz:pr-0 xz:mb-3 ss:mb-0'>
														<Image src={elem.img} alt={elem.alt} className='rounded-lg' />
													</div>
													<div className='ss:w-9/12 xz:w-full'>
														<p className="font-semibold uppercase mb-2 ss:text-lg xz:text-sm">
															{elem.title2}
														</p>
														<p className="font-light text-sm text-justify">
															{elem.content}
														</p>

														<div className='text-right mt-3'>
															<Link href={`/uslugi/${cyrillicToTranslit.transform(elem.link.split(' ').join('-'))}`}
																className='uppercase xz:text-sm ss:text-base'
															>
																подробнее <Image src={img} alt='подробнее'
																	className='inline-block'
																	style={{ width: '16px', marginLeft: '3px' }}
																/>
															</Link>
														</div>
													</div>
												</div>
											)
										})
									}

								</div>
							)
						})
					}
				</div>

				<article className='ss:mt-20 xz:mt-10'>
					{
						dataContent.map((el, idx) => {
							return (
								<div key={idx}>
									<h3 className={`${idx === 0 ? 'font-semibold' : 'hidden'} mb-3 text-lg`}>
										{el}
									</h3>
									<p className={`${idx === 0 && 'hidden'} ${idx === dataContent.length - 1 && 'font-normal mt-3'} font-light text-justify xz:text-sm ss:text-base`}>
										{el}
									</p>
								</div>
							)
						})
					}
				</article>
			</div>
		</section>
	);
};

export default ServicePage;
