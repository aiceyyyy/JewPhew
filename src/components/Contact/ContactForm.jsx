import { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import { db } from '../../firebaseConfig'
import { addDoc, collection } from 'firebase/firestore'
import 'react-toastify/dist/ReactToastify.css'

export const ContactForm = () => {
	const messageCollection = collection(db, 'messagedata')
	const [isValid, setIsValid] = useState(true)
	const [nameValue, setNameValue] = useState('')
	const [emailValue, setEmailValue] = useState('')
	const [messageValue, setMessageValue] = useState('')
	const nameRegex = /^[\d\s]+$/
	const emailRegex = /^[0-9]+$/

	const errorToast = {
		position: 'bottom-right',
		autoClose: 2000,
		hideProgressBar: false,
		closeOnClick: true,
		pauseOnHover: true,
		draggable: true,
		type: 'error',
		theme: 'colored',
	}

	const successToast = {
		...errorToast,
		type: 'success',
	}

	const collectName = e => {
		setNameValue(e.target.value)
	}
	const collectEmail = e => {
		setEmailValue(e.target.value)
	}
	const collectMessage = e => {
		setMessageValue(e.target.value)
	}

	const formSubmit = e => {
		e.preventDefault()

		//! All basic inputs validation
		if (nameValue === '' && emailValue === '' && messageValue === '') {
			setIsValid(false)
			toast('You cannot send empty form!', errorToast)
			return null
		}

		if (nameValue === '') {
			setIsValid(false)
			toast('Name field cannot be empty!', errorToast)
			return null
		} else {
			setIsValid(true)
		}
		if (emailValue === '') {
			setIsValid(false)
			toast('Email field cannot be empty!', errorToast)
			return null
		} else {
			setIsValid(true)
		}
		if (messageValue === '') {
			setIsValid(false)
			toast('Message cannot be empty!', errorToast)
			return null
		} else {
			setIsValid(true)
		}

		//! Name input validation
		if (nameRegex.test(nameValue)) {
			setIsValid(false)
			toast('Name must not include numbers and/or be empty!', errorToast)
			return null
		} else {
			setIsValid(true)
		}

		//! Email input validation
		if (!emailValue.includes('@')) {
			toast('Email must include "@"', errorToast)
			setIsValid(false)
			return null
		}

		if (emailValue.includes(' ')) {
			setIsValid(false)
			toast('Email must not contain spaces!', errorToast)
			return null
		} else {
			setIsValid(true)
		}

		if (emailRegex.test(emailValue)) {
			setIsValid(false)
			toast('Email cannot be only numbers!', errorToast)
			return null
		}

		//! Message input validation
		if (messageValue.length > 300) {
			setIsValid(false)
			toast('Message must not contain more than 300 characters!', errorToast)
			return null
		}

		if (isValid) {
			addDoc(messageCollection, {
				name: nameValue,
				email: emailValue,
				message: messageValue,
			})

			toast('Form sent succesfully!', successToast)
			setNameValue('')
			setEmailValue('')
			setMessageValue('')
		}
	}

	return (
		<form className='flex flex-col justify-center items-center w-1/2 max-w-[450px] h-[300px] xs:ml-0 md:ml-5 xs:mt-10 md:mt-0'>
			<label htmlFor='name' className='self-start xs:ml-0 md:ml-5 text-2xl text-purple-500'>
				Name
			</label>
			<input
				value={nameValue}
				onChange={collectName}
				id='name&surname'
				className=' max-w-[550px] self-start md:ml-5 xs:w-[100%]  my-2 py-2 px-2 bg-white rounded-lg border-purple-500 text-slate-700 placeholder:text-gray-800'
				type='text'
			/>

			<label htmlFor='email' className='self-start xs:ml-0 md:ml-5 text-2xl text-purple-500'>
				Email
			</label>
			<input
				value={emailValue}
				onChange={collectEmail}
				id='email'
				className=' max-w-[550px] self-start md:ml-5 xs:w-[100%]  my-2 py-2 px-2 bg-white rounded-lg border-purple-500 text-slate-700 placeholder:text-gray-800'
				type='email'
			/>

			<label htmlFor='message' className='self-start xs:ml-0 md:ml-5 text-2xl text-purple-500'>
				Message
			</label>
			<textarea
				value={messageValue}
				onChange={collectMessage}
				className='max-w-[550px] min-h-[110px] self-start md:ml-5 xs:w-[100%] p-3 overflow-y-visible resize-none my-2 bg-white rounded-lg border-purple-500 text-slate-700  placeholder:text-gray-800'
				id='message'
			/>
			<div className='xs:w-[300px] md:w-[400px] flex justify-center items-center xs:ml-0 md:ml-auto'>
				<button
					onClick={formSubmit}
					className='flex justify-center items-center max-w-[500px] self-end mt-5 bg-purple-500 xs:w-1/3 md:w-3/5 px-7  py-3 '
					type='submit'>
					Send
				</button>
			</div>
			<ToastContainer />
		</form>
	)
}
