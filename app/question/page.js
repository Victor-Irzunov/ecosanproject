import { FormQuestion } from "@/components/form/FormQuestion"
export const metadata = {
	title: 'Узнать стоимость работы и сроки',
	description: 'Узнать стоимость работы и сроки',
}

const QuestionPage = ({ searchParams: { link } }) => {

	return (
		<section className="py-32 min-h-screen">
			<div className="container mx-auto">
				<h1 className="text-3xl">
					Узнать стоимость работы и сроки
				</h1>
				<div className="mt-10 overflow-x-hidden">
					<FormQuestion link={link} />
				</div>
			</div>
		</section>
	)
}
export default QuestionPage