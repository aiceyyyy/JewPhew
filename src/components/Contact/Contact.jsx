import { ContactForm } from './ContactForm'
import { FaGithub, FaInstagram, FaDiscord } from 'react-icons/fa6'

export const Contact = () => {
	return (
		<div className='mb-20 pt-44 py-24'>
			<div id='contact' className='w-full '>
				<h2 className='w-90vw text-center mx-auto mt-20 text-[50px] uppercase font-thin tracking-wider text-purple-500 mb-10'>
					Contact
				</h2>

				<div className='flex justify-center items-center xs:flex-col md:flex-row xs:w-full mx-auto'>
					<div className='flex justify-center items-center flex-col xs:w-[200px] md:w-[200px] h-[400px] bg-purple-500 xs:mb-16 md:mb-0 xs:mr-0 md:mr-5 rounded-lg'>
						<p className='text-xl font-semibold'>Contact us here</p>
						<div className='flex  justify-around items-center mt-10'>
							<a
								href='https://github.com/kubson52'
								className='text-2xl text-white hover:text-white'
								target='_blank'
								rel='noopener'>
								<FaGithub />
							</a>
							<a
								href='https://www.instagram.com/kubsonnnnn/'
								className='text-2xl mx-5 text-white hover:text-white'
								target='_blank'
								rel='noopener'>
								<FaInstagram />
							</a>
							<a
								href='https://discord.com/users/@kubson52'
								className='text-2xl text-white hover:text-white'
								target='_blank'
								rel='noopener'>
								<FaDiscord />
							</a>
						</div>
					</div>
					<ContactForm />
				</div>
			</div>
			<p className='xs:w-2/3 lg:w-1/3 mx-auto xs:mt-20 lg:mt-10 text-center italic'>
				Completing the form means that the personal data you provide in it will
				<span className='font-bold text-purple-500'> be processed</span> for the purpose of answering you. If your
				question relates to our services, we may provide you with an
				<span className='font-bold text-purple-500'> offer in response</span>. All your data is menaged only by JewPhew stuff.
			</p>
		</div>
	)
}
