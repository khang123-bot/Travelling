import React, {useState, useEffect} from 'react';
import './todolist.css'
const TodoList = (props)=>{
    const [orders,setOrders] = useState([]);

    useEffect(() => {
        setOrders(props.orders)
    }, [props.orders])

    const getItem = (id) => {
        props.getItem(id)
    }

    const onRemove = (id) => {
        props.onRemove(id);
    }


    return (
        <ul id="myUL">
        {/*<li className="checked">Pay bills</li>*/}
        {
            orders.length > 0 ? orders.map((value, key) => <li key={key} ><div onClick={() => getItem(value.id)}>{value.title}</div> <div onClick={() => onRemove(value.id)} style={{textAlign: 'right', float: "right"}}><button>x</button></div></li>) : (
                <div className="text-center">
                    <div className="spinner-border" role="status">
                        <span className="sr-only">Loading...</span>
                    </div>
                </div>
            )
        }
    </ul>
    )
}
export default TodoList;