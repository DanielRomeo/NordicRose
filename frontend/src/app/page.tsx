'use client'
import Image from 'next/image'
import Link from 'next/link'
import {useState, useEffect, useRef} from 'react'
import axios from 'axios'
import {Container, Row, Col, Navbar, Button, Form, Nav, NavDropdown} from 'react-bootstrap'
import MainNavbar from './Components/Navbar'
import Styles from './Styles/Home.module.scss'
import Article from './Components/Article'
import Footer from './Components/Footer'

// Backend connectors:
axios.defaults.xsrfCookieName = 'csrftoken';
axios.defaults.xsrfHeaderName = 'X-CSRFToken';
axios.defaults.withCredentials = true;


// //
// export async function getStaticProps() {
// 	const db = await myDB.connect({
// 	  host: process.env.DB_HOST,
// 	  username: process.env.DB_USER,
// 	  password: process.env.DB_PASS,
// 	})
// 	// ...
//   }

// export const getServerSideProps  = ()=>{
// 	console.log(process.env.NODE_ENV);

// 	return{
// 		props:{
// 			hello: 'hello',
// 		},
// 	}
// }

export default function Home() {

	const [articles, setArticles] = useState<[]>([]);

	// use effect:
	useEffect(()=>{
		axios.get(`${process.env.NEXT_PUBLIC_SERVER}/getblogs`)
		.then((response: any)=>{
			console.log(response.data);
			setArticles(response.data);
		}).catch((err: any)=>{
			console.log(err)
		})
	}, []);

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
					
					{
						articles !== null ? articles.map((article: any)=>(
							
							<Col  key={article.id} className={`${Styles.ArticlesCol}`} lg={6} md={6} sm={12}>
								<Link href={`/Article/1`}>
								<Article   blogImage={article.image} blogTitle={article.title}></Article>
								</Link>
								
							</Col>
						))
						: (
							<div>
								No blog posts as of yet! STAY TUNED!
							</div>
						)
					}

					
				</Row>
			</Container>
			<Footer></Footer>
		</div>
	)

}
