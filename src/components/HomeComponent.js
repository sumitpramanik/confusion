import React from 'react';
import {Card, CardImg, CardBody, CardTitle, CardSubtitle, CardText} from 'reactstrap';
import {Loading} from './LoadingComponent.js';

const Home = (props) => {

    const RenderCard = ({item, isLoading, dishesErrMess}) => {
            if(isLoading) {
                return(
                    <Loading/>
                )
            }
            else if (dishesErrMess) {
                return (
                    <h4>{dishesErrMess}</h4>
                )
            }
            else {
                return (
                    <Card>
                        <CardImg src={ item.image }/>
                        <CardBody>
                            <CardTitle>{ item.name }</CardTitle>
                            { item.designation ? <CardSubtitle>{ item.designation }</CardSubtitle> : null }
                            <CardText>{ item.description }</CardText>
                        </CardBody>
                    </Card>
                )
            }


    }
    return (
        <div className="container">
            <div className="row align-items-start">
                <div className="col-12 col-md m-1">
                    <RenderCard item={props.dish} isLoading={props.dishesLoading} dishesErrMess={props.dishesErrMess}/>
                </div>
                <div className="col-12 col-md m-1">
                    <RenderCard item={props.promotion}/>
                </div>
                <div className="col-12 col-md m-1">
                    <RenderCard item={props.leader}/>
                </div>
            </div>
        </div>
    )
}

export default Home;