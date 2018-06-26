import React , {Component} from 'react' ;
import { Row, Col , Card } from 'antd';
import LibrarySummaryCard from "./LibrarySummaryCard";

class Dashboard extends Component {
    render(){
        return (
            <div className='container dashboard'>
                <Row>
                    <Col span={8}>
                        <LibrarySummaryCard/>
                    </Col>
                </Row>
            </div>
        )
    }
}

export default Dashboard;