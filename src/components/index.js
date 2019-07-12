import React, { Component } from 'react';
import Item from './itemLiest';
import { actFetchPersonsRequest } from './../actions/index';
import { connect } from 'react-redux';
class Index extends Component {
    componentDidMount() {
        this.props.actFetchPerson();
    }
    render() {
        var { persons } = this.props;
        var elmTasks = persons.map((person, index) => {
            return <Item
                key={index}
                index={index}
                person={person}
            />
        });
        return (
            <div>
                <h3 align="center">Persons List</h3>
                <table className="table table-striped" style={{ marginTop: 20 }}>
                    <thead>
                        <tr>
                            <th>STT</th>
                            <th>Name</th>
                            <th>Company</th>
                            <th>Age</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        { elmTasks }
                    </tbody>
                </table>
            </div>
        )
    }
}

const mapStateToProps = state => {
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

export default connect(mapStateToProps, mapDispatchToProps)(Index);