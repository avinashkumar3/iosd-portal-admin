import React, {Component} from 'react';
import {Link} from 'react-router-dom' ;
import {Row, Col, Card,Button} from 'antd' ;

class ProjectsList extends Component {
    render() {
        return (
            <div>
               Projects List
                <Row>
                    <Col span={6}>
                    <Card>
                    <h6>Project on E-Commerce with PHP</h6>
                    <p>Project ID:12</p>
                      <hr />
                        <Link to='/projects/21'>
                            <Button className='btn btn-sm btn-outline-primary'>View detail</Button>
                        </Link>
                    </Card>
                </Col>

                    <Col span={6}>
                        <Card>
                        <h6>Project on Banking Management</h6>
                        <p>Project ID:11</p>
                        <hr />
                            <Link to='/projects/22'>
                            <Button className='btn btn-sm btn-outline-primary'>View detail</Button>
                            </Link>
                        </Card>
                    </Col>
                    <Col span={6}>
                        <Card>
                        <h6>Project on Earthquake Prediction</h6>
                        <p>Project ID:21</p>
                        <hr />
                            <Link to='/projects/23'>
                            <Button className='btn btn-sm btn-outline-primary'>View detail</Button>                            </Link>
                        </Card>
                    </Col>
                    <Col span={6}>
                        <Card>
                        <h6>Project on Collecting Data from Water Bodies</h6>
                    <p>Project ID:22</p>
                      <hr />
                            <Link to='/projects/24'>
                            <Button className='btn btn-sm btn-outline-primary'>View detail</Button>
                            </Link>
                        </Card>
                    </Col>
                    <Col span={6}>
                    <Card>
                    <h6>Project on Building Websites with React and Node JS</h6>
                    <p>Project ID:12</p>
                      <hr />
                        <Link to='/projects/25'>
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
