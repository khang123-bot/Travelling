import React, { Component } from 'react';
import AboutUs from './Components/aboutUs/AboutUs';
import Cart from './Components/cart/Cart';
import Filter from './Components/filter/Filter';
import Login from './Components/login/Login';
import Product from './Components/product/Product';
import Register from './Components/register/Register';
import YourCart from './Components/yourCart/YourCart';
// import Admin from './Components/admin/Admin';
import Axios from 'axios';

import {
  BrowserRouter,
  BrowserRouter as Router,
  Link,
  Redirect,
  Route,
  Switch
} from "react-router-dom";


import AdminPage from './Components/admin/Admin';
import Logout from './Components/logout/Logout';

class App extends Component {
  constructor() {
    super();
    this.state = {
      products: [],
      cartItems: localStorage.getItem("cartItems") ? JSON.parse(localStorage.getItem("cartItems")) : [],
      size: "",
      sort: "",
      aboutUs: false,
      changeRegister: false,
      changeLogin: false,
      registerSuccess: false,
      loginSuccess: false,
      email: "",
      user_id: "",
      car_id: [],
      cart: false,
      changeCart: false,
      changeAdmin: false,
      role:'visitor'
    }
  }
  componentDidMount = () => {
    this.getProduct();
  }
  getProduct = () => {
    Axios.get('http://localhost:8080/order/list-all-cars')
      .then((response) => {
        const data = response.data.data.result;
        this.setState({ products: data });
        // console.log(this.state.products);
      })
      .catch((e) => {
        console.log(2222, "Error retrieving data!");
      })
  }
  createUser = async (checkEmail, order) => {
    const checkEmailAPI = await Axios.post("http://localhost:8080/user/check-email-exist", checkEmail);
    if (checkEmailAPI.data.data.result === "EXISTED") {
      alert("Email existed already");
      document.getElementById("email").value = "";
    } else {
      await Axios.post("http://localhost:8080/user/create-user", order)
        .then((res) => {
          if (res.data.status === "INVALID") {
            alert("Email is not right format");
            document.getElementById("email").value = "";
          } else {
            if (res.data.status === "INVALID PASSWORD") {
              alert("WRONG CONFIRMED PASSWORD INFORMATION");
              document.getElementById("psw").value = "";
              document.getElementById("psw-repeat").value = "";
            }
            else {
              this.setState({
                registerSuccess: true,
              })
              window.location.href = "/login"
              alert("REGISTER SUCCESSFULLY");
            }
          }
        });
    }
  }
  login = async (infor) => {
    const loginResult = await Axios.post("http://localhost:8080/user/login", infor);
    if (loginResult.data.data.result !== "LOGIN FAILED") {
      alert("LOGIN SUCCESSFULLY");
      this.setState({
        loginSuccess: true,
        changeLogin: false,
        changeRegister: false,
        user_id: loginResult.data.data.result.user_id,
        role: loginResult.data.data.result.role,
      })
      var html = `${loginResult.data.data.result.username}`;
      document.getElementById("login").innerHTML = html;
      document.getElementById("register").classList.add("visible");
    } else {
      alert("LOGIN FAILED");
      document.getElementById("username").value = "";
      document.getElementById("password").value = "";
    }
  }
  permission = (value) => {
    if (!value) {
      this.setState({
        changeLogin: true
      })
    }
  }
  addToCart = (product) => {
    const cartItems = this.state.cartItems.slice();
    let alreadyInCart = false;
    cartItems.forEach(item => {
      if (item.car_id === product.car_id) {
        item.count++;
        alreadyInCart = true;
      }
    })
    if (!alreadyInCart) {
      cartItems.push({ ...product, count: 1 });
    }
    this.setState({
      cartItems
    });
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }
  sortProducts = (event) => {
    const sort = event.target.value;
    this.setState(state => ({
      sort: sort,
      products: this.state.products.slice().sort((a, b) => (sort === "lowest" ? ((a.price > b.price) ? 1 : -1)
        : sort === "highest" ? ((a.price < b.price) ? 1 : -1)
          : ((a._id < b._id) ? 1 : -1)))
    }))
  }
  createOrder = async (order) => {
    for (let i = 0; i < order.car_id.length; i++) {
      console.log(order)
      let url = `http://localhost:8080/order/order-car/${this.state.user_id}/${order.car_id[i]}`;
      await Axios.post(url, order)
        .then((response) => {
          const data = response.data.status;
          if(data == "INVALID"){
            alert("Can not create this order, Please check your date");
          }else{
            this.setState({ cart: true });
            alert("Create order successfully");
          }
        })
        .catch((e) => {
          console.log(11111, "Error retrieving data!");
        })
    }
    
  }
  removeFromCart = (product) => {
    const cartItems = this.state.cartItems.slice();
    this.setState({ cartItems: cartItems.filter(x => x.car_id !== product.car_id) })
    localStorage.setItem("cartItems", JSON.stringify(cartItems.filter(x => x.car_id !== product.car_id)));
  }

  render() {
    return (

      <div>
        <div className="grid-container">
          <header>
            <a href="/">K&K Chinese Boutique</a>
            <Router>
              <span><Link to="/aboutUs" onClick={() => { this.setState({ aboutUs: true }) }}>About Us</Link></span>
              <div className="user">
                <Link to="/login" className="login" id="login" onClick={() => { this.setState({ changeRegister: false, changeLogin: true }) }}>Log in</Link>
                <Link to="/register" className="register" id="register" onClick={() => { this.setState({ changeLogin: false, changeRegister: true }) }}>Register</Link>
                <Link to="/cart" onClick={() => {
                  if (this.state.cart) {
                    this.setState({ changeCart: true });
                  }
                }}>Cart</Link>
                  {/* <Link to="/admin" className="login" onClick={() => { this.setState({ changeAdmin: true }) }}>Admin</Link> */}
              </div>
              <Switch>
                {/* <Route exact path="/login" component={Login} /> */}
                {/* <Route exact path="/admin" component={AdminPage} /> */}
                {/* <Route exact path="/logout" component={Logout} /> */}
                <Route exact path="/aboutUs" component={AboutUs} />
                {/* <Route exact path="/register" component={Register} /> */}
              </Switch>
            </Router>
          </header>
          <main>
            {
              this.state.aboutUs ? (
                <AboutUs /> 
              ) :
                this.state.changeLogin ? (
                  <Login login={this.login} />
                ) : this.state.registerSuccess ? (
                  <Login login={this.login} />
                ) : this.state.changeCart ? (
                  <YourCart user_id={this.state.user_id} />
                ) : this.state.changeRegister ? (
                  <Register createUser={this.createUser} />
                ) : this.state.role==="admin" ? (
                  <AdminPage />
                ) : this.state.loginSuccess ? (
                  <div className="content">
                    <div className="main">
                      <Filter count={this.state.products.length}
                        size={this.state.size}
                        sort={this.state.sort}
                        sortProducts={this.sortProducts}>
                      </Filter>
                      <Product products={this.state.products} permission={this.permission} loginSuccess={this.state.loginSuccess} addToCart={this.addToCart} />
                    </div>
                    <div className="sidebar">
                      <Cart cartItems={this.state.cartItems} user_id={this.state.user_id} car_id={this.state.products} removeFromCart={this.removeFromCart} createOrder={this.createOrder} />
                    </div>
                  </div>
                ) : (
                              <div className="content">
                                <div className="main">
                                  <Filter count={this.state.products.length}
                                    size={this.state.size}
                                    sort={this.state.sort}
                                    filterProducts={this.filterProducts}
                                    sortProducts={this.sortProducts}>
                                  </Filter>
                                  <Product products={this.state.products} permission={this.permission} loginSuccess={this.state.loginSuccess} addToCart={this.addToCart} />
                                </div>
                                <div className="sidebar">
                                  <Cart cartItems={this.state.cartItems} removeFromCart={this.removeFromCart} createOrder={this.createOrder} />
                                </div>
                              </div>
                            )
            }
          </main>
          <footer>All right is reserved.</footer>
        </div>
      </div>
    )
  }
}

export default App;