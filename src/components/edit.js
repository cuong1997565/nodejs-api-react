import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { actEditPersonRequest, actUpdatePersonRequest } from './../actions/index';
import { connect } from 'react-redux';
class Edit extends Component {
    constructor(props) {
        super(props);
        this.state = {
            _id : '',
            name: '',
            company: '',
            age: 0
        };
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
        this.props.actUpdatePerson(this.state);
        this.props.history.push('/index');
    }
    componentDidMount() {
        const id = this.props.match.params.id;
        if(id) {
            this.props.actEditPerson(id);
        }
    }
    
    componentWillReceiveProps(nextProps) {
        if(nextProps && nextProps.itemEditing) {
            var {itemEditing} = nextProps;
            this.setState({
                _id : itemEditing.person._id,
                name : itemEditing.person.name,
                company : itemEditing.person.company,
                age : nextProps.itemEditing.person.age
            })
        }
    }
    render() {
        return (
            <div style={{ marginTop: 10 }}>
                <h3 align="center">Update Person Info</h3>
                <form onSubmit={this.onSubmit} >
                    <div className="form-group">
                        <label>Person Name:  </label>
                        <input
                            type="text"
                            className="form-control"
                            name="name"
                            value={this.state.name}
                            onChange={this.onChange}
                        />
                    </div>
                    <div className="form-group">
                        <label>Company Name: </label>
                        <input type="text"
                            className="form-control"
                            name="company"
                            value={this.state.company}
                            onChange={this.onChange}
                        />
                    </div>
                    <div className="form-group">
                        <label>Age: </label>
                        <input type="text"
                            name="age"
                            className="form-control"
                            value={this.state.age}
                            onChange={this.onChange}
                        />
                    </div>
                    <div className="form-group">
                        <Link to={"/index/"} className="btn btn-danger" style={{ marginRight: 10 }}>Back</Link>
                        <input
                            type="submit"
                            value="update"
                            className="btn btn-primary" />
                    </div>
                </form>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        itemEditing: state.itemEditing,
    }
}

const mapDispatchToProps = (dispatch,props) => {
    return {
        actEditPerson : (id) => {
            dispatch(actEditPersonRequest(id));
        },
        actUpdatePerson : (persons) => {
             dispatch(actUpdatePersonRequest(persons));
        }
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(Edit);