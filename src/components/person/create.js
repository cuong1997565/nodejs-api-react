import React, { Component } from 'react';
import { actAddPersonRequest } from '../../actions/index';
import { connect } from 'react-redux';
class Create extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            company: '',
            age: 0
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
        var { name, company, age } = this.state;
        var persons = {
            name : name,
            company : company,
            age : age
        };

        this.props.actAddPerson(persons);
        this.props.history.push('/index');

    }
    render() {
        return (
            <div style={{ marginTop: 10 }}>
                <h3>Add New Business</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Add Person Name:  </label>
                        <input
                            type="text"
                            className="form-control"
                            name="name"
                            value={this.state.name}
                            onChange={this.onChange} />
                    </div>
                    <div className="form-group">
                        <label>Add Business Name: </label>
                        <input
                            type="text"
                            className="form-control"
                            name="company"
                            value={this.state.company}
                            onChange={this.onChange} />
                    </div>
                    <div className="form-group">
                        <label>Add GST Number: </label>
                        <input
                            type="text"
                            className="form-control"
                            name="age"
                            value={this.state.age}
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

const mapStateToProps = state => {
    return {
       
    }
}

const mapDispatchToProps = (dispatch,props) => {
    return {
        actAddPerson : (persons) => {
            dispatch(actAddPersonRequest(persons));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Create);