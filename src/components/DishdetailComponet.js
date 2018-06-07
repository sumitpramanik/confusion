import React, {Component} from 'react';
import {Card, CardImg, CardBody, CardTitle, CardText} from 'reactstrap';
import moment from 'moment';

class DishDetail extends Component {

    constructor(props) {
        super(props);
    }

    renderComments(dish) {
        let comments = '';
        if(dish.comments){
             comments = dish.comments.map(comment => {
                return (
                    <div key={comment.id} className="m-1 pb-1">
                        <div>{comment.comment}</div>
                        <div>-- {comment.author}, {moment(comment.date).format('MMM DD, YYYY')}</div>
                    </div>
                )
            })
        }else{
             comments = <div></div>
        }
        return comments;
    } 

    render() {
        if(this.props.dish) {
            return (
                <div className="row">
                    <div className="col-12 col-md-5 m-1">
                        <Card>
                            <CardImg src={this.props.dish.image}/>
                            <CardBody>
                                <CardTitle>{this.props.dish.name}</CardTitle>
                                <CardText>{this.props.dish.description}</CardText>
                            </CardBody>
                        </Card>
                    </div>
                
                    <div className="col-12 col-md-5 m-1">
                        <h4>Comments</h4>
                        {this.renderComments(this.props.dish)}
                    </div>
                </div>
            )
        }else {
            return(<div></div>)
        }
    }
    

}

export default DishDetail;