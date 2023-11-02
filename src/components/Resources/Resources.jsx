import path from '../../assets/diamonds.jpeg'
import img from '../../assets/silver.jpg'
import pic from '../../assets/gold.jpeg'

export const Resources = () => {
	return (
		<div id='diamonds' className='w-screen py-44 flex justify-center flex-wrap mx-auto'>
			<div className='max-w-[250px] mx-3 my-3 py-5 px-3 rounded-xl'>
				<h2 className='text-center text-2xl mb-5 text-purple-500 tracking-wider uppercase'>Diamonds</h2>
				<img className='h-[200px] rounded-xl' src={path} alt='diamonds' />
				<p className='xs:text-center xl:text-left mt-3'>
					Diamond is a solid form of the element carbon with its atoms arranged in a crystal structure called diamond
					cubic. Another solid form of carbon known as graphite is the chemically stable form of carbon at room
					temperature and pressure, but diamond is metastable and converts to it at a negligible rate under those
					conditions.
				</p>
			</div>
			<div className='max-w-[250px] mx-20 my-3 py-5 px-3 rounded-xl'>
				<h2 className='text-center text-2xl mb-5 text-purple-500 tracking-wider uppercase'>Gold</h2>
				<img className='h-[200px] rounded-xl' src={pic} alt='silver' />
				<p className='xs:text-center xl:text-left mt-3'>
					Gold is a chemical element with the symbol Au (from Latin aurum 'gold') and atomic number 79. It is a bright,
					slightly orange-yellow, dense, soft, malleable, and ductile metal in pure form. Chemically, gold is a
					transition metal and a group 11 element.
					A relatively rare element,gold is a precious metal that's really wonderful. 
				</p>
			</div>
			<div className='max-w-[250px] mx-3 my-3 py-5 px-3 rounded-xl'>
				<h2 className='text-center text-2xl mb-5 text-purple-500 tracking-wider uppercase'>Silver</h2>
				<img className='h-[200px] rounded-xl' src={img} alt='gold' />
				<p className='xs:text-center xl:text-left mt-3'>
					Silver is a chemical element with the symbol Ag (from Latin argentum 'silver', derived from the
					Proto-Indo-European 'shiny', 'white') and atomic number 47. A soft, white, lustrous transition metal, it
					exhibits the highest electrical conductivity, thermal conductivity, and reflectivity of any metal.
				</p>
			</div>
		</div>
	)
}
