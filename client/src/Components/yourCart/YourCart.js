import React, { Component } from 'react';
import Axios from 'axios';

export default class YourCart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      orders: []
    }
  }
  componentDidMount = () => {
    this.getOrder();
  }
  getOrder = () => {
    Axios.get(`http://localhost:8080/order/get-car-ordered-by-user/${this.props.user_id}`)
      .then((response) => {
        const data = response.data.data.result;
        this.setState({ orders: data })
      })
      .catch((e) => {
        console.log(2222, "Error retrieving data!");
      })
  }
  render() {
    return (
      <div>
      <table>
        <tbody>
          <tr>
            <th>Address</th>
            <th>Hiring date</th>
            <th>Droped off date</th>
            <th>Created date</th>
            <th>Phone</th>
          </tr>
        </tbody>
        {this.state.orders.map((item) => (
            <tr key={item.order_id}>
              {Object.values(item).map((val) => (
                <td>{val}</td>
              ))}
            </tr>
          ))}
        </table>
    </div>
    );
  }
}
