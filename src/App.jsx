import './App.css'
import { Home } from './components/Home/Home'
import { Mobile } from './components/Mobile/Mobile'
import { Navbar } from './components/Navbar/Navbar'
import { Resources } from './components/Resources/Resources'
import { ProductSection } from './components/Products/ProductSection'

export const App = () => {
	return (
		<>
			<Mobile />
			<Navbar />
			<Home />
			<Resources />
			<ProductSection />
		</>
	)
}
