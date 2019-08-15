import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as usersActions from '../../actions/usersActions';
import Spiner from "../general/Spinner";
import Fatal from "../general/Fatal";
import Table from "./Table";

class Users extends Component {

  componentDidMount()  {
    if (!this.props.users.length){
      console.log('Bring them to me');
      this.props.getUsers()
    }
    //this.props.getAll();
  }



  ponerContenido = () => {
    if (this.props.loading){
      return  <Spiner/>;   
    }

    if (this.props.error) {
      return (
        <Fatal message={this.props.error}/>
      );
    }

    return (
      <Table/>
    )
  }

  render() {
    console.log(this.props.loading);
    return(
      <div>
        {this.ponerContenido()}
      </div>
      
    );
  }

}

const mapStateToProps = (reducers) => {
  return reducers.usersReducer;
}

export default connect(mapStateToProps, usersActions)(Users);
