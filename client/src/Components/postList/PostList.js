import React, { Component, Fragment } from 'react';
// import { get } from '../../../../server/routes/adminRouter';
import './postlist.css';
import Axios from 'axios';
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css

export default class PostList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            username: "@gmail.com",
            users: this.props.users,
            removeId: ""
        }
    }
    componentDidUpdate = (preProps,prevState) => {
        if(prevState.users !== this.state.users){
            this.setState({users:this.props.users});
        }
    }
    getOrder = () => {
    }
    handleInput = (event) => {
            this.setState({
                [event.target.name]: event.target.value
            });
            setTimeout(async () => {
                const email = {
                    username: this.state.username || "@gmail.com"
                }
                await Axios.post('http://localhost:8080/admin/search-user', email)
                    .then((response) => {
                        const data = response.data.data.result;
                        this.setState({ users: data })
                    })
                    .catch((e) => {
                        console.log(2222, "Error retrieving data!");
                    })
            }, 2000)
    }
    deleteUser = (id) => {
        confirmAlert({
            title: 'Confirm to delete user',
            message: 'Are you sure to do this.',
            buttons: [
                {
                    label: 'Yes',
                    onClick: async () => {
                        await Axios.delete(`http://localhost:8080/admin/${id}`)
                            .then((response) => {
                                const data = response.data.data.result;
                                if (data === "SUCCESS REMOVE") {
                                    this.getOrder();
                                    alert("Remove successully");
                                }
                            })
                            .catch((e) => {
                                console.log(2222, "Error retrieving data!");
                            })
                    }
                },
                {
                    label: 'No',
                }
            ]
        });

    }
    render() {
        return (
            <div>
                <input type="text" placeholder="Enter Username" name="username" id="username" required onChange={this.handleInput} />
                <span><button onClick={() => { this.deleteUser(this.state.removeId) }}>Delete</button>
                    <button>Edit</button></span>
                <table>
                    <tr>
                        <td>User ID</td>
                        <td>Username</td>
                        <td>Role</td>
                        <td></td>
                    </tr>
                    {
                        this.state.users.length < 1 ? (
                            <div>No results</div>
                        ) : (
                                this.state.users.map((item) => (
                                    <tr key={item.user_id} id={item.user_id} onClick={() => {
                                        let getId = document.getElementById(item.user_id).id;
                                        this.setState({ removeId: getId })
                                    }}>
                                        {Object.values(item).map((val) => (
                                            <td>{val}</td>
                                        ))}
                                        <input type="checkbox" />
                                    </tr>
                                )
                                )
                            )
                    }

                </table>
            </div>
        );
    }
}
