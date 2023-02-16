import { Card, CardGroup, Col, Row } from "react-bootstrap";
// eslint-disable-next-line no-unused-vars
import ReactStars from "react-rating-stars-component";


function ContentRating({ data }) {
    const ratingChanged = (newRating) => {
        console.log(newRating);
    };
    console.log(data);
    return (

        <Row className="justify-content-center" style={{
            background: '#090958',
            paddingBottom:'1rem'
        }}>
            <div style={{
                borderBottom: '2px solid black',
                width: '100%'
            }}></div>
            <div className="pt-3">
                <p style={{
                    textAlign: "center",
                    fontSize: '24px',
                    fontWeight: 'bold',
                    color: 'white'
                }}>
                    Apa kata mereka?
                </p>
            </div>
            {
                data.map((item, idx) => (
                    <Col key={idx} className='' xs={6} md={3} lg={2} style={{ cursor: "pointer" }}>
                        <CardGroup>
                            <Card>
                                <Card.Img className="d-flex align-items-center" style={{ height: "100px", width: "50%", borderRadius: "100%", margin: "auto", marginTop: "10px" }} variant="top" src={item.image} />
                                <Card.Body>
                                    <div className="d-flex flex-column align-items-center">
                                        <Card.Title className="mt-1 text-center d-flex">{item.name}</Card.Title>
                                        <ReactStars
                                            count={5}
                                            value={5}
                                            onChange={ratingChanged}
                                            size={16}
                                            activeColor="#ffd700"
                                        />
                                    </div>
                                    <Card.Text className="card_conten">{item.comment}</Card.Text>

                                </Card.Body>
                                {/* <Card.Footer>
                                    <p className="" style={{ fontWeight: 'bold' }}><del>{item.del}</del> {item.updatedAt}</p>
                                </Card.Footer> */}
                            </Card>
                        </CardGroup>
                    </Col>
                ))
            }

        </Row>

    )
}

export default ContentRating;