import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import "./style.scss";

function ContentMenu({data}) {
    return (
       
             <Row xs={1} md={3} lg={3} className="g-4" style={{ cursor:"pointer"}}>
           {
                data.map((item,idx) => (
                    <Col key={idx} style={{height:"100%"}}>
                    <Card>
                        <Card.Img style={{height:"150px", width:"100%"}} variant="top" src={item.image} />
                        <Card.Body >
                            <Card.Title className='mt-1'>{item.name}</Card.Title>
                            <Card.Text className='card__content'>
                               {item.comment}
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                ))
               } 
        
        </Row>
     
       
    );
}

export default ContentMenu;