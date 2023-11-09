'use client'
import Image from 'next/image'
import {useState, useEffect, useRef} from 'react'
import axios from 'axios'
import {Container, Row, Col, Navbar, Button, Form, Nav, NavDropdown} from 'react-bootstrap'
import MainNavbar from './Components/Navbar'
import Styles from './Styles/Home.module.scss'
import Article from './Components/Article'
import Footer from './Components/Footer'

// axios.defaults.xsrfCookieName = 'csrftoken';
// axios.defaults.xsrfHeaderName = 'X-CSRFToken';
// axios.defaults.withCredentials = true;


export default function Home() {
	return (
		<div>
			<MainNavbar></MainNavbar>
			<Container className={Styles.Container}>
				<Row className={Styles.HomeImageRow}>
					<Image
						src="/NordicHomeImage.png"
						width={500}
						height={500}
						alt="Picture of the author"
					/>	

					<h1>A few words about this blog platform, Ghost, and how this site was made</h1>
					<p>Why Ghost (& Figma) instead of Medium, WordPress or other options?</p>
					<hr className={Styles.hr} />
				</Row>

				<Row className={Styles.ArticleHeader}>
					<h3>All Articles</h3>
				</Row>

				<Row className={Styles.AllArticlesRow}>
					

					<Col className={`${Styles.ArticlesCol}`} lg={6} md={6} sm={12}>
						<Article></Article>
					</Col>
					<Col className={`${Styles.ArticlesCol}`} lg={6} md={6} sm={12}>
						<Article></Article>
					</Col>
					<Col className={`${Styles.ArticlesCol}`} lg={6} md={6} sm={12}>
						<Article></Article>
					</Col>
					<Col className={`${Styles.ArticlesCol}`} lg={6} md={6} sm={12}>
						<Article></Article>
					</Col>
				</Row>
			</Container>
			<Footer></Footer>
		</div>
	)

}
