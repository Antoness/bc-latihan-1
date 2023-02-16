import { Card, CardGroup, Col, Row } from "react-bootstrap";
import './style.scss';

function ContentForYou({data}) {
    return (
      
            <Row style={{ cursor:"pointer"}}>
                {
                    data.map((item, idx) => (
                        <Col key={idx}className='' xs={6} md={3} lg={2}>
                        <CardGroup>
                            <Card>
                                <Card.Img style={{height:"100px", width:"100%"}} variant="top" src={item.image} />
                                <Card.Body>
                                    <Card.Title className="mt-1">{item.title}</Card.Title>
                                    <Card.Text className="card_conten">{item.content}</Card.Text>
                                    <a href="url" style={{fontSize:"12px"}}>See more</a>
                                </Card.Body>
                                <Card.Footer>
                                    <p className="" style={{fontWeight:'bold'}}><del>{item.del}</del> {item.updatedAt}</p>
                            </Card.Footer>
                            </Card>
                        </CardGroup>
                    </Col>
                    ))
                }
              
            </Row>
       
    )
}

export default ContentForYou;