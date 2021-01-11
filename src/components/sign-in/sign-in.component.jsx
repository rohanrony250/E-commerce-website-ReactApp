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

    handleSubmit = e =>
    {
        e.preventDefault();
        this.setState({email:'',password:''})
    }

    handleChange = e =>
    {
        const{name,value} = e.target
        this.setState({[name]: value});
    }

    render()
    {
        return(
            <div className='sign-in'>
                <h1>LOGIN</h1>
                <h3>I already have an account</h3>
                <span>Sign-In with existing account</span>

            
                <form onSubmit={this.handleSubmit}>
                    <input 
                        name='email'
                        placeholder='EMAIL' 
                        type='email' 
                        value={this.state.email} 
                        onChange={this.handleChange}
                        required
                    />
                    
                    <input 
                        name='password'
                        placeholder='PASSWORD' 
                        type='password' 
                        value={this.state.password} 
                        onChange={this.handleChange}
                        required 
                    />
                    
                    <button className='btn btn-primary' type='submit'>LOGIN</button>
                    
                </form>
            </div>
        )
    }
}


export default SignIn