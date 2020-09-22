import React, { Component } from 'react';
import { ProductConsumer } from "./context";
import {Link} from 'react-router-dom';
import {ButtonContainer} from './Button';

export default class Details extends Component {
    render() {
        return (
          <ProductConsumer>  
                {(value) => {
                //  console.log(value);
                     const {
                       id,
                       company,
                       img,
                       info,
                       price,
                       title,
                       inCart,
                     } = value.detailProduct;      
                     return (
                       <div className="container py-5">
                         <div className="row">
                           <div className="col-10 mx-auto text-slanted text-blue my-5">
                             <h1>{title}</h1>
                           </div>
                         </div>
                         <div className="row">
                           <div className="col-10 mx-auto col-md-6 my-3">
                             <img
                               src={img}
                               className="img-fluid"
                               alt="product"
                             />
                           </div>
                           <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
                             <h2>Model: {title}</h2>
                             <h4 className="text-title text-upppercase text-muted mt-3 mb-2">
                               Made By :
                               <span className="text-upppercase">
                                 {company}
                               </span>
                             </h4>
                             <h4 className="text-blue text-upppercase">
                               <strong>
                                 Price :<span>$</span>
                                 {price}
                               </strong>
                             </h4>
                             <p className="text-capitalize font-weight-bold mt-3 mb-0">
                               Some info about product:
                             </p>
                             <p className="text-muted lead">{info}</p>
                             <div>
                               <Link to="/">
                                 <ButtonContainer>
                                   Back to products
                                 </ButtonContainer>
                               </Link>
                               <ButtonContainer
                                 cart
                                 onClick={() => {
                                 value.addToCart(id);
                                 value.openModel(id);
                                 }}
                                 disabled = {inCart ? true : false}>
                                 {inCart ? "inCart" : "add to cart"}
                               </ButtonContainer>
                             </div>
                           </div>
                         </div>
                       </div>
                     );
                }}
          </ProductConsumer>
        );
    }
}
