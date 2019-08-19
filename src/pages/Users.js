//React
import React, { Component } from 'react';
import { connect } from 'react-redux';
// Actions
import * as usersActions from '../actions/usersActions';
//Components
import Spiner from "../components/general/Spinner";
import Fatal from "../components/general/Fatal";
import Table from "../components/Users/Table";

// Users Page
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
//Hey yo' What's up?? this is why the reducers get into the props JEJE fucking love redux ⚛
const mapStateToProps = (reducers) => {
  return reducers.usersReducer;
}
//pst... use the connect function and see the magic
export default connect(mapStateToProps, usersActions)(Users);
