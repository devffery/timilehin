import React from 'react'
import "./hero.css"
import Heading from "../../common/Heading"

const Hero = () => {
	return (
		<>
		<section className='hero'>
			<div className='container'>
				<Heading title='Your Trusted Legal Partner' subtitle='Experienced attorneys fighting for the results you deserve. Free consultation today - no risk, no obligation' />
			</div>
		</section>
		</>
		)
}

export default Hero