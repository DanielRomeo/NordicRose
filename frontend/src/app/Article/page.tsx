'use client'
import Image from 'next/image'
import {useState, useEffect, useRef} from 'react'
import axios from 'axios'
import {Container, Navbar, Button, Form, Nav, NavDropdown} from 'react-bootstrap'
import MainNavbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import AuthorComponent from '../Components/AuthorComponent'
import Styles from '../Styles/Article.module.scss'

// axios.defaults.xsrfCookieName = 'csrftoken';
// axios.defaults.xsrfHeaderName = 'X-CSRFToken';
// axios.defaults.withCredentials = true;


export default function Home() {

return (
	<div>
		<MainNavbar></MainNavbar>
			<Container className={Styles.Container}>
				<AuthorComponent></AuthorComponent>
			</Container>
		<Footer></Footer>
	</div>
)

}
