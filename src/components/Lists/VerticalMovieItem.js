import React from 'react';
import {Tag, Typography, Button} from 'antd';
import noImage from '../../assets/images/no-image.jpg'
import imdbIcon from '../../assets/images/IMDB-icon.png'
import { ArrowRightOutlined, HeartOutlined, HeartFilled  } from '@ant-design/icons';

const {Title, Paragraph, Text} = Typography;

const CheckImage = ({img, selectItem}) => {

    if(img === "N/A") {
        return (
            <div className={"movie-item-image"} style={{
                height: 452
            }}
                 onClick={selectItem}
            >
                <img src={`${noImage}`} alt=""/>
            </div>
        )
    }

    return (
        <div className={"movie-item-image"} onClick={selectItem}>
            <img src={`${img}`} alt=""/>
        </div>
    )
};

const VerticalMovieItem = ({imdbRating, poster, Year, TitleType, Type, id, toggleFavorite, selectItem}) => {

    return (
        <div className={"movie-item movie-item-vertical d-flex-item direction-column-item"}>
            <CheckImage img={poster} selectItem={selectItem} />
            <div className={"movie-item-content d-flex-item direction-column-item justify-space-between-item"} style={{
                flex: 1
            }}>
                <div className={"movie-average-item d-flex-item justify-space-between-item"}>
                    <div>
                        <img src={`${imdbIcon}`} alt=""/>
                        <Text strong={true}>
                            {imdbRating}
                        </Text>
                    </div>
                    <div className={"movie-buttons-item"}>
                        <Tag>{Type}</Tag>
                        <Button shape="circle" icon={<HeartOutlined />} onClick={toggleFavorite} />
                    </div>
                </div>

                <div className="d-flex-item direction-column-item">
                    <Text strong={true} className={"text-primary"}>
                        {Year}
                    </Text>
                    <Title level={3}>
                        {TitleType}
                    </Title>
                    <Paragraph>
                        The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to
                        his reluctant son.
                    </Paragraph>
                </div>
            </div>
        </div>
    )
};

export default VerticalMovieItem;
