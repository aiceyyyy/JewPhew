import { useRef, useState, useContext } from 'react'
import { CartCtx } from '../../CartCtx/CartCtx'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

export const Product = props => {
	const ctx = useContext(CartCtx)
	const [amountIsValid, setAmountIsValid] = useState(true)
	const amountInputRef = useRef()

	const addToCartHandler = () => {
		ctx.addItem({
			id: props.id,
			path: props.path,
			name: props.name,
			amount: +amountInputRef.current.value,
			price: props.price,
			content: props.content,
			inputValue: +amountInputRef.current.value,
		})
	}

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

	const submitHandler = e => {
		e.preventDefault()

		const enteredAmount = amountInputRef.current.value
		const enteredAmountNumber = parseFloat(enteredAmount)

		if (enteredAmount.trim().length === 0) {
			toast('Amount must not be empty', errorToast)
			setAmountIsValid(false)
			return null
		} else if (enteredAmountNumber > 10) {
			toast('Maximum amount: 10', errorToast)
			setAmountIsValid(false)
			return null
		} else if (enteredAmountNumber < 1) {
			toast('Minimum amount: 1', errorToast)
			setAmountIsValid(false)
			return null
		} else {
			if (enteredAmountNumber === 1) {
				toast('Item added to cart succesfully', successToast)
			} else {
				toast('Items added to cart succesfully', successToast)
			}
			setAmountIsValid(true)
		}

		addToCartHandler({
			path: props.path,
			name: props.name,
			price: props.price,
			content: props.content,
			amount: enteredAmountNumber,
		})
	}

	return (
		<div className='flex flex-col max-w-[250px] mx-3 my-3 py-5 px-3 bg-white rounded-xl'>
			<img className='h-[200px] rounded-xl' src={props.path} alt='product' />

			<p className='text-slate-700 mt-5 text-2xl font-bold'>{props.name}</p>

			<p
				className={`${
					props.price === 'Indyvidual pricing' ? 'text-red-600' : 'text-purple-500'
				} mt-1 text-lg font-semibold`}>
				{props.price !== 'Indyvidual pricing' ? '$' : ''}
				{props.price}
			</p>
			<p className='text-slate-700 italic'>{props.content}</p>
			<input
				ref={amountInputRef}
				className='bg-[#333] text-white mt-5 w-1/3 mx-auto pl-3 pr-2 py-2 rounded-lg'
				id='amount'
				type='number'
				label='amount'
				min='1'
				max='10'
				step='1'
				defaultValue='1'
				readOnly={props.price === 'Indyvidual pricing' ? true : false}
			/>
			<button
				onClick={submitHandler}
				disabled={props.price === 'Indyvidual pricing' ? true : false}
				className={`${
					props.price === 'Indyvidual pricing' ? 'bg-red-600 hover:border-red-600' : 'hover:border-white'
				} mt-3 self-center text-white bg-purple-500 `}
				type='submit'>
				{props.price === 'Indyvidual pricing' ? 'Contact' : 'Add to Cart'}
			</button>
			<ToastContainer />
		</div>
	)
}
