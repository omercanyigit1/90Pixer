import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {addFavorite, removeFavorite, selectMovie} from "../../appRedux/actions/list/list";
import {Breadcrumb, Col, Row} from "antd";
import {Link} from "react-router-dom";
import HorizontalMovieDetailItem from "../../components/Lists/HorizontalMovieDetailItem";

const Details = (props) => {
    const {selectItem, loading, error} = props;

    if (loading) {
        return (
            <div className={"site-layout-content"}>
                <section className={"section-item section-breadcrumb-item"}>
                    <div className="container">
                        <Breadcrumb>
                            <Breadcrumb.Item className={"text-primary"}>
                                <Link to={"/"} className={"text-primary"}>
                                    Home
                                </Link>
                            </Breadcrumb.Item>
                            <Breadcrumb.Item>
                                <Link to={"/list"}>Search Results</Link>
                            </Breadcrumb.Item>
                        </Breadcrumb>
                    </div>
                </section>
                <div className="container">
                    <Row>
                        <Col span={24}>
                            <p>Loading...</p>
                        </Col>
                    </Row>
                </div>
            </div>
        )
    }

    return (
        <div className="site-layout-content" style={{
            paddingBottom: 300
        }}>
            <section className={"section-item section-breadcrumb-item"}>
                <div className="container">
                    <Breadcrumb>
                        <Breadcrumb.Item className={"text-primary"}>
                            <Link to={"/"} className={"text-primary"}>
                                Home
                            </Link>
                        </Breadcrumb.Item>
                        <Breadcrumb.Item>
                            <Link to={"/list"}>{selectItem.Title}</Link>
                        </Breadcrumb.Item>
                    </Breadcrumb>
                </div>
            </section>
            <section className={"section-item section-popular-item"}>
                <div className={"popular-item-content"}>
                    <div className="container">
                        <Row>
                            <Col span={24}>
                                <HorizontalMovieDetailItem
                                    desc={selectItem.Plot}
                                    image={selectItem.Poster}
                                    name={selectItem.Title}
                                    rating={selectItem.imdbRating}
                                    tags={selectItem.Genre}
                                    year={selectItem.Year}
                                />
                            </Col>
                        </Row>
                    </div>
                </div>
            </section>
        </div>
    )
};

const mapStateToProps = (state) => {

    return {
        selectItem: state.list.selectItem,
        loading: state.list.loading,
        error: state.list.error,
    }
};

export default connect(mapStateToProps, {addFavorite, removeFavorite, selectMovie})(Details);

