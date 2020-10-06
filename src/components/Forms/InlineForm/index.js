import React, { useState, useEffect } from 'react';
import {useLocation, useHistory} from 'react-router-dom';
import { Form, Input, Button, Select } from 'antd';
import { SearchOutlined, RightOutlined } from '@ant-design/icons';
import {connect} from 'react-redux';
import {postMovieList} from "../../../appRedux/actions/list/list";

const { Option } = Select;

function handleChangeYear(value) {
    console.log(`selected ${value}`);
}

function handleChangeType(value) {
    console.log(`selected ${value}`);
}

const InlineForm = (props) => {
    let history = useHistory();
    const [form] = Form.useForm();
    const {postMovieList, loading} = props;
    const [formElements, setFormElements] = useState({});

    const onFinish = (values) => {
        setFormElements(values);
        postMovieList(values);
        history.push('/lists');
    };

    return (
        <Form form={form} name="horizontal_search" layout="inline" onFinish={onFinish} className={"form-horizontal-item"} colon={false}>
            <Form.Item name="year" className={"input-item"} wrapperCol={{ sm: 24 }} style={{ width: "calc(15% - 10px)"}}>
                <Select
                    placeholder="Year"
                    onChange={handleChangeYear}
                    allowClear
                >
                    <Option value="2014">2014</Option>
                    <Option value="2015">2015</Option>
                    <Option value="2016">2016</Option>
                    <Option value="2017">2017</Option>
                    <Option value="2018">2018</Option>
                    <Option value="2019">2019</Option>
                    <Option value="2020">2020</Option>
                </Select>
            </Form.Item>
            <Form.Item name="movieType" className={"input-item"} wrapperCol={{ sm: 24 }} style={{ width: "calc(20% - 10px)"}}>
                <Select
                    placeholder="Type"
                    onChange={handleChangeType}
                    allowClear
                >
                    <Option value="movie">Movie</Option>
                    <Option value="series">Series</Option>
                    <Option value="episode">Episode</Option>
                </Select>
            </Form.Item>
            <Form.Item name="movieName" className={"input-item"} wrapperCol={{ sm: 24 }} style={{ width: "calc(50% - 10px)"}}>
                <Input
                    prefix={<SearchOutlined className="site-form-item-icon" />}
                    type="text"
                    placeholder="Enter movie name here"
                />
            </Form.Item>
            <Form.Item shouldUpdate={true} className={"input-item"} wrapperCol={{ sm: 24 }} style={{ width: "15%"}}>
                {() => (
                    <Button type={"primary"} htmlType={"submit"} className={"btn-primary btn-icon"}>
                        Search
                        <RightOutlined />
                    </Button>
                )}
            </Form.Item>
        </Form>
    );
};


const mapStateToProps = (state) => {
    return {
        loading: state.list.loading,
    }
};

export default connect(mapStateToProps, {postMovieList})(InlineForm);
