import React, {Component} from 'react';
import {Link} from 'react-router-dom' ;
import {Row, Col, Card,Button} from 'antd' ;

class BlogsList extends Component {
    render() {
        return (
            <div>
               
                <Row>
                    <Col span={6}>
                        <Card>
                        <h6>Blog 1</h6>
                        <p>Blog ID:71</p>
                        <hr />

                            <Link to='/blogs/16'>
                            <Button className='btn btn-sm btn-outline-primary'>View detail</Button>
                            </Link>
                        </Card>
                    </Col>
                    <Col span={6}>
                        <Card>
                        <h6>Blog 2</h6>
                        <p>Blog ID:72</p>
                        <hr />

                            <Link to='/blogs/17'>
                            <Button className='btn btn-sm btn-outline-primary'>View detail</Button>
                            </Link>
                        </Card>
                    </Col>
                    <Col span={6}>
                        <Card>
                        <h6>Blog 3</h6>
                        <p>Blog ID:73</p>
                        <hr />

                            <Link to='/blogs/18'>
                            <Button className='btn btn-sm btn-outline-primary'>View detail</Button></Link>
                        </Card>
                    </Col>
                    <Col span={6}>
                        <Card>
                        <h6>Blog 4</h6>
                        <p>Blog ID:74</p>
                        <hr />

                            <Link to='/blogs/19'>
                            <Button className='btn btn-sm btn-outline-primary'>View detail</Button>
                            </Link>
                        </Card>
                    </Col>
                    <Col span={6}>
                    <Card>
                    <h6>Blog 5</h6>
                        <p>Blog ID:75</p>
                        <hr />

                        <Link to='/blogs/20'>
                        <Button className='btn btn-sm btn-outline-primary'>View detail</Button>
                        </Link>
                    </Card>
                </Col>

                </Row>
            </div>
        );
    }
}


export default BlogsList;
