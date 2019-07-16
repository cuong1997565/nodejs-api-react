import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { actDeleteAcountRequest } from './../../actions/index';
import { connect } from 'react-redux';
class Item extends Component {
    delete = () => {
       if(window.confirm("Ban co chac xoa khong ? ")){
           this.props.actDeleteAcount(this.props.acount._id);
       }
    }
    render() {
        return (
            <tr>
                <td> {this.props.index + 1} </td>
                <td> {this.props.acount.personId.name} </td>
                <td> {this.props.acount.email} </td>
                <td> {this.props.acount.phone} </td>
                <td>
                    <img  className="img-thumbnail" width = "100px" height="100px" alt={this.props.acount.image}  src={"http://localhost:4000/"+this.props.acount.image } />
                </td>
                <td>
                <Link  className="btn btn-success" to="create-acount" style={{ marginRight: 20 }}>Add</Link>
                <Link  className="btn btn-primary" to={"edit-acount/"+this.props.acount._id} style={{ marginRight: 20 }}>Edit</Link>
                <button className="btn btn-danger" onClick={this.delete}>Delete</button>
                </td>
            </tr>
        )
    }
}

const mapStateToProps = state => {
    return {

    }
}

const mapDispatchToProps = (dispatch,props) => {
    return {
        actDeleteAcount : (id) => {
            dispatch(actDeleteAcountRequest(id));
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Item);