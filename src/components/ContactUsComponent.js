import React, {Component} from 'react';
import {Breadcrumb, BreadcrumbItem, Col, Form, FormGroup, Input, Label, Button, FormFeedback} from 'reactstrap'
import {Link} from 'react-router-dom';

class Contact extends Component {

    constructor (props) {
        super(props);
        this.state = {
            firstname: '',
            lastname: '',
            email: '',
            telnum: '',
            agree: false,
            contactType: 'Tel.',
            message: '',
            touched : {
                firstname: false,
                lastname: false,
                email: false,
                telnum: false,
            }

        }
    }
    handleInputChange =(event)=> {
        const target = event.target;
        const value = target.type ==='checkbox'?target.checked : target.value;
        const name = target.name;
        this.setState({
            [name]:value
        })
    }

    handleBlur =(field)=>()=> {
        this.setState({touched :{...this.state.touched, [field]:true}})
    }

    handleSubmit =(event)=>{
        alert(JSON.stringify(this.state))
        event.preventDefault();
    }

    validate(firstname, lastname, email, telnum) {
        const errors = {
            firstname:'',
            lastname:'',
            email:'',
            telnum:''
        }
        if (this.state.touched.firstname && firstname.length < 3)
            errors.firstname = 'First Name should be >= 3 characters';
        else if (this.state.touched.firstname && firstname.length > 10)
            errors.firstname = 'First Name should be <= 10 characters';

        if (this.state.touched.lastname && lastname.length < 3)
            errors.lastname = 'Last Name should be >= 3 characters';
        else if (this.state.touched.lastname && lastname.length > 10)
            errors.lastname = 'Last Name should be <= 10 characters';

        const reg = /^\d+$/;
        if (this.state.touched.telnum && !reg.test(telnum))
            errors.telnum = 'Tel. Number should contain only numbers';

        if (this.state.touched.email && email.split('').filter(x => x === '@').length !== 1)
            errors.email = 'Email should contain a @';
        return errors;
    }
    render () {
        const errors = this.validate(this.state.firstname, this.state.lastname, this.state.email, this.state.telnum);
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
                    <Form onSubmit={this.handleSubmit}>
                        <FormGroup row>
                            <Label md={ 2 } htmlFor="firstname">First Name</Label>
                            <Col md={ 10 }>
                                <Input
                                    id="firstname"
                                    name="firstname"
                                    value={ this.state.firstname }
                                    valid={errors.firstname === ''}
                                    invalid={errors.firstname !== ''}
                                    placeholder="First Name"
                                    onBlur={this.handleBlur('firstname')}
                                    onChange={this.handleInputChange}
                                />
                                <FormFeedback>{errors.firstname}</FormFeedback>
                            </Col>
                        </FormGroup>
                        <FormGroup row>

                            <Label md={ 2 } htmlFor="lastname">Last Name</Label>
                            <Col md={ 10 }>
                                <Input id="lastname"
                                       name="lastname"
                                       value={ this.state.lastname }
                                       placeholder="Last Name"
                                       valid={errors.lastname === ''}
                                       invalid={errors.lastname !== ''}
                                       onBlur={this.handleBlur('lastname')}
                                       onChange={this.handleInputChange}
                                />
                            </Col>

                        </FormGroup>
                        <FormGroup row>
                            <Label md={ 2 } htmlFor="email">Email</Label>
                            <Col md={ 10 }>
                                <Input
                                    id="email"
                                    name="email"
                                    value={ this.state.email }
                                    valid={errors.email === ''}
                                    invalid={errors.email !== ''}
                                    onBlur={this.handleBlur('email')}
                                    placeholder="john@doe.com"
                                    onChange={this.handleInputChange}
                                />
                            </Col>

                        </FormGroup>
                        <FormGroup row>

                            <Label md={ 2 } htmlFor="telnum">Contact num.</Label>
                            <Col md={ 10 }>
                                <Input
                                    id="telnum"
                                    name="telnum"
                                    value={ this.state.telnum }
                                    valid={errors.telnum === ''}
                                    invalid={errors.telnum !== ''}
                                    onBlur={this.handleBlur('telnum')}
                                    placeholder="123456789"
                                    onChange={this.handleInputChange}
                                />
                            </Col>

                        </FormGroup>
                        <FormGroup row>
                            <Col md={{size:6,offset:2}}>
                                <FormGroup check>
                                    <Input
                                        type="checkbox"
                                        id="agree"
                                        name="agree"
                                        onChange={this.handleInputChange}
                                        checked={this.state.agree}/>{' '}
                                        <strong>like to be contacted?</strong>
                                    />
                                </FormGroup>
                            </Col>
                            <Col md={{size:3, offset:1}}>
                                <Input type="select" id="contactType" name="contactType" value={this.state.contactType} onChange={this.handleInputChange}>
                                    <option>Tel.</option>
                                    <option>Email</option>
                                </Input>
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label md={2} htmlFor="message">Message</Label>
                            <Col md={10}>
                                <Input type="textarea" rows="12" id="message" name="message" value={this.state.message} onChange={this.handleInputChange}/>
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Col md={{size:6,offset:2}}>
                                <Button type="submit" color="btn btn-primary">Provide feedback</Button>
                            </Col>
                        </FormGroup>
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