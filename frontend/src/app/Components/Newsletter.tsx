'use client'
import { ReactNode, useState } from "react";
import {Container, Row, Col, Navbar, Button, Form, Nav, NavDropdown} from 'react-bootstrap'
import Styles from './Styles/Newsletter.module.scss'

const NewsletterComponent = (): ReactNode=> {
    
    return (
        <div className={Styles.MainDiv}>
            <h1>
                Sign up for the newsletter
            </h1>
            <p>If you want relevant updates occasionally, sign up for the private newsletter. Your email is never shared. </p>

            <div className={`${Styles.inputGroup} input-group mb-3`}>
                <input type="text" className={`${Styles.input} form-control`} placeholder="Enter your email..." aria-label="Recipient's username" aria-describedby="basic-addon2"/>
                <div className={` input-group-append`}>
                    <Button className={`${Styles.button}`} id="basic-addon2"><b>SIGN UP</b></Button>
                </div>
            </div>
        </div>
    )
}

export default NewsletterComponent;
