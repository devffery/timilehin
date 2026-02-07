import React, { useState } from 'react'
import "./header.css"
import { Link } from 'react-router-dom'
import { nav } from "../../data/Data"


const Header = () => {
	const [navlist, setnavlist] = useState(false)
	return <>
		<header>
			<div className="container flex">
				<div className="logo">
					<img src="./images/logo.png" alt='' />
				</div>
				<div className="nav">
					<ul className={navlist ? "small":'flex'}>
						{nav.map((list,index) =>(
							<li key={index}>
								<Link to={list.path}>{list.text}</Link>
							</li>

							))}
					</ul>
				</div>
				<div id="phn" className="button flex">
					<button className='btn1'>
						<i className='fas fa-phone'></i>Free Consultation
					</button>
				</div>

				<div className="toggle">
					<button onClick={() =>setnavlist(!navlist)}>
						{navlist? <i className='fa fa-times'></i> : <i className='fa fa-bars'></i>}
					</button>
				</div>
			</div>
		</header>
	</>
}

export default Header