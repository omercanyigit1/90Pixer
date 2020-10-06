import React, {useEffect, useState} from 'react';
import {Breadcrumb, Row, Col, Typography} from 'antd';
import {Link, useHistory} from 'react-router-dom';
import InlineForm from "../../components/Forms/InlineForm";
import VerticalMovieItem from "../../components/Lists/VerticalMovieItem";
import {connect} from 'react-redux';
import {addFavorite, removeFavorite, selectMovie} from "../../appRedux/actions/list/list";

const {Title} = Typography;

const ResultTitle = ({title, totalResults}) => {

    if (title === '') {
        return (
            <div className="container">
                <Row>
                    <Col span={24}>
                        <div className={"d-flex-item align-center-item justify-space-between-item"}>
                            <Title level={3}>You Can Search Your Movie...</Title>
                        </div>
                    </Col>
                </Row>
            </div>
        )
    }

    return (
        <div className="container">
            <Row>
                <Col span={24}>
                    <div className={"d-flex-item align-center-item justify-space-between-item"}>
                        <Title level={3}>{totalResults} Movie found results for: <span className={"text-primary"}>{title}</span> </Title>
                    </div>
                </Col>
            </Row>
        </div>
    )
};

const Lists = (props) => {
    let history = useHistory();
    const {addFavorite, selectMovie, lists, searchTitle, loading, error, totalResults, favorites} = props;

    function toggleFavorite(item) {
        addFavorite(item);
    }

    function selectItem(id) {
        selectMovie(id);
        history.push(`/movie/${id}`);
    }

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
        <div className="site-layout-content">
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
            <section className="section-item section-form-item">
                <div className="container">
                    <Row>
                        <Col span={24}>
                            <InlineForm/>
                        </Col>
                    </Row>
                </div>
            </section>
            <section className="section-item section-list-item">
                <ResultTitle title={searchTitle} totalResults={totalResults}/>
                <div className="container">
                    <Row>
                        {lists && lists.map((movie, index) => {
                            return (
                                <Col span={8} key={index}>
                                    <VerticalMovieItem item={movie}
                                                       imdbRating={movie.imdbRating}
                                                       poster={movie.Poster}
                                                       TitleType={movie.Title}
                                                       Year={movie.Year}
                                                       Type={movie.Type}
                                                       id={movie.imdbID}
                                                       toggleFavorite={() => {
                                                           toggleFavorite(movie);
                                                       }}
                                                       selectItem={() => {
                                                           selectItem(movie.imdbID)
                                                       }}
                                    />
                                </Col>
                            )
                        })}
                    </Row>
                </div>
            </section>
        </div>
    )
};

const mapStateToProps = (state) => {

    return {
        lists: state.list.lists,
        favorites: state.list.favorites,
        totalResults: state.list.totalResults,
        selectItem: state.list.selectItem,
        searchTitle: state.list.searchTitle,
        loading: state.list.loading,
        error: state.list.error,
    }
};

export default connect(mapStateToProps, {addFavorite, removeFavorite, selectMovie})(Lists);
