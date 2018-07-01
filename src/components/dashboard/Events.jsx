import React, {Component} from 'react';
import {Row, Col, Card, Button, Icon} from 'antd' ;
import {Link} from 'react-router-dom' ;

class Events extends Component {

    render() {

        let f = (
            <Row className='card-header'>
                <Col span={8} className='bulb'>
                    <img height="68px" src="https://www.codingninjas.in/assets/images/events.png" width="68px"
                         alt={'Random Text'}/>

                </Col>
                <Col span={16} className='header'>
                    Events
                    <p>
                        Update, Delete or Insert New Events
                    </p>
                </Col>
            </Row>
        )


        return (
            <div>
                <Card title={f}>
                    <Row className='text-center'>
                        <Col span={12}>
                            <Link to='/events/list'>
                                <button className='btn btn-sm btn-outline-primary '>
                                    View Events
                                </button>
                            </Link>
                        </Col>
                        <Col span={12}>
                            <Link to='/events/new'>
                                <button className='btn btn-sm btn-outline-primary'>
                                    <Icon type="plus"/> Add New Events
                                </button>
                            </Link>
                        </Col>
                    </Row>
                </Card>
            </div>
        );
    }
}

export default Events;
