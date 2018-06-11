import React from 'react';
import {Card, CardImg, CardBody, CardTitle, CardText} from 'reactstrap';
import moment from 'moment';

const RenderDishDetail = ({dish}) => {
    return(
        <div className="col-12 col-md-5 m-1">
            <Card>
                <CardImg src={dish.image}/>
                <CardBody>
                    <CardTitle>{dish.name}</CardTitle>
                    <CardText>{dish.description}</CardText>
                </CardBody>
            </Card>
        </div>
    )
}
function RenderComments({dish}) {
    let comments = '';
    if(dish.comments){
         comments = dish.comments.map(comment => {
            return (<div key={comment.id} className="m-1 pb-1">
                    <div>{comment.comment}</div>
                    <div>-- {comment.author}, {moment(comment.date).format('MMM DD, YYYY')}</div>
                </div>)
        })
    }else{
         comments = <div></div>
    }
    return comments;
} 

const DishDetail = (props) => {
        if(props.dish) {
            return (
                <div className="container">
                    <div className="row">
                        <RenderDishDetail dish={props.dish}/>
                        <div className="col-12 col-md-5 m-1">
                        <RenderComments dish={props.dish}/>
                        </div>
                    </div>
                </div>
            )
        }else {
            return(<div></div>)
        }
}

export default DishDetail;