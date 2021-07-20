import React from 'react'
import ManageTable from './ManageTable';

class ManageInventory extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            password: 'admin',
            authorize: false
        };
        this.authorize = this.authorize.bind(this);
    }

    authorize(e) {
        const password = e.target.querySelector(
            'input[type="password"]').value;
            const auth = password === this.state.password;
            this.setState({
                authorized: auth
            });
        
    }

    render() {
        const login = (
            <form action="#" onSubmit={this.authorize} >
            <input type="password" placeholder="Password" />
            <input type="submit" value="login"/>
            </form>
        )
        const tourManagerTable = (
            <ManageTable />
        );

        return (
            <div id="authorization">
                
                <h3>
                    
                    {this.state.authorized ? ManageInventory : 'Please authorize to manage inventory'}
                </h3>
                    {this.state.authorized? tourManagerTable  : login}
                   
                    
            </div>
        )
    }
  
}

export default ManageInventory;