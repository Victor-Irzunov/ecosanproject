import { Button, Divider, message, Steps, theme } from 'antd';
import { useState } from 'react';
import { steps } from '../../constants/data/DataContent'


export const StepsSection = () => {
	const { token } = theme.useToken();
	const [current, setCurrent] = useState(0);
	const next = () => {
		setCurrent(current + 1);
	};
	const prev = () => {
		setCurrent(current - 1);
	};
	const items = steps.map((item) => ({
		key: item.title,
		title: item.title,
	}));
	const contentStyle = {

		backgroundColor: token.colorFillAlter,
		borderRadius: token.borderRadiusLG,
		border: `1px dashed ${token.colorBorder}`,

	};
	return (
		<section className='relative pt-4 pb-12 w-full bg-white'>
			<article className='container mx-auto'>
				<h3 className='text-xl mb-12 uppercase'>
					Как мы работаем
				</h3>
				<Steps current={current} items={items} />
				<div style={contentStyle}
					className='p-5 mt-4 font-light xz:text-xs sd:text-sm text-justify'
				>
					{steps[current].content}
				</div>
				<div
					style={{
						marginTop: 24,
					}}
				>
					{current < steps.length - 1 && (
						<Button type="primary" onClick={() => next()}>
							Следующий этап
						</Button>
					)}
					{current === steps.length - 1 && (
						<Button type="primary" onClick={() => message.success('Вот и всё!')}>
							Завершить
						</Button>
					)}
					{current > 0 && (
						<Button
							style={{
								margin: '0 8px',
							}}
							onClick={() => prev()}
						>
							Назад
						</Button>
					)}
				</div>
				<Divider />
			</article>
		</section>
	)
}
