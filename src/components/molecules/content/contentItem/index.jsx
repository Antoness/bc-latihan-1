import { Col, Row } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import './style.scss';

function GroupExample({ data }) {
  return (
      <Row style={{ cursor:"pointer"}} >
        {
          data.map((item, idx) => (
            <Col key={idx} className='' xs={6} md={3} lg={2}>
              <CardGroup>
                <Card>
                  <Card.Img style={{height:"100px", width:"100%"}} variant="top" src={item.image} />
                  <Card.Body>
                    <Card.Title className='mt-1'>{item.title}</Card.Title>
                    <Card.Text className='card__content'>
                      {item.content}
                    </Card.Text>
                    <a href='url' style={{fontSize:"12px"}}>See More</a>
                     
                  </Card.Body>
                  <Card.Footer>
                    <p className="" style={{fontWeight:'bold'}}>{item.updatedAt}</p>
                  </Card.Footer>
                </Card>
               

              </CardGroup>
            </Col>

          ))
        }
      </Row>
    
  
  );
}

export default GroupExample;