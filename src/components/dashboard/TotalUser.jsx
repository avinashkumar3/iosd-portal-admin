import React, {Component} from 'react';
import {Row, Col, Card, Button, Icon} from 'antd' ;
import {Link} from 'react-router-dom' ;

class TotalUser extends Component {

    render() {

        let f = (
            <Row className='card-header'>
                <Col span={8} className='bulb'>
                    <img height="68px" src="https://www.codingninjas.in/assets/images/Courses.png" width="68px"
                         alt={'Random Text'}/>

                </Col>
                <Col span={16} className='header'>
                    Total User
                    <p>
                         View Users
                    </p>
                </Col>
            </Row>
        )


        return (
            <div>
                <Card title={f}>
                    <Row className='text-center'>
                        <Col span={12}>
                            <Link to='/totalusers/list'>
                                <button className='btn btn-sm btn-outline-primary '>
                                    View User
                                </button>
                            </Link>
                        </Col>
                        <Col span={12}>
                            <Link to='/totalusers/new'>
                                <button className='btn btn-sm btn-outline-primary'>
                                    <Icon type="plus"/> Add User
                                </button>
                            </Link>
                        </Col>
                    </Row>
                </Card>
            </div>
        );
    }
}

export default TotalUser;
