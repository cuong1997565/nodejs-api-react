import React, { Component } from 'react';
import { actFetchAcountsRequest } from '../../actions/index';
import { connect } from 'react-redux';
import Item from './Item';
class IndexAcount extends Component {
    componentDidMount() {
        this.props.actFetchAcount();
    }
    render() {
        var { acounts } = this.props;
        var elmCount = acounts.map((acount, index) => {
            return <Item
                key={index}
                index={index}
                acount={acount}
            />
        });

        return (
            <div>
            <h3 align="center">Acount List</h3>
            <table className="table table-striped" style={{ marginTop: 20 }}>
                <thead>
                    <tr>
                        <th>STT</th>
                        <th>Person</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th> Image </th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    { elmCount }
                </tbody>
            </table>
        </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        acounts : state.acounts
    }
}

const mapDispatchToProps = (dispatch,props) => {
    return {
        actFetchAcount : () => {
            dispatch(actFetchAcountsRequest());
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(IndexAcount);