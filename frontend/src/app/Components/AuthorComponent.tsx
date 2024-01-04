'use client'
import { ReactNode, useState } from "react";
import {Container, Row, Col, Navbar, Button, Form, Nav, NavDropdown} from 'react-bootstrap'
import Image from 'next/image'
import Styles from './Styles/AuthorComponent.module.scss'

const AuthorComponent = (): ReactNode=> {
    const [thumbnailURL, setThumbnailURL] = useState<string>('');
    const [firstname, setFirstName] = useState<string>('MIKA');
    const [lastname, setLastname] = useState<string>('MATIKAINEN');
    const [description, setDescription] = useState<string>('Mika Matikainen is a Design Founder & Advisor, Berlin School of Creative Leadership Executive MBA participant, Zippie advisor, Wolt co-founder, and Nordic Rose stakeholder.  ');


    return (
        <Row className={Styles.MainRow}>

            {/* <hr style={{marginTop: '40px'}}/> */}

            <Col lg={4} md={4} sm={5}>
                <div>
                    <Image
                        src="/thumbnail.png"
                        width={100}
                        height={100}
                        alt="Picture of the author"
					/>	
                </div>
            </Col>

            <Col lg={8} md={8} sm={5}>
                {firstname ? <div><b>{firstname} {lastname}</b> is {description} </div>: <div></div>}
            </Col>

        </Row>
    )
}

export default AuthorComponent;
