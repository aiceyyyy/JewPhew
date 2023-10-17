import img from '../../assets/Oppenheimer.jpg'
import classes from './Home.module.css'
import { HiChevronDoubleDown } from 'react-icons/hi2'

export const Home = () => {

	return (
		<div className='flex flex-col justify-start items-center mt-[100px] lg:mt-[200px] w-[100vw] z-10 mx-auto'>
			<div className='flex flex-col lg:flex-row mx-auto px-auto'>
				<img
					className='xs:max-w-[250px] w-[250px] h-[250px] mx-auto xs:mt-10 lg:min-w-[400px] lg:w-[400px] lg:h-[400px] mb-0 rounded-2xl'
					src={img}
					alt='diamond'
				/>
				<div className='h-3/5 mb-5 xs:p-10 lg:px-24'>
					<h2 className='mb-5 text-4xl uppercase font-thin tracking-wide text-gray-600'>
						Bestseller
					</h2>
					<p className='max-w-[300px] mb-5 text-3xl font-bold'>Oppenheimer Blue</p>
					<p className='max-w-[400px] text-left'>
						The Oppenheimer Blue is a 14.62-carat (2.924 g) vivid blue diamond that in May 2016 became the most
						expensive jewel ever sold at auction, until April 2017 when it was surpassed by the Pink Star diamond. The
						diamond was named for its previous owner Philip Oppenheimer.It is cut into a rectangle (emerald cut).The
						Oppenheimer Blue is the largest fancy vivid blue diamond classified by the Gemological Institute of America
						ever sold at auction; it sold at Christie's in Geneva in May 2016 for US$50.6 million. Two telephone bidders
						had competed for the diamond; the identity of the purchaseris not publicly known.
					</p>
				</div>
			</div>
			<button className={`xs:mb-20 xxl:mt-44 mx-auto rounded-full xs:p-4 lg:p-6 text-2xl ${classes.bounce}`}>
				<HiChevronDoubleDown />
			</button>
		</div>
	)
}
