import './App.css'
import { Home } from './components/Home/Home'
import { Mobile } from './components/Mobile/Mobile'
import { Navbar } from './components/Navbar/Navbar'
import { Resources } from './components/Resources/Resources'
import { ProductSection } from './components/Products/ProductSection'
import { Contact } from './components/Contact/Contact'
import { Footer } from './components/Footer/Footer'
import { useState } from 'react'

export const App = () => {
	const [navStatus, setNavStatus] = useState(false)

	const closeNav = () => {
		setNavStatus(false)
	}

	const openNav = () => {
		setNavStatus(true)
	}

	return (
		<>
			<Mobile 
				closeNav={closeNav} 
				statusDispatch={navStatus}
			/>
			<Navbar openNav={openNav} />
			<Home />
			<Resources />
			<ProductSection />
			<Contact />
			<Footer />
		</>
	)
}
