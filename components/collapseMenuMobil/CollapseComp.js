import { Collapse } from 'antd';
import Link from 'next/link';



const items = [
	{
		key: '1',
		label: 'Услуги',
		children: <div className=''>
			<ul className=''>
				<li className=''>
					<Link href=''>
						лдмфвылмьвальм
					</Link>
				</li>
				<li className=''>
					<Link href=''>
						лдмфвылмьвальм33333
					</Link>
				</li>
			</ul>
		</div>,
	},
	{
		key: '2',
		label: 'Услуги',
		children: <div className=''>
			<ul className=''>
				<li className=''>
					<Link href=''>
						лдмфвылмьвальм
					</Link>
				</li>
				<li className=''>
					<Link href=''>
						лдмфвылмьвальм33333
					</Link>
				</li>
			</ul>
		</div>,
	},
];
const CollapseComp = () => {
	return (
		<Collapse
			defaultActiveKey={['1']}
			ghost
			items={items}
		/>
	)
}
export default CollapseComp;