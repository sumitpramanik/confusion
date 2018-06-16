import React from 'react';
import {Card, CardImg, CardBody, CardTitle, CardText, Breadcrumb, BreadcrumbItem} from 'reactstrap';
import moment from 'moment';
import {Link} from 'react-router-dom';

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
function RenderComments({comments}) {
    if(comments){
         return comments.map(comment => {
            return (
                <li>
                <div key={comment.id} className="m-1 pb-1">
                    <div>{comment.comment}</div>
                    <div>-- {comment.author}, {moment(comment.date).format('MMM DD, YYYY')}</div>
                </div>
                </li>)
        })
    }else{
         return(<div></div>) 
    }
} 

const DishDetail = (props) => {
        if(props.dish) {
            return (
                <div className="container">
                    <div class="row mt-3">
                    <Breadcrumb>
                        <BreadcrumbItem ><Link to="/home">Home</Link></BreadcrumbItem>
                        <BreadcrumbItem ><Link to="/menu">Menu</Link></BreadcrumbItem>
                        <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
                    </Breadcrumb>
                    <div class="col-12">
                        <h3>{props.dish.name}</h3>
                        <hr/>
                    </div>
                    </div>
                    <div className="row">
                        <RenderDishDetail dish={props.dish}/>
                        <div className="col-12 col-md-5 m-1">
                        <ul>
                        <RenderComments comments={props.comments}/>
                        </ul>
                        </div>
                    </div>
                </div>
            )
        }else {
            return(<div></div>)
        }
}

export default DishDetail;