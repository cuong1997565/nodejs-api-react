import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { actDeletePersonRequest } from '../../actions/index';
import { connect } from 'react-redux';

class  itemLiest extends Component {
    delete = () => {
         if(window.confirm("Ban co chac xoa khong")) {
            this.props.deletePerson(this.props.person._id);
         }
    }
    render() {
        return (
            <tr>
                <td> { this.props.index + 1} </td>
                <td> { this.props.person.name} </td>
                <td> { this.props.person.company} </td>
                <td> { this.props.person.age} </td>
                <td>
                <Link to={"/edit/"+this.props.person._id} className="btn btn-primary" style={{ marginRight: 20 }}>Edit</Link>
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
        deletePerson : (id) => {
            dispatch(actDeletePersonRequest(id));
        }
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(itemLiest);