import React, {useEffect, useState} from 'react';
import {Breadcrumb, Row, Col, Typography} from 'antd';
import {Link, useHistory} from 'react-router-dom';
import VerticalMovieItem from "../../components/Lists/VerticalMovieItem";
import {connect} from 'react-redux';
import {addFavorite, removeFavorite, selectMovie, fetchFavoriteList} from "../../appRedux/actions/list/list";

const {Title} = Typography;

const ResultTitle = () => {

    return (
        <div className="container">
            <Row>
                <Col span={24}>
                    <div className={"d-flex-item align-center-item justify-space-between-item"} style={{
                        marginBottom: 50
                    }}>
                        <Title level={2}> Favorites</Title>
                    </div>
                </Col>
            </Row>
        </div>
    )
};

const Favorites = (props) => {
    let history = useHistory();
    const {addFavorite, selectMovie, loading, favoriteStore, fetchFavoriteList} = props;

    useEffect(() => {
        console.log(favoriteStore);

        fetchFavoriteList();
    }, [fetchFavoriteList]);

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
                                <Link to={"/favorites"}>Favorites</Link>
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
                            <Link to={"/favorites"}>Favorites</Link>
                        </Breadcrumb.Item>
                    </Breadcrumb>
                </div>
            </section>
            <section className="section-item section-list-item" style={{
                paddingTop: 50
            }}>
                <ResultTitle />
                <div className="container">
                    <Row>
                        {favoriteStore && favoriteStore.map((movie, index) => {
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
        favoriteStore: state.list.favoriteStore,
        selectItem: state.list.selectItem,
        loading: state.list.loading,
        error: state.list.error,
    }
};

export default connect(mapStateToProps, {addFavorite, removeFavorite, selectMovie, fetchFavoriteList})(Favorites);
