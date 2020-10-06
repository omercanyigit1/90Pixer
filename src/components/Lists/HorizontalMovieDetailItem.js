import React from 'react';
import {Tag, Typography, Button} from 'antd';
import itemPhoto from '../../assets/images/item-photo.png'
import imdbIcon from '../../assets/images/IMDB-icon.png'
import { ArrowRightOutlined, HeartOutlined, HeartFilled  } from '@ant-design/icons';
import noImage from "../../assets/images/no-image.jpg";

const {Title, Paragraph, Text} = Typography;

const CheckImage = ({img}) => {

    if(img === "N/A") {
        return (
            <div className={"movie-item-image"} style={{
                height: 452
            }}>
                <img src={`${noImage}`} alt=""/>
            </div>
        )
    }

    return (
        <div className={"movie-item-image"}>
            <img src={`${img}`} alt=""/>
        </div>
    )
};

const HorizontalMovieDetailItem = ({image, rating, year, name, tags, desc}) => {
    let tagsItems = tags.split(" ");

    return (
        <div className={"movie-item movie-item-horizontal d-flex-item"}>

            <CheckImage img={image} />

            <div className={"movie-item-content d-flex-item direction-column-item justify-space-between-item"} style={{
                flex: 1
            }}>
                <div className={"movie-average-item d-flex-item justify-space-between-item"}>
                    <div>
                        <img src={`${imdbIcon}`} alt=""/>
                        <Text strong={true}>
                            {rating}
                        </Text>
                    </div>
                    <div className={"movie-tag-item"}>
                        <Button className={"btn-primary text-white"}>
                            <HeartFilled />
                            Add to favorites
                        </Button>
                    </div>
                </div>

                <div className="d-flex-item direction-column-item">
                    <Text strong={true} className={"text-primary"}>
                        {year}
                    </Text>
                    <Title level={3}>
                        {name}
                    </Title>
                    <Paragraph>
                        {desc}
                    </Paragraph>
                </div>

                <div className="d-flex-item direction-row-item align-center-item">
                    {tagsItems && tagsItems.map((item) => {
                        return (
                            <Tag>{item}</Tag>
                        )
                    })}
                </div>
            </div>
        </div>
    )
};

export default HorizontalMovieDetailItem;
