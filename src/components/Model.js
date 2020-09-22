import React, { Component } from 'react';
import styled from 'styled-components';
import { ProductConsumer } from './context';
import { ButtonContainer } from "./Button";
import {Link} from 'react-router-dom';

export default class Model extends Component {
    render() {
        return (
            <div>
                <ProductConsumer>
                    {(value)=>{
                     //   console.log(value);
                        const { modalOpen, closeModel } = value;
                        const { img, title, price } = value.modalProduct;
                        if (!modalOpen) {
                          return null;
                        } else {
                          return (
                            <ModalContainer>
                              <div className="container">
                                <div className="row">
                                  <div
                                    id="model"
                                    className="col-8 mx-auto col-md-6 col-lg-4 text-center text-capitalize"
                                  >
                                    <h5>Item Add To Cart</h5>
                                    <img
                                      src={img}
                                      className="img-fluid"
                                      alt="product"
                                    />
                                    <h5>{title}</h5>
                                    <h5 className="text-muted">
                                      Price: $ {price}
                                    </h5>
                                    <Link to="/">
                                      <ButtonContainer
                                        onClick={() => closeModel()}
                                      >
                                        store
                                      </ButtonContainer>
                                    </Link>
                                    <Link to="/cart">
                                      <ButtonContainer cart
                                        onClick={() => closeModel()}
                                      >
                                        go to cart
                                      </ButtonContainer>
                                    </Link>
                                  </div>
                                </div>
                              </div>
                            </ModalContainer>
                          );
                        }
                    }}
                </ProductConsumer>
            </div>
        )
    }
}


const ModalContainer = styled.div`
position:fixed;
top:0;
left:0;
right:0;
bottom:0;
background:(0,0,0,0.3);
display:flex;
align-items:center;
justify-content:center;
#model {
    background: var(--mainWhite);
}
`;
