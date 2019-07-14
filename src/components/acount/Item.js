import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Item extends Component {
    render() {
        return (
            <tr>
                <td> {this.props.index + 1} </td>
                <td> {this.props.acount.personId.name } </td>
                <td> {this.props.acount.email} </td>
                <td> {this.props.acount.phone} </td>
                <td>
                    <img  className="img-thumbnail" width = "100px" height="100px" alt={this.props.acount.image}  src={"http://localhost:4000/"+this.props.acount.image } />
                </td>
                <td>
                <Link  className="btn btn-success" to="create-count" style={{ marginRight: 20 }}>Add</Link>
                <Link  className="btn btn-primary" to="create-count" style={{ marginRight: 20 }}>Edit</Link>
                <button className="btn btn-danger">Delete</button>
                </td>
            </tr>
        )
    }
}

export default Item;