import { FaArrowRight } from 'react-icons/fa6'
import classes from './Mobile.module.css'

export const Mobile = props => {
	const navTexts = [
		{
			id: 1,
			content: 'Home',
			tp: '#',
		},
		{
			id: 2,
			content: 'Resources',
			tp: '#diamonds',
		},
		{
			id: 3,
			content: 'Store',
			tp: '#store',
		},
		{
			id: 4,
			content: 'Contact',
			tp: '#contact',
		},
	]

	return (
		<div
			id='nav'
			className={`${classes.nav} ${
				props.statusDispatch ? 'translate-x-[0%]' : 'translate-x-[-100%]'
			} transition-all duration-300`}>
			<div className='flex flex-col justify-center items-center w-2/5 bg-white border-r border-r-black text-black'>
				<a href='#' className='text-xl text-black hover:text-purple-500 mb-10 transition-all duration-300'>
					JewPhew
				</a>
				<button
					onClick={props.closeNav}
					className={`${classes.button} mb-10 py-3 px-5 bg-transparent hover:border-black transition-all duration-300`}>
					<FaArrowRight />
				</button>
				{navTexts.map(text => (
					<a
						onClick={props.closeNav}
						className='text-black p-1 my-5 hover:text-purple-500 transition-all duration-300'
						href={text.tp}
						key={text.id}>
						{text.content}
					</a>
				))}
			</div>
			<div onClick={props.closeNav} className='w-3/5 backdrop-blur'></div>
		</div>
	)
}
