import React, {Component} from 'react';
import {Row, Col, Card, Button, Icon} from 'antd' ;
import {Link} from 'react-router-dom' ;

class Blogs extends Component {

    render() {

        let f = (
            <Row className='card-header1'>
                <Col span={8} className='bulb'>
                    <img height="68px" src="https://www.codingninjas.in/assets/images/glasses.png" width="68px"
                         alt={'Random Text'}/>

                </Col>
                <Col span={16} className='header'>
                    Blogs
                    <p>
                         View Blogs
                    </p>
                </Col>
            </Row>
        )


        return (
            <div>
                <Card title={f}>
                    <Row className='text-center'>
                        <Col span={12}>
                            <Link to='/blogs/list'>
                                <button className='btn btn-sm btn-outline-primary '>
                                    View Blogs
                                </button>
                            </Link>
                        </Col>
                        <Col span={12}>
                            <Link to='/blogs/new'>
                                <button className='btn btn-sm btn-outline-primary'>
                                    Blogs Count
                                </button>
                            </Link>
                        </Col>
                    </Row>
                </Card>
            </div>
        );
    }
}

export default Blogs;
