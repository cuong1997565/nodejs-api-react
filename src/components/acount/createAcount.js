import React, { Component } from 'react';
import { actFetchPersonsRequest } from '../../actions/index';
import { connect } from 'react-redux';

class createAcount extends Component {
    constructor(props) {
        super(props);
        this.state = {
            personId: '',
            email: '',
            password :'',
            phone: '',
            image: ''
        }
    }
    onChange = (event) => {
        var target = event.target;
        var name = target.name;
        var value = target.value;
        this.setState({
            [name]: value
        })
    }

    onSubmit = (event) => {
        event.preventDefault();
        console.log(this.state);
    }

    componentDidCatch(){
        this.props.actFetchPerson();
    }

    render() {
        console.log(this.props.persons);
        return (
            <div style={{ marginTop: 10 }}>
                <h3> Add New Acount </h3>
                <form onSubmit={this.onSubmit} encType="multipart/form-data">
                    <div className="form-group">
                        <label>Person</label>
                        <select 
                            className="form-control" 
                            value={this.state.personId} 
                            onChange={this.onChange}
                            name="personId">
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label>Email:</label>
                        <input
                            type="email"
                            className="form-control"
                            name="email"
                            value={this.state.email}
                            onChange={this.onChange} />
                    </div>
                    <div className="form-group">
                        <label>Password:</label>
                        <input
                            type="password"
                            className="form-control"
                            name="password"
                            value={ this.state.password }
                            onChange={this.onChange} />
                    </div>
                    <div className="form-group">
                        <label>Phone:</label>
                        <input
                            type="number"
                            className="form-control"
                            name="phone"
                            value={ this.state.phone }
                            onChange={this.onChange} />
                    </div>
                    <div className="form-group">
                        <label>Image:</label>
                        <input
                            type="file"
                            className="form-control"
                            name="image"
                            value={ this.state.image }
                            onChange={this.onChange} />
                    </div>


                    <div className="form-group">
                        <input type="submit" value="Register Business" className="btn btn-primary" />
                    </div>
                </form>
            </div>
        )
    }
}

const maoStateToProps = state => {
    return {
        persons : state.persons
    }
}

const mapDispatchToProps = (dispatch,props) => {
    return {
        actFetchPerson : () => {
            dispatch(actFetchPersonsRequest());
        }
    }
}
export default connect(maoStateToProps,mapDispatchToProps)(createAcount);