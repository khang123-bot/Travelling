import React, { Component } from 'react';
import formatCurrency from '../../util';
import Fade from 'react-reveal/Fade';
import Modal from 'react-modal';
import Zoom from 'react-reveal/Zoom';

class Product extends Component {

    constructor(props) {
        super(props);
        this.state = {
            product: null,
            permission: false
        }
        // console.log(this.props.products)
    }

    permission = ()=>{
        let rule = this.state.permission;
        this.props.permission(rule);
    }

    openModal = (product) => {
        this.setState({ product });
    }

    closeModal = () => {
        this.setState({ product: null });
    }

    render() {

        const { product } = this.state;

        return (
            <div>
                <Fade bottom cascade={true}>
                    {
                        !this.props.products ? (
                            <div>...Loading</div>
                        ) : (
                                <ul className="products">
                                    {
                                        this.props.products.map((product) =>
                                        (
                                            <li key={product.car_id}>
                                                <div className="product">
                                                    <a href={"#" + product.car_id} onClick={() => this.openModal(product)}>
                                                        <img src={product.image} alt={product.brand}></img>
                                                        <p>{product.brand}</p>
                                                    </a>
                                                    <div className="product-price">
                                                        <div>{formatCurrency(product.price)}</div>
                                                        <button onClick={() =>{
                                                            if(this.props.loginSuccess){
                                                                this.props.addToCart(product)
                                                            }else{
                                                                alert("Login to use");
                                                                this.permission();
                                                            }
                                                        }} className="button primary">Add to Cart</button>
                                                    </div>
                                                </div>
                                            </li>
                                        )
                                        )
                                    }
                                </ul>
                            )
                    }
                </Fade>
                {
                    product && (
                        <Modal isOpen={true} onRequestClose={this.closeModal}>
                            <Zoom>
                                <button className="close-modal" onClick={this.closeModal}>x</button>
                                <div className="product-detail">
                                    <img src={product.image} alt={product.brand} />
                                    <div className="product-detail-description">
                                        <p>
                                            <strong>{product.brand}</strong>
                                        </p>
                                        <p>
                                            {product.description}
                                        </p>
                                        <div className="product-price">
                                            <div>
                                                {formatCurrency(product.price)}
                                                <button className="button primary" onClick={() => {
                                                    if(this.props.loginSuccess){
                                                        this.props.addToCart(product);
                                                    }else{
                                                        alert("Login to use");
                                                        this.permission();
                                                    }
                                                    
                                                    this.closeModal();
                                                }}>
                                                    Add to Cart
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Zoom>
                        </Modal>
                    )
                }
            </div>
        )
    }
}

export default Product;