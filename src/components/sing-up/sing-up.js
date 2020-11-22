import React, { useState } from 'react';

import { auth, createUser } from '../../firebase/firebase.utils';
import FormInput from '../form-input/form-input';
import CustomBtn from '../custom-btn/custom-btn';
import './sing-up.scss';

const SingUp = () => {

    const [userData, setUserData] = useState({
        displayName: '',
        email: '',
        password: '',
        confirm: ''
    });

    const handleChange = (e) => {
        console.log(e.target.name);
        setUserData({ ...userData, [e.target.name]: e.target.value })
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        const { email, displayName, password, confirm } = userData;
        console.log(displayName);
        if (password !== confirm) {
            return alert('Pass and confirm must match');
        }

        try {
            const { user } = await auth.createUserWithEmailAndPassword(email, password);
            await createUser(user, { displayName });
            setUserData({
                displayName: '',
                email: '',
                password: '',
                confirm: ''
            })
        } catch (error) {
            console.log('Something wrong', error);
        }

    }

    return (
        <div className='sing-up'>
            <h2>I do not have account</h2>
            <span>Sinh up with your email and password</span>
            <form className='sing-up' onSubmit={handleSubmit}>
                <FormInput handleChange={handleChange} label='Your name' type='text' value={userData.displayName} name='displayName'></FormInput>
                <FormInput handleChange={handleChange} label='Email' type='email' value={userData.email} name='email'></FormInput>
                <FormInput handleChange={handleChange} label='Password' type='password' value={userData.password} name='password'></FormInput>
                <FormInput handleChange={handleChange} label='Confirm' type='password' value={userData.confirm} name='confirm'></FormInput>
                <CustomBtn type='submit'>SING UP</CustomBtn>
            </form>
        </div>
    )
}

export default SingUp;