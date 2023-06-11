import DescriptionsContactComp from "@/components/descriptionsContact/DescriptionsContactComp"
import DescriptionsContactUnnComp from "@/components/descriptionsContact/DescriptionsContactUnnComp"
import Image from "next/image"
import foto from '../../public/contact/contact.webp'

export const metadata = {
	title: 'Контакты компании Эко',
	description: 'Контакты компании Эко',
}

const ContactPage = () => {
	return (
		<section className="py-32 min-h-screen">
			<div className="container mx-auto">

				<h1 className="text-3xl">
					Контакты
				</h1>
				<div className="mt-20 flex justify-between xz:flex-col ss:flex-row">
					<div className="bg-[#f7f7f7] ss:w-1/4 xz:w-full rounded-md p-5">
						<DescriptionsContactComp />
					</div>
					<div className="ss:ml-5 xz:ml-0 xz:mt-5 ss:mt-0 ss:w-3/4 xz:w-full">
						<div className="bg-[#f7f7f7] rounded-md p-5">
							<DescriptionsContactUnnComp />
						</div>
						<div className="mt-5 bg-[#f7f7f7] rounded-md p-5">
							<p className="font-semibold mb-3 pl-5">
								Контактное лицо
							</p>
							<div className="flex xz:flex-col ss:flex-row">
								<div className="ss:w-1/3 xz:w-full">
									<Image src={foto} width={320} alt="контактное лицо" className="rounded-md" />
								</div>
								<div className="xz:mt-5 ss:m-5 ss:w-2/3 xz:w-full">

									<p className="text-lg mb-1">
										Перетягин Андрей Дмитриевич
									</p>
									<p className="text-xs text-gray-500 uppercase">
										Инженер-эколог
									</p>
									<p className="font-light text-xs mt-3 text-gray-500 text-justify">
										Перетягин Андрей Дмитриевич - непревзойденный профессионал в разработке документов и проектов в области промышленной экологии и санитарии. Его глубокие знания, творческий подход и многолетний опыт делают его лучшим специалистом в этой сфере. Он внимательно анализирует каждую деталь, учитывает все нюансы и предлагает инновационные решения для оптимизации экологических процессов. Перетягин Андрей Дмитриевич - надежный и ответственный профессионал, готовый принять вызов любого проекта и обеспечить его успешную реализацию. Его работа превосходит ожидания, приводя к достижению максимальных результатов в области экологической устойчивости и соблюдения санитарных норм. Сотрудничество с Андреем Дмитриевичем - это гарантия качества, надежности и профессионализма в каждом проекте.
									</p>
								</div>
							</div>
						</div>
						<article className="mt-5 font-light text-sm text-justify">
							<p>
								Если у вас возникли вопросы или вам необходима консультация, не стесняйтесь обратиться к нам. Наша команда с радостью поможет вам разобраться во всех нюансах и предоставит полезные рекомендации. Мы ценим каждого клиента и стремимся предоставить качественные услуги, соответствующие вашим требованиям и потребностям.
							</p>
							<p>
								Заказывая услуги у нашей компании, вы можете быть уверены в надежности и профессионализме наших специалистов. Мы гарантируем высокое качество работы и оперативное выполнение всех задач.
							</p>
							<p>
								Не откладывайте решение вопросов экологического и санитарного характера на потом. Позвоните нам прямо сейчас, и мы обеспечим вас всей необходимой информацией. Наша цель - сделать вашу деятельность экологически безопасной и соответствующей высоким стандартам.
							</p>
						</article>

					</div>
				</div>
			</div>
		</section>
	)
}
export default ContactPage
