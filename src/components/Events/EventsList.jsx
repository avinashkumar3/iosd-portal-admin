import React, {Component} from 'react';
import {Link} from 'react-router-dom' ;
import {Row, Col, Card,Button} from 'antd' ;

class ProjectsList extends Component {
    render() {
        return (
            <div>
               Events List
                <Row>
                    <Col span={6}>
                    <Card>
                    <h6>Events on C/C++ Programming Language</h6>
                    <p>Event ID:18</p>
                      <hr />
                        <Link to='/Events/11'>
                            <Button className='btn btn-sm btn-outline-primary'>View detail</Button>
                        </Link>
                    </Card>
                </Col>

                    <Col span={6}>
                        <Card>
                        <h6>Events on Java Programming Languages</h6>
                        <p>Event ID:19</p>
                        <hr />
                            <Link to='/Events/12'>
                            <Button className='btn btn-sm btn-outline-primary'>View detail</Button>
                            </Link>
                        </Card>
                    </Col>
                    <Col span={6}>
                        <Card>
                        <h6>Events on Machine Learning and Python</h6>
                        <p>Event ID:20</p>
                        <hr />
                            <Link to='/Events/13'>
                            <Button className='btn btn-sm btn-outline-primary'>View detail</Button>                            </Link>
                        </Card>
                    </Col>
                    <Col span={6}>
                        <Card>
                        <h6>Events on Artificial Intelligence and IOT</h6>
                    <p>Event ID:21</p>
                      <hr />
                            <Link to='/Events/14'>
                            <Button className='btn btn-sm btn-outline-primary'>View detail</Button>
                            </Link>
                        </Card>
                    </Col>
                    <Col span={6}>
                    <Card>
                    <h6>Events on Database Management</h6>
                    <p>Event ID:22</p>
                      <hr />
                        <Link to='/Events/15'>
                        <Button className='btn btn-sm btn-outline-primary'>View detail</Button>
                        </Link>
                    </Card>
                </Col>

                </Row>
            </div>
        );
    }
}


export default ProjectsList;
