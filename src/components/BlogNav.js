// BlogNav.js

import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import { Navbar, Nav, Form, FormControl } from 'react-bootstrap';

const BlogNav = () => {
	return (
		<div>
			<Navbar style={{
				backgroundColor:"purple"
			}}>
				<img
			src='https://cdni.iconscout.com/illustration/premium/thumb/coder-3462295-2895977.png'
			height='100'
			alt=''
			loading='lazy'
			/>
				<Navbar.Brand href="#home" style={{color:"white", marginLeft:"10px"}}>CodeWithFun</Navbar.Brand>
				<Navbar.Toggle />
				<Navbar.Collapse id="basic-navbar-nav" className="d-flex justify-content-end">
					<Nav>
						<Nav.Link href="#home" style={{color:"white"}}>
							Java
						</Nav.Link>
						<Nav.Link href="#about" style={{color:"white"}}>
							DSA
						</Nav.Link>
						<Nav.Link href="#services" style={{color:"white"}}>
							Web Dev
						</Nav.Link>
						<Nav.Link href="#contact" style={{color:"white"}}>
							Data Science
						</Nav.Link>
                        <Nav.Link href="#contact" style={{color:"white"}}>
							A.I./M.L.
						</Nav.Link>
                        <Nav.Link href="#contact" style={{color:"white"}}>
							Cyber Security
						</Nav.Link>
                        <Nav.Link href="#contact" style={{color:"white"}}>
						     Cloud Computing
						</Nav.Link>
					</Nav>
					<Form inline>
						<FormControl type="text" placeholder="Search" className="ml-auto" />
					</Form>
				</Navbar.Collapse>
			</Navbar>
		</div>
	)
}

export default BlogNav;
