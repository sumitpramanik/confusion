import React, {Component} from 'react';
import {Breadcrumb, BreadcrumbItem, Col, Row, Label, Button} from 'reactstrap'
import {Link} from 'react-router-dom';
import {Form, Control, Errors, actions} from 'react-redux-form';


const required = (val) => val && val.length;
const minLength = (len) => (val) => !val || val.length > len;
const maxLength = (len) => (val) => !val || val.length < len;
const isNum = (val) => !isNaN(val);
const validEmail = (val) => /^[A-Z0-9]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val);

class Contact extends Component {

    constructor (props) {
        super(props);
    }

    handleSubmit =(values)=>{
        this.props.postFeedback(values);
        this.props.resetFeedbackForm();
    }

    render () {
        return (
            <div className="container">
            <div className="row mt-3">
                <Breadcrumb>
                    <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                    <BreadcrumbItem>Contact Us</BreadcrumbItem>
                </Breadcrumb>
                <div className="col-12">
                    <h3>Contact Us</h3>
                    <hr/>
                </div>
            </div>
            <div className="row row-content">
                <div className="col-12">
                    <h3>Location Information</h3>
                </div>
                <div className="col-12 col-sm-4 offset-sm-1">
                    <h5>Our Address</h5>
                    <address>
                        121, Clear Water Bay Road<br/>
                        Clear Water Bay, Kowloon<br/>
                        HONG KONG<br/>
                        <i className="fa fa-phone"></i>: +852 1234 5678<br/>
                        <i className="fa fa-fax"></i>: +852 8765 4321<br/>
                        <i className="fa fa-envelope"></i>: <a href="mailto:confusion@food.net">confusion@food.net</a>
                    </address>
                </div>
                <div className="col-12 col-sm-6 offset-sm-1">
                    <h5>Map of our Location</h5>
                </div>
                <div className="col-12 col-sm-11 offset-sm-1">
                    <div className="btn-group" role="group">
                        <a role="button" className="btn btn-primary" href="tel:+85212345678"><i
                            className="fa fa-phone"></i> Call</a>
                        <a role="button" className="btn btn-info"><i className="fa fa-skype"></i> Skype</a>
                        <a role="button" className="btn btn-success" href="mailto:confusion@food.net"><i
                            className="fa fa-envelope-o"></i> Email</a>
                    </div>
                </div>
            </div>
            <div className="row row-content">
                <div className="col-12">
                    <h3>Send us Your Feedback</h3>
                </div>
                <div className="col-12 col-md-9">
                    <Form model="feedback" onSubmit={(values) => this.handleSubmit(values)}>
                        <Row className="form-group">
                            <Label md={ 2 } htmlFor="firstname">First Name</Label>
                            <Col md={ 10 }>
                                <Control.text
                                    model=".firstname"
                                    className="form-control"
                                    validators ={{required, minLength:minLength(2), maxLength:maxLength(15)}}
                                    id="firstname"
                                    name="firstname"
                                    placeholder="First Name"
                                />
                                <Errors
                                    className="text-danger"
                                    show="touched"
                                    model=".firstname"
                                    messages={{
                                        required:'required',
                                        minLength:'Minlength is 2',
                                        maxLength:'MaxLength is 15'
                                    }}
                                />
                            </Col>
                        </Row>
                        <Row className="form-group">
                            <Label md={ 2 } htmlFor="lastname">Last Name</Label>
                            <Col md={ 10 }>
                                <Control.text
                                       model = ".lastname"
                                       className="form-control"
                                       validators ={{required, minLength:minLength(2), maxLength:maxLength(15)}}
                                       id="lastname"
                                       name="lastname"
                                       placeholder="Last Name"
                                />
                                <Errors
                                    className="text-danger"
                                    show="touched"
                                    model=".lastname"
                                    messages={{
                                        required:'required',
                                        minLength:'Minlength is 2',
                                        maxLength:'MaxLength is 15'
                                    }}
                                />
                            </Col>
                        </Row>
                        <Row className="form-group">
                            <Label md={ 2 } htmlFor="email">Email</Label>
                            <Col md={ 10 }>
                                <Control.text
                                    model=".email"
                                    className="form-control"
                                    validators ={{required, validEmail}}
                                    id="email"
                                    name="email"
                                    placeholder="john@doe.com"
                                />
                                <Errors
                                    className="text-danger"
                                    show="touched"
                                    model=".email"
                                    messages={{
                                        required:'email is required',
                                        validEmail: 'Invalid email address'
                                    }}
                                />
                            </Col>
                        </Row>
                        <Row className="form-group">
                            <Label md={ 2 } htmlFor="telnum">Contact num.</Label>
                            <Col md={ 10 }>
                                <Control.text
                                    model=".telnum"
                                    className="form-control"
                                    validators={{required, isNum}}
                                    id="telnum"
                                    name="telnum"
                                    placeholder="123456789"
                                />
                                <Errors
                                    model=".telnum"
                                    show="touched"
                                    className="text-danger"
                                    messages={{
                                        required:'Telephone number is required',
                                        isNum:'Must be a number'
                                    }}
                                />
                            </Col>

                        </Row>
                        <Row className="form-group">
                            <Col md={{size:6,offset:2}}>
                                <div className="form-check">
                                    <Label check>
                                    <Control.checkbox
                                        model=".agree"
                                        className="form-check-input"
                                        type="checkbox"
                                        id="agree"
                                        name="agree"
                                    />
                                        <strong>like to be contacted?</strong>
                                    </Label>
                                </div>
                            </Col>
                            <Col md={{size:3, offset:1}}>
                                <Control.select
                                    model=".contactType"
                                    className="form-control"
                                    type="select"
                                    id="contactType"
                                    name="contactType">
                                    <option>Tel.</option>
                                    <option>Email</option>
                                </Control.select>
                            </Col>
                        </Row>
                        <Row className="form-group">
                            <Label md={2} htmlFor="message">Message</Label>
                            <Col md={10}>
                                <Control.textarea className="form-control"
                                    model=".message"
                                    type="textarea"
                                    rows="12"
                                    id="message"
                                    name="message"/>
                            </Col>
                        </Row>
                        <Row className="form-group">
                            <Col md={{size:6,offset:2}}>
                                <Button type="submit" color="btn btn-primary">Provide feedback</Button>
                            </Col>
                        </Row>
                    </Form>
                </div>
            </div>
            {/*<div className="row row-content">
                <div className="col-12">
                    <h3>Send us Your feedback</h3>
                </div>
                <div class="col-12 col-md-9">
                    <Form onSubmit={this.handleSubmit}>
                        <FormGroup className="row">
                            <Label htmlFor="firstname" className="col-md-2">First Name</Label>
                            <Input
                                type="text"
                                className="col-md-10"
                                id="firstname"
                                name="firstname"
                                value={this.state.firstname}
                                placeholder="First Name"
                                onChange={this.handleInputChange}
                            />
                        </FormGroup>
                        <FormGroup className="row">
                            <Label htmlFor="lastname" className="col-md-2">Last Name</Label>
                            <Input
                                type="text"
                                className="col-md-10"
                                id="lastname"
                                name="lastname"
                                value={this.state.lastname}
                                placeholder="Last Name"
                                onChange={this.handleInputChange}
                            />
                        </FormGroup>
                        <FormGroup className="row">
                            <Label htmlFor="email" className="col-md-2">Email</Label>
                            <Input
                                type="email"
                                className="col-md-10"
                                id="email"
                                name="email"
                                value={this.state.email}
                                placeholder="Email"
                                onChange={this.handleInputChange}
                            />
                        </FormGroup>
                        <FormGroup className="row">
                            <Label htmlFor="telnum" className="col-md-2">Contact num</Label>
                            <Input
                                type="text"
                                className="col-md-10"
                                id="telnum"
                                name="telnum"
                                value={this.state.telnum}
                                placeholder="Contact num"
                                onChange={this.handleInputChange}
                            />
                        </FormGroup>
                        <FormGroup className="row">
                            <div className="col-md-6 offset-md-2">
                                <FormGroup>
                                <Input
                                    type="checkbox"
                                    id="agree"
                                    name="agree"
                                    checked={this.state.agree}
                                    onChange={this.handleInputChange}
                                />
                                <strong>like to be contacted</strong>
                                </FormGroup>
                            </div>
                            <div className="col-md-3 offset-md-1">
                                <FormGroup>
                                    <Input
                                        type="select"
                                        id="contactType"
                                        name="contactType"
                                        value={this.state.contactType}>
                                        <option>Tel.</option>
                                        <option>Email</option>
                                        onChange={this.handleInputChange}
                                    </Input>
                                </FormGroup>
                            </div>
                        </FormGroup>
                        <FormGroup className="row">
                            <Label htmlFor="message" className="col-md-2">Message</Label>
                                <Input
                                    type="textarea"
                                    id="message"
                                    name="message"
                                    rows="12"
                                    className="col-md-10"
                                    value={this.state.message}
                                    onChange={this.handleInputChange}
                                />
                        </FormGroup>
                        <FormGroup className="row">
                            <div className="col-md-6 offset-md-2">
                                <button
                                    type="submit"
                                    className="btn btn-primary">Provide Feedback
                                </button>
                            </div>
                        </FormGroup>
                    </Form>
                </div>
            </div>*/}
        </div>)
    }

}

export default Contact;