import { Button, Result } from 'antd';
import Link from 'next/link';
const ResultComp = ({ link }) => (
	<Result
		status="success"
		title="Ваш запрос на стоимость и сроки успешно отправлен!"
		subTitle="Скоро мы обработаем ваш запрос и перезвоним с ответом"
		extra={[
			<Button type="primary" >
				<Link href='/'>
					На главную
				</Link>
			</Button>,
			<Button >
				<Link href={`http://localhost:3000/uslugi/${link}`}>
					Назад к услуге
				</Link>
			</Button>,
		]}
	/>
);
export default ResultComp