'use client'
import Image from 'next/image'
import {useState, useEffect, useRef} from 'react'
import axios from 'axios'
import {Container, Navbar, Button, Form, Nav, NavDropdown} from 'react-bootstrap'
import MainNavbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import AuthorComponent from '../Components/AuthorComponent'
import Styles from '../Styles/Article.module.scss'
import ReadNext from '../Components/ReadNext'

// axios.defaults.xsrfCookieName = 'csrftoken';
// axios.defaults.xsrfHeaderName = 'X-CSRFToken';
// axios.defaults.withCredentials = true;


export default function Home() {

return (
	<div>
		<MainNavbar></MainNavbar>
			<Container className={Styles.HeaderContainer}>
				<h1>A few words about this blog platform, Ghost, and how this site was made</h1>
				<p>Why Ghost (& Figma) instead of Medium, WordPress or other options?</p>
			</Container>

			<div className={Styles.ImageContainer}>
				<Image
					className={Styles.Image}
					src="/NordicHomeImage.png"
					width={800}
					height={800}
					alt="Picture of the author"
				/>
			</div>
				

			<Container className={Styles.Container}>
				<AuthorComponent></AuthorComponent>
				<hr />
			</Container>
			<ReadNext></ReadNext>
		<Footer></Footer>
	</div>
)

}
