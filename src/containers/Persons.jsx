import React, { Component } from 'react';
import {connect} from 'react-redux'
import { bindActionCreators } from 'redux';
//import snackUpdate from '../actions/snackDeptUpdate';
import Person from '../components/Person/Person';
import AddPerson from '../components/AddPerson/AddPerson';

class Persons extends Component {


    handleQuantity = (operator, index) => {
        this.props.AddPerson(operator, index)
    }

    render() {
        // console.log('from snackdept component: ', this.props.data)
        return (
            <div>
                <AddPerson
                personAdded={()=> this.handleQuantity(this.props.personAdded)}
                />
                <ul>
                    {
                        this.props.data.map((personAdded, index) => (
                            <div key={index}>
                                <li>name={person.names} age={person.age}</li>
                            </div>
                        ))
                    }
                </ul>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        data: state.snacks
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
     addPerson: addPerson,
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Person);