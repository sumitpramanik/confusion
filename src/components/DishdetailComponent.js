import React, { Component } from 'react'
import {
    Card, CardImg, CardBody, CardText, CardTitle, Breadcrumb, BreadcrumbItem,
    Button, Modal, ModalHeader, ModalBody, Label, Row
} from 'reactstrap';
import { Link } from 'react-router-dom';
import { Control, LocalForm, Errors } from 'react-redux-form';

const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => val && (val.length >= len);


function RenderDish({ dish }) {

    if (dish != null) {
        return (
            <Card>
                <CardImg width="100%" object src={dish.image} alt={dish.name} />
                <CardBody>
                    <CardTitle>{dish.name}</CardTitle>
                    <CardText>{dish.description}</CardText>
                </CardBody>
            </Card>
        );
    }
    else {
        return (

            <div></div>
        );
    }

}

function RenderComments({ comments, addComment, dishId }) {
    if (comments != null) {
        const comment = comments.map((c) => {
            return (
                <div className="container" key={c.id}>
                    <ul className="list-unstyled">
                        <li>{c.comment}</li>
                        <li>-- {c.author}, {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit' }).format(new Date(Date.parse(c.date)))}</li>
                    </ul>
                </div>
            );
        });

        return (
            <div className="container">
                <div className="row">
                    <h4>Comments</h4>
                </div>
                <div className="row">
                    {comment}
                    <CommentForm
                        addComment={addComment}
                        dishId={dishId}
                    />
                </div>
            </div>
        );
    }
    else {
        return (
            <div></div>
        );
    }
}

class CommentForm extends Component {
    constructor(props) {
        super(props)

        this.state = {
            isModalOpen: false
        };
        this.toggleModal = this.toggleModal.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(values) {
        //console.log("Current State is: " + JSON.stringify(values));
        //alert("Current State is: " + JSON.stringify(values));
        this.props.addComment(this.props.dishId, values.rating, values.comment, values.author);
    }

    toggleModal() {
        this.setState({
            isModalOpen: !this.state.isModalOpen
        })
    }

    render() {
        return (
            <div>
                <Button outline onClick={this.toggleModal}><span className="fa fa-pencil"></span> Submit Comment</Button>
                <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                    <ModalHeader toggle={this.toggleModal}>Submit Comment</ModalHeader>
                    <ModalBody>
                        <LocalForm onSubmit={(values) => this.handleSubmit(values)}>
                            <Row className="form-group">
                                <Label htmlFor="rating" md={2}>Rating</Label>
                            </Row>
                            <Row className="form-group">
                                <Control.select model=".rating" name="rating"
                                                className="form-control">
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                </Control.select>
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor="author" md={3}>Your Name</Label>
                            </Row>
                            <Row className="form-group">
                                <Control.text model=".author" id="author" name="author"
                                              placeholder="Your Name"
                                              className="form-control"
                                              validators={
                                                  {
                                                      minLength: minLength(3),
                                                      maxLength: maxLength(15)
                                                  }
                                              }
                                />
                                <Errors
                                    className="text-danger"
                                    model=".author"
                                    show="touched"
                                    messages={{
                                        required: 'Required : ',
                                        minLength: 'Must be greater than 2 characters',
                                        maxLength: 'Must be 15 characters or less'
                                    }}
                                />
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor="comment" md={2}>Comment</Label>
                            </Row>
                            <Row className="form-group">
                                <Control.textarea model=".comment" id="comment" name="comment"
                                                  rows="6"
                                                  className="form-control"
                                />
                            </Row>
                            <Row className="form-group">
                                <Button type="submit" color="primary">
                                    Submit
                                </Button>
                            </Row>
                        </LocalForm>
                    </ModalBody>
                </Modal>
            </div>
        );
    }
}

const DishDetail = (props) => {
    return (
        <div className="container">
            <div className="row">
                <Breadcrumb>
                    <BreadcrumbItem><Link to='/menu'>Menu</Link></BreadcrumbItem>
                    <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
                </Breadcrumb>
                <div className="col-12">
                    <h3>{props.dish.name}</h3>
                    <hr />
                </div>
            </div>
            <div className="row">
                <div className="col-12 col-md-5 m-1">
                    <RenderDish dish={props.dish} />
                </div>
                <div className="col-12 col-md-5 m-1">
                    <RenderComments
                        comments={props.comments}
                        addComment={props.addComment}
                        dishId={props.dish.id}
                    />

                </div>
            </div>
        </div>
    );
}
export default DishDetail;