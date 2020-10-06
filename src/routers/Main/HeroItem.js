import React from 'react';
import {Col, Row, Typography} from "antd";
import heroBg from "../../assets/images/hero-bg.png";
import InlineForm from "../../components/Forms/InlineForm";

const {Title, Paragraph} = Typography;

const HeroItem = () => {
    return (
        <section className={"section-item section-hero-item"} style={{backgroundImage: `url(${heroBg})`}}>
            <div className="container">
                <Row>
                    <Col xs={24} sm={24} md={12} xl={12}>
                        <div className="hero-el">
                            <Title level={1} className={"text-white title-large"}>
                                Welcome to <br/>
                                <b>MovieUp</b>
                            </Title>
                            <Paragraph className={"text-white"}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod <br/> tempor
                                incididunt ut labore et dolore magna aliqua. Ut enim ad minim <br/> veniam, quis nostrud
                                exercitation ullamco laboris
                            </Paragraph>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col span={24}>
                        <InlineForm />
                    </Col>
                </Row>
            </div>
        </section>
    )
};

export default HeroItem;
