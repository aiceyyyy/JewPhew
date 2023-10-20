import { useState, useEffect } from 'react'
import { NavbarCart } from './NavbarCart'

export const Navbar = () => {
	const navTexts = [
		{
			id: 1,
			content: 'Home',
			tp: '#'
		},
		{
			id: 2,
			content: 'Resources',
			tp: '#diamonds',
		},
		{
			id: 3,
			content: 'Store',
			tp: '#store'
		},
		{
			id: 4,
			content: 'Contact',
			tp: '#contact'
		},
	]

	const [screenWidth, setScreenWidth] = useState(window.innerWidth)
	const [scrollY, setScrollY] = useState(0)

	useEffect(() => {
		const handleScroll = () => {
			setScrollY(window.scrollY)
		}
		window.addEventListener('scroll', handleScroll)
		return () => {
			window.removeEventListener('scroll', handleScroll)
		}
	}, [window.scrollY])

	const dynamicNavStyle = scrollY >= 50 ? 'rgb(147 51 234)' : 'transparent'

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
		<div
			style={{ backgroundColor: dynamicNavStyle }}
			className='w-screen flex justify-between fixed top-0 left-0 p-1 px-auto xs:px-1 sm:px-10 transition-all duration-300 z-40'>
			<div className='flex justify-center items-center p-3'>
				<a
					className='text-3xl font-bold text-white hover:text-white transition-all duration-300 cursor-pointer'
					href={'#'}>
					JewPhew
				</a>
			</div>
			<div className='flex justify-center items-center mr-auto ml-10 lg:ml-20 px-auto'>
				{screenWidth > 798 &&
					navTexts.map(item => (
						<a
							href={item.tp}
							className='text-lg text-white hover:text-white transition-all duration-300 font-semibold ml-10 cursor-pointer'
							key={item.id}>
							{item.content}
						</a>
					))}
			</div>
			<NavbarCart />
		</div>
	)
}
