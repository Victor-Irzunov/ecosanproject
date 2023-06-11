import { dataContent, dataPrice } from "@/constants/data/DataPrice"

export const metadata = {
	title: 'price',
	description: 'price',
}

const PricePage = () => {
	return (
		<section className="py-32 min-h-screen">
			<article className="container mx-auto">
				<h1 className="text-3xl uppercase mb-7">
					Цены на услуги
				</h1>
				<p className="font-light text-justify xz:text-sm ss:text-base">
					Наша компания предлагает широкий спектр услуг в области промышленной экологии и санитарии, включая разработку документации, проектов и проведение измерений (испытаний). Мы также оказываем поддержку в получении разрешений в сферах атмосферного воздуха, отходов, водопотребления и водоотведения. Разработка и сопровождение проекта санитарно-защитной зоны при прохождении оценки риска здоровью населения и санитарно-гигиеническая экспертиза также являются нашими основными направлениями деятельности. Помимо этого, мы предлагаем паспортизацию вентиляционных систем и проверку эффективности газоочистных установок для вновь вводимых и эксплуатируемых объектов.
					Степень сложности и объем работ могут варьироваться в зависимости от конкретных требований каждого проекта. Поэтому стоимость услуги будет определяться индивидуально в каждом случае. Мы учитываем множество факторов, таких как время, ресурсы и специфика задачи, для предоставления точной и конкурентоспособной цены.
					Для получения подробной информации о стоимости услуг и ценообразовании, рекомендуем обратиться к нашим специалистам. Мы проведем детальную консультацию, учтем все ваши требования и особенности проекта, чтобы предложить наилучшую цену, отвечающую вашим потребностям.
					Мы стремимся к прозрачности и честности в отношении стоимости наших услуг. Наша цель - предоставить высококачественное выполнение работ по разумной и конкурентной цене. Мы понимаем важность эффективного использования ваших ресурсов и бюджета, поэтому всегда стараемся предложить оптимальное соотношение цены и качества.
					Если вас интересует стоимость услуги в области промышленной экологии и санитарии, обратитесь к нам для получения индивидуального коммерческого предложения. Мы гарантируем профессиональный подход, конкурентоспособную цену и качественное выполнение всех необходимых работ.
				</p>
				<div className='mt-14'>
					{
						dataPrice.map(el => {
							return (
								<div className="mb-16" key={el.id}>
									<h3 className="text-center uppercase text-xl">
										{el.title}
									</h3>
									<div className='flex justify-between items-center mt-4 '>
										<div className='w-1/2 h-20 shadow-md flex bg-blue-300 justify-center items-center m-0.5 border'>
											<div className='text-center'>
												<p className='uppercase text-sm font-semibold mb-0'>услуга</p>
											</div>
										</div>
										<div className='w-1/2 h-20 shadow-lg bg-blue-300 flex justify-center items-center m-0.5'>
											<div className='text-center'>
												<p className='uppercase text-sm mb-0 font-semibold'>стоимость</p>
											</div>
										</div>
									</div>
									{
										el.block.map(elem => {
											return (
												<div key={elem.id} className='flex justify-between items-center'>
													<div
														className={`w-1/2 ss:h-20 xz:h-36 shadow-lg ${elem.id % 2 === 0 ? 'bg-blue-200/70' : 'bg-blue-100/70'} bg-blue-100 flex justify-center items-center m-0.5 p-1`}
													>
														<p className='uppercase text-black text-xs mb-0 text-center'>
															{elem.name}
														</p>
													</div>

													<div
														className={`w-1/2 ss:h-20 xz:h-36 shadow-lg ${elem.id % 2 === 0 ? 'bg-blue-200/70' : 'bg-blue-100/70'} flex justify-center items-center m-0.5`}
													>
														<p className='mb-0 xz:text-sm ss:text-base text-center'>
															{elem.price}
														</p>
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
				<div className="mt-16">
					{
						dataContent.map((el, idx) => {
							return (
								<p key={idx} className={`xz:text-sm ss:text-base ${idx===0 ? 'font-semibold mb-3 xz:text-xl ss:text-2xl': ''} font-light mb-1 text-justify`}>
									{el}
								</p>
							)
						})
					}
				</div>
			</article>
		</section>
	)
}

export default PricePage