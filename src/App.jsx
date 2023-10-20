import './App.css'
import { Home } from './components/Home/Home'
import { Mobile } from './components/Mobile/Mobile'
import { Navbar } from './components/Navbar/Navbar'
import { Resources } from './components/Resources/Resources'
import { ProductSection } from './components/Products/ProductSection'
import { Contact } from './components/Contact/Contact'
import { Footer } from './components/Footer/Footer'

export const App = () => {
	return (
		<>
			<Mobile />
			<Navbar />
			<Home />
			<Resources />
			<ProductSection />
			<Contact />
			<Footer />
		</>
	)
}
