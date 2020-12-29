import React, { Component } from 'react'
import formatCurrency from '../../util';
import Fade from 'react-reveal/Fade';
import Axios from 'axios';

export default class Cart extends Component {

  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      address: "",
      pickupdate:"",
      dropoffdate:"",
      phone: "",
      total: 0,
      car_id: [],
      showCheckout: false,
    }
  }

  handleInput = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  // async postData(order){
  //     console.log(order);
  //     Axios.post('/api/orders', {order})
  //       .then(function (response) {
  //         console.log(response);
  //       })
  //       .catch(function (error) {
  //         console.log(error);
  //       });
  // }

  createOrder = (event) => {
    event.preventDefault();
    let car_id = this.state.car_id;

    for(let i=0;i<this.props.cartItems.length;i++){
      this.setState({car_id:car_id.push(this.props.cartItems[i].car_id)});
    }
    // console.log(12345,this.state.car_id);
    const order = {
      user_id: this.props.user_id,
      car_id: car_id,
      pick_location: this.state.address,
      pick_up_date:this.state.pickupdate,
      drop_off_date: this.state.dropoffdate,
      phone: this.state.phone,
      cartItems: this.props.cartItems,
      total: this.props.cartItems.reduce((a, c) => a + c.price * c.count, 0),
    };
    this.props.createOrder(order);
  }


  render() {

    const { cartItems } = this.props;

    return (
      <div>
        {cartItems.length === 0 ? <div className="cart cart-header">Cart is empty </div>
          : <div className="cart cart-header">You have {cartItems.length} in the cart{" "}</div>
        }
        <div>
          <div className="cart">
            <Fade bottom cascade={true}>
              <ul className="cart-items">
                {cartItems.map(item => (
                  <li key={item.car_id}>
                    <div>
                      <img src={item.image} alt={item.brand}></img>
                    </div>
                    <div>
                      <div>{item.brand}</div>
                      <div className="right">
                        {formatCurrency(item.price)} x {item.count} {" "}
                        <button className="button" onClick={() => this.props.removeFromCart(item)}>Remove</button>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </Fade>
          </div>
          {
            cartItems.length !== 0 && (
              <div>
                <div className="cart">
                  <div className="total">
                    <div>
                      Total: {" "}
                      {formatCurrency(cartItems.reduce((a, c) => a + (c.price * c.count), 0))}
                    </div>
                    <button onClick={() => { this.setState({ showCheckout: true }); }} className="button primary">
                      Proceed
                    </button>
                  </div>
                </div>
                {
                  this.state.showCheckout &&
                  (
                    <Fade bottom descase>
                      <div className="cart">
                        <form onSubmit={this.createOrder}>
                          <ul className="form-container">
                            <li>
                              <label>Pick location</label>
                              <input name="address" type="text" required onChange={this.handleInput} />
                            </li>
                            <li>
                              <label>Pick up date</label>
                              <input name="pickupdate" type="datetime-local" required onChange={this.handleInput} />
                            </li> 
                            <li>
                              <label>Drop off date</label>
                              <input name="dropoffdate" type="datetime-local" required onChange={this.handleInput} />
                            </li>
                            <li>
                              <label>Phone</label>  
                              <input name="phone" type="text" required onChange={this.handleInput} />
                            </li>
                            <li>
                              <button className="button primary" type="submit">Checkout</button>
                            </li>
                          </ul>
                        </form>
                      </div>
                    </Fade>
                  )
                }
              </div>
            )
          }

        </div>
      </div>
    )
  }
}
