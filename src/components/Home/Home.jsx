import path from '../../assets/Screenshot_3.png'
import classes from './Home.module.css'
import { HiChevronDoubleDown } from 'react-icons/hi2'

export const Home = () => {
	return (
		<div className='flex flex-col justify-start items-center mt-[100px] lg:mt-[200px] w-[100vw] h-[calc(100vh-100px)] z-10 mx-auto'>
			<div className='flex flex-col lg:flex-row mx-auto px-auto'>
				<img
					className='xs:max-w-[150px] w-[150px] h-[150px] mx-auto xs:mt-5 lg:min-w-[450px] lg:w-[450px] lg:h-[450px] mb-auto'
					src={path}
					alt='diamond'
				/>
				<div className='h-3/5 mt-5 mb-10 xs:p-10 lg:px-24'>
					<h2 className='max-w-[300px] mb-7 text-4xl uppercase font-thin tracking-wide text-gray-600 xs:text-center lg:text-left'>
						Bestseller
					</h2>
					<p className='max-w-[300px] mb-5 text-3xl font-bold xs:text-center lg:text-left'>Diamond</p>
					<p className='max-w-[300px] xs:text-center lg:text-left'>
						Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero labore quas mollitia et enim, similique sed!
						Repudiandae, amet! Nostrum amet fugit illum id modi reprehenderit, incidunt ipsa mollitia nam aut! Delectus
						itaque aut sed fuga aperiam alias veritatis, veniam ipsa?
					</p>
				</div>
			</div>
			<button className={`xs:mb-20 xxl:mt-44 mx-auto rounded-full xs:p-4 lg:p-6 text-2xl ${classes.bounce}`}>
				<HiChevronDoubleDown />
			</button>
		</div>
	)
}
