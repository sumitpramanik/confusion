import React  from 'react';
import {Card, CardImg, CardImgOverlay, CardTitle} from 'reactstrap';

const RenderMenuItem = (props) => {
    return (
        <Card  className='p-2' onClick={()=>{props.onClick(props.dish.id)}}>
            <CardImg src={props.dish.image} alt={props.dish.name} />
            <CardImgOverlay>
                <CardTitle>{props.dish.name}</CardTitle>
            </CardImgOverlay>
        </Card>
    )

}

const Menu = (props) =>{
        const menu = props.dishes.map(dish => {
            return (
                <div  key={dish.id} className="col-12 col-md-5 m-1">
                <RenderMenuItem dish={dish} onClick={props.onClick}/>
                </div>
            );
        });

        return (
            <div className="container">
                <div className="row">
                 {menu}
                </div>
            </div>
        );
} 

export default Menu;