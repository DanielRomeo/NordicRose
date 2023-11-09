
import Styles from '../Styles/Footer.module.scss'
import {Container, Row, Col, Navbar, Button, Form, Nav, NavDropdown} from 'react-bootstrap'


const Footer = () => {
  return (
    <div className={`${Styles.Footer} `}>
      
        <Container className={`${Styles.Carousel} fluid`}>
            <div className={Styles.TextCarousel}>
                <p>Product Design</p>
                <p><b>Remote Work</b></p>
                <p>UX Design</p>
                <p><b>Distributed Teams</b></p>
                <p>Creativity</p>
                <p><b>Strategy</b></p>
                <p>Suspense</p>
                <p><b>Growth</b></p>
            </div>
            
        </Container>

        <Container className={Styles.MainContainer}>
            <h1>Nordic Rose</h1>
            <Row className={Styles.LoremRow}>
                <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Similique, autem dignissimos? Quidem distinctio repellat inventore dolores.
                </p>
            </Row>
           

            <div className={Styles.LinkRow}>
                <p>Twitter</p>
                <p>LinkedIn</p>
                <p>RSS</p> 
            </div>
            
            <Row className={Styles.RightsRow}>
                <div>
                    <p>© 2012–2020 Nordic Rose Co.</p>
                    <p>All rights reserved.</p>
                </div>
            </Row>
            
        </Container>
    </div>
  );
}

export default Footer;