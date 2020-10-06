import React from 'react';
import {Tag, Typography, Button} from 'antd';
import itemPhoto from '../../assets/images/item-photo.png'
import imdbIcon from '../../assets/images/IMDB-icon.png'
import { ArrowRightOutlined, HeartOutlined, HeartFilled  } from '@ant-design/icons';

const {Title, Paragraph, Text} = Typography;

const HorizontalMovieItem = () => {
    return (
        <div className={"movie-item movie-item-horizontal d-flex-item"}>

            <div className={"movie-item-image"}>
                <img src={`${itemPhoto}`} alt=""/>
            </div>

            <div className={"movie-item-content d-flex-item direction-column-item justify-space-between-item"} style={{
                flex: 1
            }}>
                <div className={"movie-average-item d-flex-item justify-space-between-item"}>
                    <div>
                        <img src={`${imdbIcon}`} alt=""/>
                        <Text strong={true}>
                            8.8
                        </Text>
                    </div>
                    <div className={"movie-tag-item"}>
                        <Tag>Action</Tag>
                        <Tag>Biography</Tag>
                    </div>
                </div>

                <div className="d-flex-item direction-column-item">
                    <Text strong={true} className={"text-primary"}>
                        2019
                    </Text>
                    <Title level={3}>
                        The Godfather
                    </Title>
                    <Paragraph>
                        The aging patriarch of an organized crime dynasty <br/> transfers control of his clandestine empire to
                        his reluctant <br/> son.
                    </Paragraph>
                </div>

                <div className="d-flex-item direction-row-item align-center-item">
                    <Button className={"btn-primary text-white"}>
                        <HeartFilled />
                        Add to favorites
                    </Button>
                    <Button type="link" className={"text-primary"}>
                        <b>View Details</b>
                    </Button>
                </div>
            </div>
        </div>
    )
};

export default HorizontalMovieItem;
