import React, { useState } from 'react'
import DefaultLayout from '../component/DefaultLayout'
import { Row, Col, Form, Tabs, Input, Button, Select } from 'antd'
import { useDispatch } from 'react-redux'
import { updateUser } from '../redux/actions/userActions';
import { postJob } from '../redux/actions/jobActions';
const { TabPane } = Tabs
const { TextArea } = Input;
const { Option } = Select;

function PostJob() {

    const [jobInfo, setJobInfo] = useState({});

    const [activeTab, setActiveTab] = useState("0");
    const dispatch = useDispatch()

    function onFirstFormFinish(values) {
        setJobInfo(values)
        setActiveTab("1")
    }

    function onFinalFormFinish(values) {
        const finalObj = { ...jobInfo, ...values };
        console.log(finalObj)
        dispatch(postJob(finalObj))
    }

    return (
        <div>
            <DefaultLayout>
                <Tabs defaultActiveKey='0' activeKey={activeTab}>
                    <TabPane tab='Job Info' key='0'>
                        <Form layout="vertical" onFinish={onFirstFormFinish}>
                            <Row gutter={16}>
                                <Col lg={8} sm={24}>
                                    <Form.Item  name='title' label="Title" rules={[{ required: true }]}>
                                        <Input />
                                    </Form.Item>
                                </Col>

                                <Col lg={8} sm={24}>
                                    <Form.Item name='department' label="Department" rules={[{ required: true }]}>
                                        <Input />
                                    </Form.Item>
                                </Col>

                                <Col lg={8} sm={24}>
                                    <Form.Item name='experience' label="Experience" rules={[{ required: true }]}>
                                        <Input />
                                    </Form.Item>
                                </Col>

                                <Col lg={8} sm={24}>
                                    <Form.Item name='salaryFrom' label="Salary From" rules={[{ required: true }]}>
                                        <Input type='number' />
                                    </Form.Item>
                                </Col>

                                <Col lg={8} sm={24}>
                                    <Form.Item name='salaryTo' label="Salary To" rules={[{ required: true }]}>
                                        <Input type='number' />
                                    </Form.Item>
                                </Col>
                            </Row>
                            <Row gutter={16}>
                                <Col lg={8} sm={24}>
                                    <Form.Item name='skillsRequired' label="Skills" rules={[{ required: true }]}>
                                        <Input />
                                    </Form.Item>
                                </Col>
                                <Col lg={8} sm={24}>
                                    <Form.Item name="minimumQualification" label='Minimum Qualification' rules={[{ required: true }]}>
                                        <Select>
                                            <Option value="Degree">Degree</Option>
                                            <Option value="12th">12th</Option>
                                            <Option value="10th">10th</Option>
                                        </Select>
                                    </Form.Item>
                                </Col>
                                <Col lg={24} sm={24}>
                                    <Form.Item name='smallDescription' label="Small Description" rules={[{ required: true }]}>
                                        <TextArea rows={3} />
                                    </Form.Item>
                                </Col>
                                <Col lg={24} sm={24}>
                                    <Form.Item name='fullDescription' label="Full Description" rules={[{ required: true }]}>
                                        <TextArea rows={6} />
                                    </Form.Item>
                                </Col>
                            </Row>
                            <Button htmlType='submit'>Next</Button>
                        </Form>
                    </TabPane>
                    <TabPane tab='Company Info' key='1'>
                        <Form layout="vertical" onFinish={onFinalFormFinish}>
                            <Row gutter={16}>
                                <Col lg={8} sm={24}>
                                    <Form.Item name="company" label="Company Name" rules={[{ required: true }]}>
                                        <Input />
                                    </Form.Item>
                                </Col>

                                <Col lg={8} sm={24}>
                                    <Form.Item name="email" label="Company Email" rules={[{ required: true }]}>
                                        <Input />
                                    </Form.Item>
                                </Col>

                                <Col lg={8} sm={24}>
                                    <Form.Item name="phoneNumber" label="Phone Number" rules={[{ required: true }]}>
                                        <Input />
                                    </Form.Item>
                                </Col>

                                <Col lg={24} sm={24}>
                                    <Form.Item name="companyDescription" label="Company Description" rules={[{ required: true }]}>
                                        <TextArea rows={3} />
                                    </Form.Item>
                                </Col>
                            </Row>
                            <Button onClick={() => { setActiveTab("0") }}>Previous</Button>
                            <Button htmlType="submit">Post Job</Button>
                        </Form>
                    </TabPane>
                </Tabs>
            </DefaultLayout>
        </div>
    )
}

export default PostJob
