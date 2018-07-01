import React, {Component} from 'react';
import {Link} from 'react-router-dom' ;
import {Row, Col, Card,Button} from 'antd' ;

class MentorsList extends Component {
    render() {
        return (
            <div>
               Mentors List
                <Row>
                    <Col span={6}>
                        <Card>
                        <h6>Mentor for Machine Learning</h6>
                        <p>Mentor ID:41</p>
                        <hr />
 
                            <Link to='/mentors/6'>
                            <Button className='btn btn-sm btn-outline-primary'>View detail</Button>

                            </Link>
                        </Card>
                    </Col>
                    <Col span={6}>
                        <Card>
                        <h6>Mentor for AI</h6>
                        <p>Mentor ID:42</p>
                        <hr />
 
                            <Link to='/mentors/7'>
                            <Button className='btn btn-sm btn-outline-primary'>View detail</Button>
                            </Link>
                        </Card>
                    </Col>
                    <Col span={6}>
                        <Card>
                        <h6>Mentor for Networking</h6>
                        <p>Mentor ID:43</p>
                        <hr />
 
                            <Link to='/mentors/8'>
                            <Button className='btn btn-sm btn-outline-primary'>View detail</Button>
                            </Link>
                        </Card>
                    </Col>
                    <Col span={6}>
                        <Card>
                        <h6>Mentor for Web Development</h6>
                        <p>Mentor ID:44</p>
                        <hr />
 
                            <Link to='/mentors/9'>
                            <Button className='btn btn-sm btn-outline-primary'>View detail</Button>
                            </Link>
                        </Card>
                    </Col>
                    <Col span={6}>
                    <Card>
                        <h6>Mentor for Java Applications</h6>
                        <p>Mentor ID:45</p>    
                        <hr />
 
                        <Link to='/mentors/10'>
                        <Button className='btn btn-sm btn-outline-primary'>View detail</Button>
                        </Link>
                    </Card>
                </Col>

                </Row>
            </div>
        );
    }
}


export default MentorsList;
