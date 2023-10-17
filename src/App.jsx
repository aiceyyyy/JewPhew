import { useState } from 'react'
import './App.css'
import { Home } from './components/Home/Home'
import { Mobile } from './components/Mobile/Mobile'
import { Navbar } from './components/Navbar/Navbar'
import { Resources } from './components/Resources/Resources'

export const App = () => {
	const [isMobileMenuRevealed, setIsMobileMenuRevealed] = useState(false)

	const onImport = data => {
		setIsMobileMenuRevealed(data)
	}

	const closeNav = () => {
		setIsMobileMenuRevealed(false)
	}

	return (
		<>
			<Mobile onCollect={closeNav} menuState={isMobileMenuRevealed} />
			<Navbar onImport={onImport} />
			<Home />
			<Resources/>
		</>
	)
}
