import React, { Component } from 'react';
import { actFetchPersonsRequest, actAddAcountRequest } from '../../actions/index';
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

    onChangeHandler=(event)=>{
        this.setState({
            image: event.target.files[0]
          })
    
    }
    

    onSubmit = (event) => {
        event.preventDefault();
        let formData = new FormData();
        formData.append('personId', this.state.personId);
        formData.append('email', this.state.email);
        formData.append('password', this.state.password);
        formData.append('phone', this.state.phone);
        formData.append('image', this.state.image);
        this.props.actAddAcount(formData);
        this.props.history.push('/index-count');
    }

    componentWillMount(){
        this.props.actFetchPerson();
    }

    render() {
        var { persons } = this.props;
        var elmAcount =  persons.map((person, index) => {
            return   <option key={index}  value={person._id}>{person.name}</option>
        });
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
                           {elmAcount}
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
                        name="file" 
                        className="form-control" 
                        onChange={this.onChangeHandler}/>

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
        },
        actAddAcount : (acount) => {
            dispatch(actAddAcountRequest(acount));
        }
    }
}
export default connect(maoStateToProps,mapDispatchToProps)(createAcount);