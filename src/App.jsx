import { useState } from 'react'
import './App.css'
import { Home } from './components/Home/Home'
import { Mobile } from './components/Mobile/Mobile'
import { Navbar } from './components/Navbar/Navbar'

export const App = () => {
	const [isMobileMenuRevealed, setIsMobileMenuRevealed] = useState(true)

	const onImport = data => {
		setIsMobileMenuRevealed(data)
		console.log(isMobileMenuRevealed);
	}

	return (
		<>
				<Mobile menuState={isMobileMenuRevealed} />
				<Navbar onImport={onImport} />
				<Home />
		</>
	)
}
