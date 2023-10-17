export const ProductSection = () => {
	return (
		<>
			<div className='w-[75vw] flex xs:justify-center lg:justify-end items-center mt-20 mx-auto'>
				<label className='mr-5' for='products'>
					Filter products
				</label>
				<select id='products' name='products' defaultChecked='All'>
					<option value='All'>All</option>
					<option value='Diamonds'>Diamonds</option>
					<option value='Silver'>Silver</option>
					<option value='Gold'>Gold</option>
				</select>
			</div>
			<div className='flex flex-col justify-center items-center w-[75vw] mx-auto mt-5'>
				<div>
                    {/* Downloading ~50 images and making product market... */}
                </div>
			</div>
		</>
	)
}
