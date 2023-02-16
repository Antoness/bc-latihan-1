import React from "react";
import { Header, Footer, Contents, ButtomGap } from "../../components";
import "./main.scss";

import Dummy from '../../dummy/dummy.json'
import { ContentMenu, ContentRating } from "../../components/molecules/content";
import { Container } from "react-bootstrap";


const MainApp = () => {

    return (
        <div className="main">
            <Header />
            <div className="container">
                <Contents.UncontrolledExample images={Dummy.landing.banner} />

            </div>
            <Container>
                <div className="pt-3" style={{ paddingTop: "10px" }}>
                    <ContentMenu data={Dummy.landing.fyp}/>
                </div>
            </Container>

            <div className="mx-auto mt-3">
                <ButtomGap />
            </div>
            <Container>
                <div className="px-2 mt-3 mt-5 gap-1">
                    <div className="d-flex align-items-center">
                        <h2 style={{ fontSize: "16px", marginRight: "10px", fontWeight: 700 }}>Recomend</h2>
                        <h2 style={{ fontSize: "14px", display: "flex", color: "green" }}>Lihat Semua</h2>
                    </div>
                    <Contents.GroupExample data={Dummy.landing.cardItems} />
                </div>
                <div className="px-2 mt-5 mb-3">
                    <div className="d-flex align-items-center">
                        <h2 style={{ fontSize: "16px", marginRight: "10px", fontWeight: 700 }}>Discount</h2>
                        <h2 style={{ fontSize: "14px", display: "flex", color: "green" }}>Lihat Semua</h2>
                    </div>

                    <Contents.ContentForYou data={Dummy.landing.forYou} />
                </div>
            </Container>
            {/* <Container> */}
            <div className="mx-auto mt-3 ">
                <ContentRating data={Dummy.landing.rating} />
            </div>
            {/* </Container> */}

            <div className="mt-2">
                <Footer />
            </div>
        </div>

    )
}

export default MainApp;