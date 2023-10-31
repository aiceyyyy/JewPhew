import { useState } from 'react'
import { FaArrowLeft } from 'react-icons/fa6'
import { CartProduct } from './CartProduct'

export const Cart = props => {
	const [totalPrice, setTotalPrice] = useState(0)

	const collectProductPrice = data => {
		setTotalPrice(data)
		console.log(data)
	}

	return (
		<div
			className={`${
				props.statusDispatch ? 'translate-x-[0%]' : 'translate-x-[-100%]'
			} fixed top-0 left-0 w-screen h-screen overflow-scroll overflow-x-hidden mx-auto py-10 px-15 backdrop-blur-md z-[60] transition-all duration-300`}>
			<button
				onClick={props.closeCart}
				className='px-2 flex justify-center items-center bg-transparent mr-auto xs:ml-3 lg:ml-7 bg-white text-black hover:border-white uppercase tracking-wide'>
				<FaArrowLeft />
				<p className='ml-1'>go back</p>
			</button>
			<div className='mt-10 mb-10 text-center'>
				<h2 className='bg-white text-black rounded-lg w-1/2 py-4 mx-auto xs:text-2xl lg:text-4xl uppercase text-shadow tracking-wide'>
					Your Cart
				</h2>
			</div>
			<div className='flex flex-col xs:w-4/5 md:w-3/5 rounded-lg text-center mx-auto py-5 bg-white text-black'>
				{props.PRODUCT_DATA.length === 0 && (
					<div>
						<p className='w-1/2 mx-auto font-semibold'>It's nothing to see here yet...</p>
						<iframe
							className='flex justify-center items-center mt-2 mx-auto'
							src='https://lottie.host/?file=284e14de-b60c-4851-85c6-37228a9a043e/KT9MmzAVN2.json'></iframe>
					</div>
				)}

				{props.PRODUCT_DATA.map(product => (
					<CartProduct collectProductPrice={collectProductPrice} key={product.id} data={product} />
				))}

				<p className='py-7 text-xl font-bold text-purple-500'>
					Total amount: ${totalPrice === 0 ? 0 : totalPrice.toFixed(2)}
				</p>
			</div>
		</div>
	)
}
