'use client'
import { ReactNode, useState } from "react";
import {Container, Row, Col, Navbar, Button, Form, Nav, NavDropdown} from 'react-bootstrap'
import Image from 'next/image'
import Styles from './Styles/ReadNext.module.scss'
import Article from "./Article";
import NewsletterComponent from "./Newsletter";

const ReadNext = (): ReactNode=> {
    

    return (
        <Container className={`${Styles.MainContainer2} fluid`}>
            <Row className={Styles.HeaderRow}>
                <h1>What to read next</h1>
            </Row>

            <Row className={Styles.ContentRow}>
                <Col className={`${Styles.ArticlesCol}`} lg={4} md={4} sm={12}>
                    <Article></Article>
				</Col>
                <Col className={`${Styles.ArticlesCol}`} lg={4} md={4} sm={12}>
                    <Article></Article>
				</Col>
                <Col className={`${Styles.ArticlesCol}`} lg={4} md={4} sm={12}>
                    <Article></Article>
				</Col>
                <Col className={`${Styles.ArticlesCol}`} lg={4} md={4} sm={12}>
                    <Article></Article>
				</Col>
                <Col className={`${Styles.ArticlesCol}`} lg={4} md={4} sm={12}>
                    <Article></Article>
				</Col>
                <Col className={`${Styles.ArticlesCol}`} lg={4} md={4} sm={12}>
                    <Article></Article>
				</Col>
            </Row>

            <Row className={Styles.NewsletterRow}>
                <NewsletterComponent></NewsletterComponent>
            </Row>
        </Container>
    )
}

export default ReadNext;
