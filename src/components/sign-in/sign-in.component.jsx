import React from 'react'
import './sign-in.styles.scss'

class SignIn extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = 
        {
            email: '',
            password: ''
        }
    }

    render()
    {
        return(
            <div className='sign-in'>
                <h2>I already have an account</h2>
                <span>Sign-In with existing account</span>
            
            <form>
                <input name='email' value={this.state.email} required />
                <label>Email</label>
                <input name='password' value={this.state.password} required />
                <label>Password</label>
            </form>
            
            </div>
        )
    }
}


export default SignIn