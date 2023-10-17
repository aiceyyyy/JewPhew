import classes from './Mobile.module.css'
import { FiArrowLeft } from 'react-icons/fi'

export const Mobile = props => {
	const navTexts = [
		{
			id: 1,
			content: 'Home',
		},
		{
			id: 2,
			content: 'Diamonds',
		},
		{
			id: 3,
			content: 'Silver',
		},
		{
			id: 4,
			content: 'Gold',
		},
	]

	const navItems = navTexts.map(item => (
		<a
			href='#'
			className='mb-10 text-2xl font-bold text-slate-700 hover:text-purple-500 transition-all duration-300 cursor-pointer'
			key={item.id}>
			{item.content}
		</a>
	))

	const closeNav = () => {
		props.onCollect(false)
	}

	return (
		<div className={!props.menuState ? 'hidden' : classes.backdrop}>
			<div className={classes.nav}>
				<a className={classes.link} href='#'>
					JewPhew
				</a>
				<button onClick={closeNav} className={classes.button}>
					<FiArrowLeft className={classes.arrow} />
				</button>
				<div className={classes.navItems}>{navItems}</div>
			</div>
		</div>
	)
}
