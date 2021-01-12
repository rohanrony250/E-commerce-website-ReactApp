import React from 'react';
import './sign-in.styles.scss';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import {LoginWithGoogle} from '../../Firebase/firebase-utils';

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
                
                <h3 className='title'>I already have an account</h3>
                <span>Sign-In with existing account</span>

            
                <form onSubmit={this.handleSubmit}>
                    <FormInput 
                        name='email'
                        type='email' 
                        value={this.state.email} 
                        handleChange={this.handleChange}
                        label='Email'
                        required
                    />
                    
                    <FormInput 
                        name='password' 
                        type='password' 
                        value={this.state.password} 
                        handleChange={this.handleChange}
                        label='Password'
                        required 
                    />
                    <div className='buttons'>
                        <CustomButton type='submit' styles='btn btn-outline-success button-1'>LOGIN</CustomButton>  
                        <CustomButton onClick={LoginWithGoogle} type='button' styles='btn btn-outline-primary'>LOGIN WITH GOOGLE</CustomButton>    
                    </div> 

                </form>

            </div>
        )
    }
}


export default SignIn