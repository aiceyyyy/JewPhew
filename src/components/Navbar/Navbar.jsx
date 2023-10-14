import { useState, useEffect } from 'react'
import { NavbarCart } from './NavbarCart'

export const Navbar = () => {
	const navTexts = [
		{
			id: 1,
			content: 'Home',
		},
		{
			id: 2,
			content: 'Silver',
		},
		{
			id: 3,
			content: 'Gold',
		},
		{
			id: 4,
			content: 'Amber',
		},
	]

	const [screenWidth, setScreenWidth] = useState(window.innerWidth)

	// Handling window resize
	const handleResize = () => {
		setScreenWidth(window.innerWidth)
	}

	useEffect(() => {
		window.addEventListener('resize', handleResize)

		return () => {
			window.removeEventListener('resize', handleResize)
		}
	}, [])

	return (
		<div className='w-screen flex justify-between fixed top-0 left-0 p-1 xs:px-1 sm:px-10 bg-slate-700'>
			<div className='flex justify-center items-center p-3'>
				<a className='text-3xl font-bold text-white hover:text-purple-500 transition-all duration-300 cursor-pointer' href='#'>JewPhew</a>
			</div>
			<div className='flex justify-center items-center mr-auto ml-10 lg:ml-20 px-auto'>
				{screenWidth > 798 &&
					navTexts.map(item => (
						<a
							className='text-lg text-white hover:text-purple-500 transition-all duration-300 font-semibold ml-10 cursor-pointer'
							key={item.id}>
							{item.content}
						</a>
					))}
			</div>
			<NavbarCart />
		</div>
	)
}
