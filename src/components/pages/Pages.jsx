import React from 'react'
import Header from "../common/header/Header"
import {
	BrowserRouter as Router,
	Route,
	Routes,
	Link
} from "react-router-dom"

import Home from "../home/Home"
import Footer from "../common/footer/Footer"
import About from "../about/About"
import Practices from "../practices/Practices"
import Team from "../team/Team"
import Articles from "../articles/Articles"
import Contact from "../contact/Contact"

const Pages = () => {
	return ( 
	<>
	<Router basename="/timilehin">
		<Header />
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/about" element={<About />} />
			<Route path="/practices" element={<Practices />} />
			<Route path="/team" element={<Team />} />
			<Route path="/articles" element={<Articles />} />
			<Route path="/contact" element={<Contact />} />
		</Routes>

		<Footer />
{/**			<nav>
				<ul>
					<li><Link to "/">Home</Link></li>
					<li><Link to "/about">About</Link></li>
					<li><Link to "/practices">Practices</Link></li>
					<li><Link to "/team">Team</Link></li>
					<li><Link to "/articles">Articles</Link></li>
					<li><Link to "/contact">Contact</Link></li>
				</ul>
			</nav>
*/}

{/**				<Route path="/"><Home /></Route>
				<Route path="/about"><About /></Route>
				<Route path="/practices"><Practices /></Route>
				<Route path="/team"><Team /></Route>
				<Route path="/articles"><Articles /></Route>
				<Route path="/contact"><Contact /></Route>
*/}

	</Router>
	</>
	)
}

export default Pages