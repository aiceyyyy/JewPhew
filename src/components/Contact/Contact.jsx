import { ContactForm } from './ContactForm'
import { FaGithub, FaInstagram, FaBoxArchive } from 'react-icons/fa6'

export const Contact = () => {
	return (
		<div className='w-full mb-20'>
			<h2 className='w-90vw text-center mx-auto mt-20 text-[50px] uppercase font-thin tracking-wider text-purple-500 mb-10'>
				Contact
			</h2>

			<div className='flex justify-center items-center xs:flex-col md:flex-row xs:w-full mx-auto'>
				<div className='flex justify-center items-center flex-col xs:w-[200px] md:w-[200px] h-[400px] bg-purple-500 xs:mb-16 md:mb-0 xs:mr-0 md:mr-5 rounded-lg'>
					<p className='text-xl font-semibold'>Contact us here</p>
					<div className='flex  justify-around items-center mt-10'>
						<a href='https://github.com/kubson52' className='text-2xl text-white hover:text-white' target='_blank' rel='noopener'>
							<FaGithub />
						</a>
						<a href='https://www.instagram.com/kubsonnnnn/' className='text-2xl mx-5 text-white hover:text-white' target='_blank' rel='noopener'>
							<FaInstagram />
						</a>
						<a href='mailto:urbanskikontakt52@gmail.com' className='text-2xl text-white hover:text-white' target='_blank'  rel='noopener'>
							<FaBoxArchive />
						</a>
					</div>
				</div>
				<ContactForm />
			</div>
		</div>
	)
}
