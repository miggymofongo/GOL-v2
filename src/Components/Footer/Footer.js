import { Container, Row, Col, Stack, Image, Nav, NavLink } from "react-bootstrap"

function Footer(){

    return(

        <footer>

<Container fluid>
    
    <Row className="bg-primary text-white">
         <Col><Stack><Image 
         src="https://migs.uber.space/img/WEPA.png" width={100} height={100} />
         <h2>Miguel Almodovar</h2></Stack></Col>
         <Col>
         <Nav className="flex-column fs-5">
            Useful Links
            <NavLink href="https://library.miguelalmodo.com" className="text-dark">Bookshelf</NavLink>
            <NavLink href="https://nostree.me/npub1ajt9gp0prf4xrp4j07j9rghlcyukahncs0fw5ywr977jccued9nqrcc0cs" className="text-dark">Tree</NavLink>
            <NavLink href="" className="">Main Page</NavLink>
            </Nav></Col>
         <Col>
         <h4>Contact me!</h4>
         <a className="text-dark" href="mailto:contact@miguelalmodo.com"><p>Email me at 
            contact@miguelalmodo.com</p></a>
         </Col>


    </Row>
</Container>

        </footer>
    )
}

export default Footer