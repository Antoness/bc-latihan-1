import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
// import {ImgNext, ImgReact, ImgVue} from '../../../../assets'
import './styles.scss'


function UncontrolledExample({ images }) {
    const [active, setActive] = useState(0)
    return (
        <Carousel activeIndex={active} onSelect={(e) => setActive(e)} className="carousel">
            {
                images.map((banner, idx) => (
                    <Carousel.Item key={idx}>
                        <img
                            className="d-block w-100"
                            src={banner}
                            alt="First slide"
                        />
                        {/* <Carousel.Caption>
                                <h3>First slide label</h3>
                                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                            </Carousel.Caption> */}
                    </Carousel.Item>
                ))
            }

        </Carousel>
    );
}

export default UncontrolledExample;