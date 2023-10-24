import './App.css'
import { Home } from './components/Home/Home'
import { Cart } from './components/Cart/Cart'
import { Mobile } from './components/Mobile/Mobile'
import { Navbar } from './components/Navbar/Navbar'
import { Resources } from './components/Resources/Resources'
import { ProductSection } from './components/Products/ProductSection'
import { Contact } from './components/Contact/Contact'
import { Footer } from './components/Footer/Footer'
import { useState } from 'react'

export const App = () => {
	const [navStatus, setNavStatus] = useState(false)
	const [cartStatus, setCartStatus] = useState(false)

	const closeNav = () => {
		setNavStatus(false)
	}

	const openNav = () => {
		setNavStatus(true)
	}

	const openCart = () => {
		setCartStatus(true)
	}

	const closeCart = () => {
		setCartStatus(false)
	}

	return (
		<>
			<Cart statusDispatch={cartStatus} closeCart={closeCart} />
			<Mobile closeNav={closeNav} statusDispatch={navStatus} />
			<Navbar openNav={openNav} openCart={openCart} />
			<Home />
			<Resources />
			<ProductSection />
			<Contact />
			<Footer />
		</>
	)
}
