import React  from 'react';
import {Card, CardImg, CardImgOverlay, CardTitle, Breadcrumb, BreadcrumbItem} from 'reactstrap';
import {Link} from 'react-router-dom';

const RenderMenuItem = (props) => {
    return (
        <Link to={`/menu/${props.dish.id}`}>
            <Card  className='p-2'>
                <CardImg src={props.dish.image} alt={props.dish.name} />
                <CardImgOverlay>
                    <CardTitle>{props.dish.name}</CardTitle>
                </CardImgOverlay>
            </Card>
        </Link>
    )
}

const Menu = (props) =>{
    const menu = props.dishes.map(dish => {
        return (
            <div  key={dish.id} className="col-12 col-md-5 m-1">
                <RenderMenuItem dish={dish}/>
            </div>
        );
    });                 

    return (
        <div className="container">
        <div class="row mt-3">
        <Breadcrumb>
            <BreadcrumbItem ><Link to="/home">Home</Link></BreadcrumbItem>
            <BreadcrumbItem active>Menu</BreadcrumbItem>
        </Breadcrumb>
        <div class="col-12">
            <h3>Menu</h3>
            <hr/>
        </div>
        </div>
            <div className="row">
                {menu}
            </div>
        </div>
    );
} 

export default Menu;