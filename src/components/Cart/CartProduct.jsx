export const CartProduct = props => {
	return (
		<div className='flex xs:flex-col xxl:flex-row justify-around items-center mt-10 border-b-2 xs:w-full sm:w-4/5 max-w-[900px] xs:px-5 lg:px-10 py-10 bg-white mx-auto border-black text-black'>
			<img className='rounded-lg h-[200px] w-[250px]' src={props.data.path} alt='product photo' />
			<div className='flex flex-col max-w-[300px] px-5 xs:mb-5 lg:mb-0'>
				<p className='text-2xl text-slate-700 font-semibold'>{props.data.name}</p>
				<p className='text-purple-500 text-lg font-bold my-2'>${props.data.price}</p>
				<p className='italic'>{props.data.description}</p>
			</div>
			<div className='flex flex-col px-5'>
				<input
					type='number'
					className='text-center mx-auto rounded-lg w-[75px] text-white bg-[#333] px-2 py-2'
					name='product amount'
					id='amount'
					min='1'
					max='10'
					step='1'
				/>

				<button className='bg-purple-500 mx-auto text-white hover:border-white px-5 mt-5'>Remove product</button>
			</div>
		</div>
	)
}
