import { useState, useEffect } from 'react'
import { IoBagOutline } from 'react-icons/io5'
import { FaBars } from 'react-icons/fa6'

export const NavbarCart = () => {
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
		<div className='flex xs:p-4 sm:p-5 justify-between items-center text-4xl'>
			<IoBagOutline className='relative mr-3 text-white hover:text-purple-500 transition-all duration-300 cursor-pointer' />
			<span
				className='absolute top-1/2 flex justify-center items-center ml-5 bg-slate-300 w-[20px] h-[20px] text-sm rounded-full text-slate-700 font-bold' >
				1
			</span>
			{screenWidth < 798 && (
				<FaBars className='flex justify-center items-center ml-3 text-white hover:text-purple-500 transition-all duration-300 cursor-pointer' />
			)}
		</div>
	)
}
