import { useState } from 'react'
import { Product } from './Product'
import g1 from '../../products_assets/gold/gold1.jpeg'
import g2 from '../../products_assets/gold/gold2.jpeg'
import g3 from '../../products_assets/gold/gold3.jpeg'
import g4 from '../../products_assets/gold/gold4.jpeg'
import g5 from '../../products_assets/gold/gold5.jpeg'
import g6 from '../../products_assets/gold/gold6.jpeg'
import g7 from '../../products_assets/gold/gold7.jpeg'
import g8 from '../../products_assets/gold/gold8.jpeg'
import g9 from '../../products_assets/gold/gold9.jpeg'
import g10 from '../../products_assets/gold/gold10.jpeg'
import s1 from '../../products_assets/silver/silver1.jpeg'
import s2 from '../../products_assets/silver/silver2.jpeg'
import s3 from '../../products_assets/silver/silver3.jpeg'
import s4 from '../../products_assets/silver/silver4.jpeg'
import s5 from '../../products_assets/silver/silver5.jpeg'
import s6 from '../../products_assets/silver/silver6.jpeg'
import s7 from '../../products_assets/silver/silver7.jpeg'
import s8 from '../../products_assets/silver/silver8.jpeg'
import s9 from '../../products_assets/silver/silver9.jpeg'
import s10 from '../../products_assets/silver/silver10.jpeg'
import d1 from '../../products_assets/diamond/diamond1.jpeg'
import d2 from '../../products_assets/diamond/diamond2.jpeg'
import d3 from '../../products_assets/diamond/diamond3.jpeg'
import d4 from '../../products_assets/diamond/diamond4.jpeg'
import d5 from '../../products_assets/diamond/diamond5.jpeg'

export const ProductSection = () => {
	const PRODUCTS_DATA = [
		//? Gold
		{
			id: 'p1',
			path: g1,
			price: '$129.99',
			name: 'Ring',
			content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, officiis?',
			type: 'GOLD',
		},
		{
			id: 'p2',
			path: g2,
			price: '$299.99',
			name: 'Ring',
			content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, officiis?',
			type: 'GOLD',
		},
		{
			id: 'p3',
			path: g3,
			price: '$799.99',
			name: 'Necklace',
			content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, officiis?',
			type: 'GOLD',
		},
		{
			id: 'p4',
			path: g4,
			price: '$99.99',
			name: 'Ring',
			content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, officiis?',
			type: 'GOLD',
		},
		{
			id: 'p5',
			path: g5,
			price: '$249.99',
			name: 'Chainline',
			content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, officiis?',
			type: 'GOLD',
		},
		{
			id: 'p6',
			path: g6,
			price: '$124.99',
			name: 'Ring',
			content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, officiis?',
			type: 'GOLD',
		},
		{
			id: 'p7',
			path: g7,
			price: '$2499.99',
			name: 'Chain',
			content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, officiis?',
			type: 'GOLD',
		},
		{
			id: 'p8',
			path: g8,
			price: 'Indyvidual pricing',
			name: 'Chain',
			content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, officiis?',
			type: 'GOLD',
		},
		{
			id: 'p9',
			path: g9,
			price: '$289.99',
			name: 'Pendant',
			content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, officiis?',
			type: 'GOLD',
		},
		{
			id: 'p10',
			path: g10,
			price: '$999.99',
			name: 'Chain',
			content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, officiis?',
			type: 'GOLD',
		},
		//? Silver
		{
			id: 'p11',
			path: s1,
			price: '$109.99',
			name: 'Ornaments',
			content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, officiis?',
			type: 'SILVER',
		},
		{
			id: 'p12',
			path: s2,
			price: '$129.99',
			name: 'Chainline',
			content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, officiis?',
			type: 'SILVER',
		},
		{
			id: 'p13',
			path: s3,
			price: '$74.99',
			name: 'Ring',
			content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, officiis?',
			type: 'SILVER',
		},
		{
			id: 'p14',
			path: s4,
			price: '$89.99',
			name: 'Ring',
			content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, officiis?',
			type: 'SILVER',
		},
		{
			id: 'p15',
			path: s5,
			price: '$159.99',
			name: 'Bracelet',
			content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, officiis?',
			type: 'SILVER',
		},
		{
			id: 'p16',
			path: s6,
			price: '$139.99',
			name: 'Ring',
			content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, officiis?',
			type: 'SILVER',
		},
		{
			id: 'p17',
			path: s7,
			price: 'Indyvidual pricing',
			name: 'Chain',
			content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, officiis?',
			type: 'SILVER',
		},
		{
			id: 'p18',
			path: s8,
			price: '$139.99',
			name: 'Ring',
			content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, officiis?',
			type: 'SILVER',
		},
		{
			id: 'p19',
			path: s9,
			price: '$199.99',
			name: 'Earrings',
			content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, officiis?',
			type: 'SILVER',
		},
		{
			id: 'p20',
			path: s10,
			price: '$249.99',
			name: 'Ring',
			content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, officiis?',
			type: 'SILVER',
		},
		//? Diamonds
		{
			id: 'p21',
			path: d1,
			price: 'Indyvidual pricing',
			name: 'Pink Diamond',
			content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, officiis?',
			type: 'DIAMONDS',
		},
		{
			id: 'p22',
			path: d2,
			price: 'Indyvidual pricing',
			name: 'Oppenheimer',
			content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, officiis?',
			type: 'DIAMONDS',
		},
		{
			id: 'p23',
			path: d3,
			price: 'Indyvidual pricing',
			name: 'White Diamond',
			content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, officiis?',
			type: 'DIAMONDS',
		},
		{
			id: 'p24',
			path: d4,
			price: 'Indyvidual pricing',
			name: 'Red Diamond',
			content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, officiis?',
			type: 'DIAMONDS',
		},
		{
			id: 'p25',
			path: d5,
			price: 'Indyvidual pricing',
			name: 'Pink Diamond',
			content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, officiis?',
			type: 'DIAMONDS',
		},
	]

	const [selectedFilter, setSelectedFilter] = useState('ALL')

	const changeType = e => {
		setSelectedFilter(e.target.value.toUpperCase())
	}

	return (
		<div className='mb-20 py-20'>
			<h2 className='w-[75vw] text-center mx-auto mt-20 text-[50px] uppercase font-thin tracking-wider text-purple-500'>Store</h2>
			<div className='w-[75vw] flex xs:justify-center lg:justify-end items-center mx-auto'>
				<label className='mr-5' htmlFor='products'>
					Filter products
				</label>
				<select onChange={changeType} id='products' name='products'>
					<option value='All'>All</option>
					<option value='Diamonds'>Diamonds</option>
					<option value='Silver'>Silver</option>
					<option value='Gold'>Gold</option>
				</select>
			</div>
			<div className='flex flex-col justify-center items-center w-[75vw] mx-auto mt-5'>
				<div className='flex flex-wrap justify-center'>
					{PRODUCTS_DATA.filter(product => selectedFilter === 'ALL' || product.type === selectedFilter).map(product => (
						<Product
							key={product.id}
							path={product.path}
							price={product.price}
							name={product.name}
							content={product.content}
						/>
					))}
				</div>
			</div>
		</div>
	)
}
