export const ContactForm = () => {
	return (
		<form className='flex flex-col justify-center items-center w-1/2 max-w-[450px] h-[300px] xs:ml-0 md:ml-5 xs:mt-10 md:mt-0'>
			<label htmlFor='name&surname' className='self-start xs:ml-0 md:ml-5 text-2xl text-purple-500'>
				Name
			</label>
			<input
				id='name&surname'
				className=' max-w-[550px] self-start md:ml-5 xs:w-[100%]  my-2 py-2 px-2 bg-white rounded-lg border-purple-500 text-slate-700 placeholder:text-gray-800'
				type='text'
			/>

			<label htmlFor='email' className='self-start xs:ml-0 md:ml-5 text-2xl text-purple-500'>
				Email
			</label>
			<input
				id='email'
				className=' max-w-[550px] self-start md:ml-5 xs:w-[100%]  my-2 py-2 px-2 bg-white rounded-lg border-purple-500 text-slate-700 placeholder:text-gray-800'
				type='email'
			/>

			<label htmlFor='message' className='self-start xs:ml-0 md:ml-5 text-2xl text-purple-500'>
				Message
			</label>
			<textarea
				className='max-w-[550px] min-h-[110px] self-start md:ml-5 xs:w-[100%] p-3 overflow-y-visible resize-none my-2 bg-white rounded-lg border-purple-500 text-slate-700  placeholder:text-gray-800'
				id='message'
			/>
			<div className='xs:w-[300px] md:w-[400px] flex justify-center items-center xs:ml-0 md:ml-auto'>
				<button
					className='flex justify-center items-center max-w-[500px] self-end mt-5 bg-purple-500 xs:w-1/3 md:w-3/5 px-7  py-3 '
					type='submit'>
					Send
				</button>
			</div>
		</form>
	)
}
