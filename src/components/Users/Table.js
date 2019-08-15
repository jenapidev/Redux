import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'

const Table = (props) => {
    
    const ponerFilas = () => (
        props.users.map((user, key) => (
            <tr key={ user.id }>
                <td>
                    {user.name}
                </td>
                <td>
                    {user.email}
                </td>
                <td>    
                    {user.website}
                </td>
                <td>
                    <Link to={ `/posts/${key}` }>
                        <div className="far fa-eye"></div>
                    </Link>
                </td>
            </tr>
    ))
    );
    
    return(
        <div>
            <table className="table">   
            <thead>
                <tr>
                <th>name</th>
                <th>email</th>
                <th>website</th>
                </tr>
            </thead>
            <tbody>
                {ponerFilas()}
            </tbody>
            </table>
        </div>
    );
}

const mapStateToProps = (reducers) => {
    return reducers.usersReducer;
}

export default connect(mapStateToProps)(Table);