import React, {Component} from 'react';
import {Link} from 'react-router-dom' ;
import {Row, Col, Card} from 'antd' ;

class LibraryBookList extends Component {
    render() {
        return (
            <div>
                List
                <Row>
                    <Col span={6}>
                        <Card>
                            <Link to='/library/book/1234'>
                                This will be a book card.
                                Button to go in detail..

                            </Link>
                        </Card>
                    </Col>
                    <Col span={6}>
                        <Card>
                            <Link to='/library/book/1234'>
                                This will be a book card.
                                Button to go in detail..

                            </Link>
                        </Card>
                    </Col>
                    <Col span={6}>
                        <Card>
                            <Link to='/library/book/1234'>
                                This will be a book card.
                                Button to go in detail..

                            </Link>
                        </Card>
                    </Col>
                    <Col span={6}>
                        <Card>
                            <Link to='/library/book/1234'>
                                This will be a book card.
                                Button to go in detail..

                            </Link>
                        </Card>
                    </Col>
                    <Col span={6}>
                    <Card>
                        <Link to='/library/book/1234'>
                            This will be a book card.
                            Button to go in detail..

                        </Link>
                    </Card>
                </Col>

                </Row>
            </div>
        );
    }
}


export default LibraryBookList;
