import React, { Component } from 'react';
import { actEditAcountRequest, actFetchPersonsRequest, actUpdateAcountRequest } from '../../actions/index';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class editAcount extends Component {
    constructor(props) {
        super(props);
        this.state = {
            _id : '',
            personId: '',
            email: '',
            password: '',
            phone: '',
            imageCurrent: '',
            image: ''
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

    onChangeImage = (event) => {
        this.setState({
            image: event.target.files[0]
        })
    }

    async componentDidMount() {
        const id = this.props.match.params.id;
        if (id) {
            await this.props.actEditAcount(id);
            await this.props.actFetchPersons();

        }
    }

    componentWillReceiveProps(nextProps) {
        var { itemEdittingAcount } = nextProps;
        if (nextProps && nextProps.itemEdittingAcount) {
            this.setState({
                _id : itemEdittingAcount._id,
                personId: itemEdittingAcount.personId._id,
                email : itemEdittingAcount.email,
                password : itemEdittingAcount.password,
                phone : itemEdittingAcount.phone,
                imageCurrent : itemEdittingAcount.image
            });
        }
    }

    onSubmit = (event) => {
        event.preventDefault();
        let formData = new FormData();
        formData.append('_id', this.state._id);
        formData.append('personId', this.state.personId);
        formData.append('email', this.state.email);
        formData.append('password', this.state.password);
        formData.append('phone', this.state.phone);
        formData.append('image', this.state.image);
        this.props.actUpdateAcount(formData);
        this.props.history.push('/index-count');
    }

    render() {
        var { persons } = this.props;
        var elmAcount = persons.map((person, index) => {
            return <option key={index} value={person._id}> {person.name} </option>
        });
        return (
            <div style={{ marginTop: 10 }}>
                <h3 align="center">Update Acount Info</h3>
                <form onSubmit={this.onSubmit} encType="multipart/form-data">
                    <div className="form-group">
                        <label>Person Name:  </label>
                        <select
                            className="form-control"
                            value={this.state.personId}
                            onChange={this.onChange}
                            name="personId"
                        >
                            {elmAcount}
                        </select>
                    </div>
                    <div className="form-group">
                        <label>Email :</label>
                        <input 
                            className="form-control"
                            type="email"
                            value={this.state.email}
                            onChange={this.onChange}
                            name="email"
                        />
                    </div>
                    <div className="form-group">
                        <label> Password : </label>
                        <input 
                            className="form-control"
                            type="password"
                            value={ this.state.password }
                            onChange = { this.onChange }
                            name="password"
                        />
                    </div>
                    <div className="form-group">
                        <label> Phone : </label>
                        <input 
                            className="form-control"
                            type="number"
                            value={ this.state.phone }
                            onChange = { this.onChange }
                            name="phone" 
                        />
                    </div>
                    <div className="form-group">
                        <label> Image : </label>
                        <img 
                        src={"http://localhost:4000/"+this.state.imageCurrent}
                        alt={ this.state.imageCurrent}
                        width="200"
                        height="200"
                        style = {{ marginLeft: 15 }}
                        />
                        <input
                            style = {{ marginTop: 10 }}
                            className="form-control"
                            type="file"
                            onChange = { this.onChangeImage }
                            name = "image"
                        />
                    </div>
                    <div className="form-group">
                        <Link to={"/index/"} className="btn btn-danger" style={{ marginRight: 10 }}>Back</Link>
                        <input
                        type="submit"
                        value="update"
                        className="btn btn-primary" 
                        />
                    </div>
                </form>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        itemEdittingAcount: state.itemEdittingAcount,
        persons: state.persons
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        actEditAcount: (id) => {
            dispatch(actEditAcountRequest(id));
        },
        actFetchPersons: () => {
            dispatch(actFetchPersonsRequest());
        },
        actUpdateAcount: (acount) => {
            dispatch(actUpdateAcountRequest(acount));
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(editAcount);
