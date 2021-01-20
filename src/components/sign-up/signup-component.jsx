import React from 'react'
import { auth, createUserProfileDocument } from '../../Firebase/firebase-utils'
import CustomButton from '../custom-button/custom-button.component'
import FormInput from '../form-input/form-input.component'
import './signup-styles.scss'

class SignUp extends React.Component
{
    constructor()
    {
        super()
        this.state = {
            displayName : '',
            email : '',
            password : '',
            confirmpassword : ''
        }
    }

    handleSubmit = async event =>
    {
        event.preventDefault()
        const { displayName, email, password, confirmpassword } = this.state;
        if(password != confirmpassword)
        {
            alert('Passwords do not match, please enter again.')
            return
        }

        try
        {
            const { user } = await auth.createUserWithEmailAndPassword(email,password) 
            await createUserProfileDocument(user , { displayName })
            this.setState({
                displayName : '',
                email : '',
                password : '',
                confirmpassword : ''
            })
        }
        catch(err)
        {
            console.log(err)
        }
    }

    handleChange = event =>
    {
        const { name, value } = event.target

        this.setState({[name]:value})
    }

    render(){
        const { displayName, email, password, confirmpassword } = this.state;
        return(
            <div className='sign-up'>
                <h2 className='title'>
                    
                    I do not have an account                
                
                </h2>
                <span>
                    Sign up with your email and password
                </span>
                
                <form onSubmit={this.handleSubmit} className='sign-up-form'>
                    <FormInput
                        label = 'Name'
                        type = 'text'
                        name = 'displayName'
                        onChange = {this.handleChange}
                        value = {displayName}
                        required
                    />
                    <FormInput
                        label = 'Email'
                        type = 'email'
                        name = 'email'
                        value = {email}
                        onChange = {this.handleChange}
                        required
                    />
                    <FormInput
                        label = 'Password'
                        type = 'password'
                        name = 'password'
                        value = {password}
                        onChange = {this.handleChange}
                        required
                    />
                    <FormInput
                        label = 'Confirm Password'
                        type = 'password'
                        name = 'confirmpassword'
                        value = {confirmpassword}
                        onChange = {this.handleChange}
                        required
                    />
                    <CustomButton styles = 'btn btn-outline-secondary btn-block'>
                        Sign Up
                    </CustomButton>
                </form>
            </div>
        )
    }
}


export default SignUp
