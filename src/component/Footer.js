import '../component/Footer.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Footer() {

    return(
        <>
            {/* <div className="footer_center">
                <div className='footer'>
                    Hik'UP
                    <img style={{witdh:"120px", height:"120px"}} src='/proto_logoV3.png' alt='mickael'/>
                </div>
                <div className='footer'>
                    Info Legal
                </div>
                <div className='footer'>
                    Aide
                </div>
                <div className='footer'>
                    Suivez-nous
                </div>
            </div> */}


            <div className="footer_center">
        {/*
            <Container>
                <Row>
                    <Col className='title_footer'>Hik'Up</Col>
                    <Col className='title_footer'>Info Légal</Col>
                    <Col className='title_footer'>Aide</Col>
                    <Col className='title_footer'>Suivez-nous</Col>
                </Row>
                <Row>
                    <Col className='footer_center_image'><img  className='footer_image' src='/proto_logoV3.png' alt='mickael'/></Col>
                    <Col className='footer_center_image'>Adrien Moreau</Col>
                    <Col className='footer_center_image'>Alexandre Berthomier</Col>
                    <Col className='footer_center_image'>Quentin Di Meo</Col>
                </Row>
                <Row>
                    <Col className='footer_center_image'>Mickael Ponapin</Col>
                    <Col className='footer_center_image'>Adrien Moreau</Col>
                    <Col className='footer_center_image'>Alexandre Berthomier</Col>
                    <Col className='footer_center_image'>Quentin Di Meo</Col>
                </Row>
                <Row>
                    <Col className='footer_center_image'>Mickael Ponapin</Col>
                    <Col className='footer_center_image'>Adrien Moreau</Col>
                    <Col className='footer_center_image'>Alexandre Berthomier</Col>
                    <Col className='footer_center_image'>Quentin Di Meo</Col>
                </Row>
            </Container>
        */}


            <Container>
                <Row>
                    <Col md={3}>
                        <Row>
                            <Col className='title_footer'>Hik'Up</Col>
                        </Row>
                        <Row>
                            <Col className='footer_center_image'><img  className='footer_image' src='/proto_logoV3.png' alt='mickael'/></Col>
                        </Row>
                    </Col>
                    <Col md={6}>
                        <Row>
                            <Col className='title_footer'>Info Légal</Col>
                            <Col className='title_footer'>Aide</Col>
                        </Row>
                        <Row>
                            <Col className='footer_center_image'>A Propos</Col>
                            <Col className='footer_center_image'>FAQ</Col>
                        </Row>
                        <Row>
                            <Col className='footer_center_image'>Termes et conditions</Col>
                            <Col className='footer_center_image'>Mentions légales</Col>
                        </Row>
                        <Row>
                            <Col className='footer_center_image'>Politique de confidentialité</Col>
                            <Col className='footer_center_image'>Contactez-Nous</Col>
                        </Row>
                    </Col>
                    <Col md={3}>
                        <Row>
                            <Col className='title_footer'>Suivez-nous</Col>
                        </Row>
                        <Row>
                            <a href="mailto:hikupapp@gmail.com"><Col className='footer_center_image'>hikupapp@gmail.com</Col></a>
                        </Row>
                        <Row>
                            <Col className='footer_center_image'>
                                <a href="https://facebook.com" target="_blank"><img className='footer_logo' src='https://cdn.pixabay.com/photo/2015/05/17/10/51/facebook-770688_640.png' alt='logo facebook'/></a>
                                <a href="https://instagram.com" target="_blank"><img className='footer_logo' src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/2048px-Instagram_icon.png' alt='logo instagram'/></a>
                                <a href="https://linkedin.com" target="_blank"><img className='footer_logo' src='https://cdn-icons-png.flaticon.com/512/174/174857.png' alt='logo linkedin'/></a>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
            <div className='copyright_footer'>Copyright @2022 | Designed by Hik'Up</div>


            {/* <Container>
                <Container xs md lg={3}>
                <Row>
                    <Col className='title_footer'>Hik'Up</Col>

                </Row>
                <Row>
                    <Col className='footer_center_image'><img  className='footer_image' src='/proto_logoV3.png' alt='mickael'/></Col>
                </Row>
                </Container>
                <Container  xs md lg={9}>
<Row>
<Col>AAAAA</Col>
</Row>
                </Container>
            </Container> */}
            </div>
        </>
    )
}

export default Footer;