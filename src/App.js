import React from 'react'
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom'
import { Navbar, Container, Nav } from 'react-bootstrap'
import Home from './components/Home'
import EnterData from './components/EnterData'
import BrowseData from './components/BrowseData'

function App() {
	return (
		<Router>
			<div>
				<Navbar bg='light' expand='lg'>
					<Container>
						<Navbar.Brand as={Link} to='/'>
							Home
						</Navbar.Brand>
						<Navbar.Toggle aria-controls='navbarNav' />
						<Navbar.Collapse id='navbarNav'>
							<Nav className='ml-auto'>
								<Nav.Link as={Link} to='/enter-data'>
									Enter Data
								</Nav.Link>
								<Nav.Link as={Link} to='/browse-data'>
									Browse Data
								</Nav.Link>
							</Nav>
						</Navbar.Collapse>
					</Container>
				</Navbar>

				<hr />
				<Routes>
					<Route path='/' exact element={<Home />} />
					<Route path='/enter-data' element={<EnterData />} />
					<Route path='/browse-data' element={<BrowseData />} />
				</Routes>
			</div>
		</Router>
	)
}

export default App
