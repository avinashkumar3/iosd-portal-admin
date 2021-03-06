import React, {Component} from 'react';
import {Card, Row, Col, Form, Input, Button, Select } from 'antd' ;
const FormItem = Form.Item;
const Option = Select.Option;
const { TextArea } = Input;

class WorkoutAdd extends Component {
	
	handleSubmit = (e) => {
	    e.preventDefault();
	    this.props.form.validateFields((err, values) => {
	      if (!err) {
	        console.log('Received values of form: ', values);
	      }
	    });
	  }

	render() {
		const { getFieldDecorator } = this.props.form;
		return (

            <div>
			
			<Card className="my-4" style={{ width:700,}}>
				<Form layout="inline" onSubmit={this.handleSubmit}>
					<Row>
						<Col span={8}>
							<h4>Add New Projects</h4>
						</Col>
						<Col span={8} offset={8}>
							<div className="float-right">
								<FormItem>
							        <Button
							        	style={{marginRight: '1.2rem'}}
							        	type="primary"
							            htmlType="submit"
							        >
							            Submit
							        </Button>
									<Button
									
							        	type="danger"
							            htmlType="submit"
							        >
							        	Delete
							        </Button>
							    </FormItem>
							</div>
						</Col>
					</Row>

                    <hr />

                    <Row>
						<Col span={11}>
                            <FormItem
                                className= "projectName"
						        label="Project Name"
						        colon={true}
						        wrapperCol={{span: 24}}
						    >
						    {getFieldDecorator('projectName', {
					         	rules: [{ required: true, message: 'Please input Project name!' }],
						    })(
						        <Input placeholder="Project Name" />
						    )}
                            </FormItem>
                    
						</Col>

                        
						<Col span={11} >
                            <FormItem
                                className= "projectID"
						        label="Project ID"
						        colon={true}
						        wrapperCol={{span: 24}}
						    >
						    {getFieldDecorator('projecctID', {
                                rules: [{ required: true, message: 'Please input Project ID!' }],
                           })(
						        <Input placeholder="Project ID" />
						    )}
						    </FormItem>
						</Col>
                        </Row>

                        <Row>
						<Col span={11}>
							<FormItem
						        label="Project Description"
						        colon={true}
						        wrapperCol={{span: 24}}
						    >
						    {getFieldDecorator('ProjectDescription')(
                                <TextArea placeholder="Project Description" autosize={{ minRows: 1, maxRows: 10 }} style={{width: '100%'}}/>
						    )}
						    </FormItem>
                        </Col>

                        <Col span={11}>
							<FormItem
						        label= "Select Technology"
						        colon={true}
						        wrapperCol={{span: 24}}
						    >
						    {getFieldDecorator('selectTechnology', {
						    	initialValue: "Select",
						    	rules:[{required: true, message: "Please select a Technology"}]
					         })(
                                <Select>
						        	<Option value="Machine Learning">Machine Learning</Option>
                                      <Option value="Python">Python</Option>
                                      <Option value="IOT">IOT</Option>
      								<Option value="React JS">React JS</Option>
      							</Select>
						    )}
						    </FormItem>
						</Col>
                        </Row>


                        <Row>
						<Col span={11}>
							<FormItem
						        label="Github Link"
						        colon={true}
						        wrapperCol={{span: 24}}
						    >
						    {getFieldDecorator('email', {
                                rules: [{ required: true, message: 'Please Input Github Link!' }],
                           })(
						        <Input placeholder="gi@github.com" />
						    )}
						    </FormItem>
                        </Col>
                        <Col span={11}>
							<FormItem
						        label="Pre-Requisities"
						        colon={true}
						        wrapperCol={{span: 24}}
						    >
						    {getFieldDecorator('pre-requisities', {
                                rules: [{ required: true, message: 'Please Input Pre-Requisities!' }],
                           })(
						        <Input placeholder="Pre-Requisities" />
						    )}
						    </FormItem>
                        </Col>
                        
                        </Row>

                        
                    </Form>
                    </Card>
				
					
</div>


        );
    }
}
const ProjectNewForm = Form.create()(WorkoutAdd);
export default ProjectNewForm;