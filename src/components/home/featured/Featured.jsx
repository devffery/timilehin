import React from 'react'
import "./featured.css"
import Heading from "../../common/Heading"
import FeaturedCard from "./FeaturedCard"

const Featured = () => {
	return (
		<>
			<section className='featured background'>
				<div className="container">
					<Heading title="Built on Trust and Results" subtitle="Client success stories * Professional accreditations * Transparent and approachable from day one" />
					<FeaturedCard />
					<h4>* - results not guaranteed</h4>
				</div>
			</section>
		</>
		)
}

export default Featured