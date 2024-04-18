"use client"
import { useRouter } from 'next/router';
import Image from 'next/image'
import {useState, useEffect, useRef} from 'react'
import axios from 'axios'
import {Container, Navbar, Button, Form, Nav, NavDropdown} from 'react-bootstrap'
import MainNavbar from '../../Components/Navbar'
import Footer from '../../Components/Footer'
import AuthorComponent from '../../Components/AuthorComponent'
import Styles from '../../Styles/Article.module.scss'
import ReadNext from '../../Components/ReadNext'
import ActualArticleComponent from '../../Components/ActualArticleComponent'


// axios.defaults.xsrfCookieName = 'csrftoken';
// axios.defaults.xsrfHeaderName = 'X-CSRFToken';
// axios.defaults.withCredentials = true;


interface PostPageProps {
  params: {
      articleId: string
  }
}

const ArticlePage = ({params}: PostPageProps) => {
  const [postId, setPostId] = useState<string | null>();

  	return(
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
					height={500}
					alt="Picture of the author"
				/>
			</div>

			{/* Actual Article */}
			<ActualArticleComponent></ActualArticleComponent>
				
			<hr />
			{/* <br style={{marginTop: '100px'}}/> */}
			

			<Container className={Styles.Container}>
				<AuthorComponent></AuthorComponent>
				<hr />
			</Container>
			<ReadNext></ReadNext>
		<Footer></Footer>
	</div>
  	)
};



export default ArticlePage;





