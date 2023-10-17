import path from '../../assets/Screenshot_3.png'
import img from '../../assets/silver.jpg'
import pic from '../../assets/gold.jpeg'

export const Resources = () => {
	return (
		<>
			<div className='flex flex-col items-center w-screen text-center  xs:mb-40 lg:mt-10 lg:mb-0'>
				<h1 className='font-bold tracking-wide'>Diamonds</h1>
				<div>
					<img className='mx-auto' src={path} alt='Diamond' />
					<p className='mt-0 xs:max-w-[300px] lg:max-w-[500px] px-2 italic'>
						Diamond is a solid form of the element carbon with its atoms arranged in a crystal structure called diamond
						cubic. Another solid form of carbon known as graphite is the chemically stable form of carbon at room
						temperature and pressure, but diamond is metastable and converts to it at a negligible rate under those
						conditions. Diamond has the highest hardness and thermal conductivity of any natural material, properties
						that are used in major industrial applications such as cutting and polishing tools. They are also the reason
						that diamond anvil cells can subject materials to pressures found deep in the Earth. Because the arrangement
						of atoms in diamond is extremely rigid, few types of impurity can contaminate it (two exceptions are boron
						and nitrogen). Small numbers of defects or impurities (about one per million of lattice atoms) color diamond
						blue (boron), yellow (nitrogen), brown (defects), green (radiation exposure), purple, pink, orange, or red.
						Diamond also has a very high refractive index and a relatively high optical dispersion.
					</p>
				</div>
				<div className='flex flex-col items-center w-screen text-center xs:mt-32 lg:mt-10 lg:mb-0'>
					<h1 className='font-bold tracking-wide'>Silver</h1>
					<div>
						<img
							className='xs:max-w-[250px] w-[250px] h-[250px] mx-auto lg:min-w-[500px] lg:w-[500px] lg:h-[400px] rounded-2xl'
							src={img}
							alt='Silver'
						/>
						<p className='mt-5 xs:max-w-[300px] lg:max-w-[500px] px-2 italic'>
							Silver is a chemical element with the symbol Ag (from Latin argentum 'silver', derived from the
							Proto-Indo-European h₂erǵ 'shiny, white') and atomic number 47. A soft, white, lustrous transition metal,
							it exhibits the highest electrical conductivity, thermal conductivity, and reflectivity of any metal.The
							metal is found in the Earth's crust in the pure, free elemental form ("native silver"), as an alloy with
							gold and other metals, and in minerals such as argentite and chlorargyrite. Most silver is produced as a
							byproduct of copper, gold, lead, and zinc refining. Silver has long been valued as a precious metal.
							Silver metal is used in many bullion coins, sometimes alongside gold: while it is more abundant than gold,
							it is much less abundant as a native metal. Its purity is typically measured on a per-mille basis; a
							94%-pure alloy is described as "0.940 fine". As one of the seven metals of antiquity, silver has had an
							enduring role in most human cultures.
						</p>
					</div>
				</div>
			</div>
			<div className='flex flex-col items-center w-screen text-center lg:mt-10 lg:mb-0'>
				<h1 className='font-bold tracking-wide'>Gold</h1>
				<div>
					<img
						className='xs:max-w-[250px] w-[250px] h-[250px] mx-auto lg:min-w-[500px] lg:w-[500px] lg:h-[400px] rounded-2xl'
						src={pic}
						alt='Silver'
					/>
					<p className='mt-5 xs:max-w-[300px] lg:max-w-[500px] px-2 italic'>
						Gold is a chemical element with the symbol Au (from Latin aurum 'gold') and atomic number 79. It is a
						bright, slightly orange-yellow, dense, soft, malleable, and ductile metal in pure form. Chemically, gold is
						a transition metal and a group 11 element. It is one of the least reactive chemical elements and is solid
						under standard conditions. Gold often occurs in free elemental (native state), as nuggets or grains, in
						rocks, veins, and alluvial deposits. It occurs in a solid solution series with the native element silver (as
						in electrum), naturally alloyed with other metals like copper and palladium, and mineral inclusions such as
						within pyrite. Less commonly, it occurs in minerals as gold compounds, often with tellurium (gold
						tellurides). Gold is resistant to most acids, though it does dissolve in aqua regia (a mixture of nitric
						acid and hydrochloric acid), forming a soluble tetrachloroaurate anion. Gold is insoluble in nitric acid
						alone, which dissolves silver and base metals, a property long used to refine gold and confirm the presence
						of gold in metallic substances, giving rise to the term 'acid test'. Gold dissolves in alkaline solutions of
						cyanide, which are used in mining and electroplating. Gold also dissolves in mercury, forming amalgam
						alloys, and as the gold acts simply as a solute, this is not a chemical reaction.
					</p>
				</div>
			</div>
		</>
	)
}
