import React from 'react'
import Heading from "../../common/Heading"
import "./style.css"
import { practices } from "../../data/Data"
import { Link } from "react-router-dom";


const Practices = () => {
	return (
		<>
			<section className="practices padding">
				<div className="container">
					<Heading title='Our Core Practice Areas' subtitle='Strategic legal solutions in corporate law, litigation, family & estate, and more - your trusted partner in Nigeria'/> 
					<div className="content grid3 mtop">
						{practices.map((items,index) =>{
							return (
								<div className="box" key={index}>
									<img src={items.cover} alt='' />
									<Link to={items.link} className='overlay overlay-link'>
										<h5>{items.name}</h5>
										<p>
											<label>{items.Desc}</label>
											<label>{items.CasesHandled}</label>
											<label>{items.Services}</label>
										</p>
									</Link>
								</div>
								);
						})}
					</div>
				</div>
			</section>
		</>
		)
}

export default Practices