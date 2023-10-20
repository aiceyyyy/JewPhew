import reactImg from '../../assets/react.jpg'
import tailwindImg from '../../assets/tailwind.jpeg'
import viteImg from '../../assets/vite.png'
import githubImg from '../../assets/github.jpg'

export const Footer = () => {
	const currentDate = new Date()
	const currentYear = currentDate.getFullYear()

	const IMAGES = [
		{
			id: 'p1',
			path: reactImg,
			content: 'react',
			web: 'https://react.dev/',
		},
		{
			id: 'p2',
			path: tailwindImg,
			content: 'tailwind',
			web: 'https://tailwindcss.com/',
		},
		{
			id: 'p3',
			path: viteImg,
			content: 'vite',
			web: 'https://vitejs.dev/',
		},
		{
			id: 'p4',
			path: githubImg,
			content: 'github',
			web: 'https://github.com/',
		},
	]

	const madeWith = IMAGES.map(image => (
		<a key={image.id} href={image.web} target='_blank' rel='noopener'>
			<img className='xs:w-[200px] h-[125px] sm:w-[350px] sm:h-[225px] m-10' src={image.path} alt={image.content} />
		</a>
	))

	return (
		<>
			<div className='flex justify-center items-center w-screen pt-7 px-2 text-2xl font-semibold tracking-wider bg-gray-900 mt-[100px]'>
				<h2>Powered by:</h2>
			</div>
			<div className='flex flex-wrap justify-center items-center w-[100vw] py-5 mx-auto bg-gray-900'>{madeWith}</div>
			<div className='w-full h-[2px] bg-slate-800 mx-auto'></div>
			<div className='flex justify-center flex-col items-center bg-gray-900 py-5'>
				<p className='xs:text-sm sm:text-lg italic px-2'>© Copyright {currentYear} | All Rights Reserved</p>
				<a
					href='https://github.com/kubson52'
					rel='noopener'
                    target='_blank'
					className='xs:text-sm sm:text-lg text-white hover:text-white italic px-2'>
					Made by: <span className='font-semibold text-purple-500'>Kubson52</span>
				</a>
			</div>
		</>
	)
}
