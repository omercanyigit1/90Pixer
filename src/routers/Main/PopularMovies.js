import React from 'react';
import {Col, Row, Typography} from "antd";
import {Link} from 'react-router-dom';
import { ArrowRightOutlined } from '@ant-design/icons';
import HorizontalMovieItem from '../../components/Lists/HorizontalMovieItem';

const {Title} = Typography;

const PopularMovies = () => {
    return (
        <section className={"section-item section-popular-item"}>
            <div className={"popular-item-header"}>
                <div className="container">
                    <Row>
                        <Col span={24}>
                            <div className={"d-flex-item align-center-item justify-space-between-item"}>
                                <Title level={3}>Popular Movies</Title>
                                <Link to={"/view-more"} className={"text-primary"}>
                                    View more <ArrowRightOutlined />
                                </Link>
                            </div>
                        </Col>
                    </Row>
                </div>
            </div>
            <div className={"popular-item-content"}>
                <div className="container-fluid">
                    <Row>
                        <Col span={12}>
                            <HorizontalMovieItem />
                        </Col>
                        <Col span={12}>
                            <HorizontalMovieItem />
                        </Col>
                    </Row>
                </div>
            </div>
        </section>
    )
};

export default PopularMovies;
