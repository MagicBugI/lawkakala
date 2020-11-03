import React, { useState } from 'react';

import './sing-in.scss';

import FormInput from '../form-input/form-input';
import CustomBtn from '../custom-btn/custom-btn';
import { singInWithGoogle , auth } from '../../firebase/firebase.utils';

const SingIn = () => {

    const [userData, setUserData] = useState({ email: '', password: '' });

    const handleSubmit = async(e) => {
        e.preventDefault();

        const {email , password } = userData;

        try{
            const user = await auth.signInWithEmailAndPassword(email , password);
            console.log(user);
            setUserData({ email: '', password: '' })
        }catch(error){
            console.log(error);
        }
    }
    const handleChange = (e) => {
        const { value, name } = e.target;

        setUserData({ ...userData, [name]: value });
    }

    return (
        <div className='sing-in'>
            <h2>I already have account</h2>
            <span>Sing in with your email and password</span>

            <form onSubmit={handleSubmit}>
                <FormInput handleChange={handleChange} label={'email'} type='email' value={userData.email} name='email' ></FormInput>
                <FormInput handleChange={handleChange} label={'password'} type='password' value={userData.password} name='password' ></FormInput>
                <div className='buttons'>
                    <CustomBtn type='submit'>Sing In</CustomBtn>
                    <CustomBtn onClick={singInWithGoogle} isGoogleBtn>Sing In with Google</CustomBtn>
                </div>
            </form>
        </div>
    )
}

export default SingIn;