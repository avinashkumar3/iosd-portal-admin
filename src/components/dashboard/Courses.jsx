import React, {Component} from 'react';
import {Row, Col, Card, Button, Icon} from 'antd' ;
import {Link} from 'react-router-dom' ;

class Courses extends Component {

    render() {

        let f = (
            <Row className='card-header2'>
                <Col span={8} className='bulb'>
                    <img height="68px" src="https://www.codingninjas.in/assets/images/Courses.png" width="68px"
                         alt={'Random Text'}/>

                </Col>
                <Col span={16} className='header'>
                    Courses
                    <p>
                        Add, Delete, Update Courses
                    </p>
                </Col>
            </Row>
        )


        return (
            <div>
                <Card title={f}>
                    <Row className='text-center'>
                        <Col span={12}>
                            <Link to='/courses/list'>
                                <button className='btn btn-sm btn-outline-primary '>
                                    View Courses
                                </button>
                            </Link>
                        </Col>
                        <Col span={12}>
                            <Link to='/courses/new'>
                                <button className='btn btn-sm btn-outline-primary'>
                                    <Icon type="plus"/> Add Courses
                                </button>
                            </Link>
                        </Col>
                    </Row>
                </Card>
            </div>
        );
    }
}

export default Courses;
