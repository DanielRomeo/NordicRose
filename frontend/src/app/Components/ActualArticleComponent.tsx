'use client'
import { ReactNode, useState } from "react";
import {Container, Row, Col, Navbar, Button, Form, Nav, NavDropdown} from 'react-bootstrap'
import Image from 'next/image'
import Styles from './Styles/ActualArticleComponent.module.scss'
import { BsFacebook, BsTwitter } from "react-icons/bs";


const AuthorComponent = (): ReactNode=> {
    const [thumbnailURL, setThumbnailURL] = useState<string>('');
    const [firstname, setFirstName] = useState<string>('MIKA');
    const [lastname, setLastname] = useState<string>('MATIKAINEN');
    const [description, setDescription] = useState<string>('Mika Matikainen is a Design Founder & Advisor, Berlin School of Creative Leadership Executive MBA participant, Zippie advisor, Wolt co-founder, and Nordic Rose stakeholder.  ');


    return (
        <Container className={Styles.Container}>

            <hr  className={Styles.hr}/>

            <div className={Styles.ReadDetails}>
                <Row className={Styles.MainRow}>
                    <Col className={Styles.ContentCol} style={{}} lg={7} md={7} sm={12}>
                        <Col style={{}} lg={3} md={3} >
                            <Image
                                src="/thumbnail.png"
                                width={100}
                                height={100}
                                alt="Picture of the author"
                            />	
                        </Col>

                        <Col lg={9} md={9} >
                            <Row>
                                <p><b>MIKA MATIKAINEN</b></p>
                            </Row>
                            <Row>
                                <p>APR 15, 2020 - 4 min read</p>
                            </Row>
                        </Col>
                    </Col>

                    <Col className={Styles.buttonCol} style={{}} lg={5} md={5} sm={12}>
                       
                       
                            <Button className={Styles.Facebookbutton}><BsFacebook size={40}></BsFacebook></Button>
                            <Button className={Styles.Twitterbutton}> <BsTwitter size={40}></BsTwitter> </Button>
                       
                    </Col>
                </Row>
            </div>

            <div className={Styles.Read}>
                <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nulla dui, ultrices ut posuere non, gravida vel nibh. Sed imperdiet sem id massa vehicula rutrum. Fusce semper vel nisl vitae condimentum. Maecenas sed vestibulum orci, at mattis mi. Duis bibendum lacinia tristique. Donec nec nulla vestibulum, sagittis nulla quis, aliquam metus. Phasellus aliquam, lectus facilisis interdum iaculis, erat tellus vestibulum magna, eu finibus turpis elit egestas felis. Suspendisse cursus odio nec erat tincidunt, vitae blandit ipsum ullamcorper. In sed lacus nunc. Mauris varius pretium turpis et ultrices.

                    Maecenas turpis purus, pellentesque non consectetur convallis, viverra in tortor. Suspendisse potenti. Integer tempus est ac mattis congue. Aliquam vel mi id libero imperdiet accumsan. Aenean ut vulputate lectus. Nunc vel augue massa. Nunc ut sagittis lacus. Ut ornare dapibus nisi, mollis fermentum est fermentum at. Sed in volutpat ante. Morbi faucibus arcu molestie purus imperdiet finibus. Morbi efficitur purus eu quam pretium, ut sagittis velit pulvinar. Donec in euismod tellus.

                    Pellentesque posuere nibh auctor, dapibus quam quis, pharetra felis. Aliquam tincidunt vel erat eu efficitur. Cras mattis elit ac scelerisque tincidunt. Maecenas consectetur magna quis nisi tempor mollis. Nunc non consequat nulla. Maecenas nec nunc faucibus, lobortis elit eu, egestas nibh. Integer sed eros sed lectus condimentum volutpat a et justo. Duis efficitur odio dui, iaculis egestas tellus posuere eget. Pellentesque in blandit lacus. Morbi nec euismod magna. Fusce in orci ac nisl semper imperdiet eget sit amet quam. Aenean vel convallis sapien. Aenean ut nunc massa. Donec in nisl tortor. Sed molestie justo sapien, in rutrum elit porta a.

                    Vestibulum in eleifend nisl, non finibus mi. Sed quis porttitor dolor, vel varius tellus. Quisque condimentum vulputate mi ut pretium. Aenean ipsum enim, imperdiet commodo hendrerit ut, varius at orci. Donec nisl felis, aliquam et sapien sed, venenatis posuere erat. Etiam sem risus, hendrerit sed eros sed, pellentesque ornare diam. Integer mollis suscipit purus ac sollicitudin. Duis pulvinar fermentum augue. Suspendisse et mollis risus, id suscipit dui. Etiam in consectetur lacus. Donec ut ligula eu elit dapibus vulputate. Aliquam congue pharetra posuere. Maecenas vel sollicitudin felis. Cras vel mi consequat, tempus dolor nec, molestie risus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Pellentesque facilisis aliquet lorem.  </p>
            </div>
        </Container>
    )
}

export default AuthorComponent;
