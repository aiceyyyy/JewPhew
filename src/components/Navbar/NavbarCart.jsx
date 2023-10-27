import { useState, useEffect } from 'react'
import { IoBagOutline } from 'react-icons/io5'
import { FaBars } from 'react-icons/fa6'

export const NavbarCart = props => {
	const [screenWidth, setScreenWidth] = useState(window.innerWidth)

	const handleResize = () => {
		setScreenWidth(window.innerWidth)
	}

	useEffect(() => {
		window.addEventListener('resize', handleResize)

		return () => {
			window.removeEventListener('resize', handleResize)
		}
	}, [])

	const openNav = () => {
		props.openNav()
	}

	const openCart = () => {
		props.openCart()
	}

	return (
		<div className='flex xs:p-3 sm:p-5 justify-between items-center text-4xl'>
			<IoBagOutline
				onClick={openCart}
				className='relative xs:mr-5 lg:mr-0  text-white hover:text-white transition-all duration-300 cursor-pointer'
			/>
			<span
				onClick={openCart}
				className='absolute top-1/2 flex justify-center items-center ml-5 bg-slate-300 w-[20px] h-[20px] text-sm rounded-full text-slate-700 font-bold hover:text-purple-500 cursor-pointer transition-all duration-300'>
				{props.productAmount}
			</span>
			{screenWidth < 798 && (
				<FaBars
					onClick={openNav}
					className='flex justify-center items-center  text-white hover:text-white transition-all duration-300 cursor-pointer'
				/>
			)}
		</div>
	)
}
