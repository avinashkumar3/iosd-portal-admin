import React, {Component} from 'react';
import {Link} from 'react-router-dom' ;
import {Row, Col, Card,Button} from 'antd' ;

class LibraryBookList extends Component {
    render() {
        return (
            <div>
               Books List
                <Row>
                    <Col span={6}>
                        <Card>
                        <h6>Book on C/C++ Programming Languages</h6>
                        <p>Book ID:1</p>
                        <hr />
                            <Link to='/library/book/1234'>
                            <Button className='btn btn-sm btn-outline-primary'>View detail</Button>
                            </Link>
                        </Card>
                    </Col>
                    <Col span={6}>
                        <Card>
                        <h6>Book on Java Programming Languages</h6>
                        <p>Book ID:10</p>
                        <hr />
                            <Link to='/library/book/1234'>
                            <Button className='btn btn-sm btn-outline-primary'>View detail</Button>
                            </Link>
                        </Card>
                    </Col>
                    <Col span={6}>
                        <Card>
                        <h6>Books on Machine Learning and Python</h6>
                        <p>Book ID:14</p>
                        <hr />
                            <Link to='/library/book/1234'>
                            <Button className='btn btn-sm btn-outline-primary'>View detail</Button>

                            </Link>
                        </Card>
                    </Col>
                    <Col span={6}>
                        <Card>
                        <h6>Books on Artificial Intelligence and IOT</h6>
                        <p>Book ID:13</p>
                        <hr />
                            <Link to='/library/book/1234'>
                            <Button className='btn btn-sm btn-outline-primary'>View detail</Button>
                            </Link>
                        </Card>
                    </Col>
                    <Col span={6}>
                    <Card>
                    <h6>Book on DataBase Management</h6>
                        <p>Book ID:12</p>
                        <hr />
                        <Link to='/library/book/1234'>
                        <Button className='btn btn-sm btn-outline-primary'>View detail</Button>
                        </Link>
                    </Card>
                </Col>

                </Row>
            </div>
        );
    }
}


export default LibraryBookList;
