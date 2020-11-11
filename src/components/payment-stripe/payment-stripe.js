import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
const StripeCheckoutBtn = ({price})=>{
    const publishKey = 'pk_test_51HlA56F5TqBXtdv7yakehxyL67dmK47B8alGlZhA3DMWRtfIrjyTry9OgFFWMwpKp4Y5NTPqrCy4ArmGrrn2JUGv00b7FDWO97';
    const convertedPrice = price * 100;

    const onToken = token =>{
        console.log(token);
        alert('Payment Successful');
    }
    return(
        <StripeCheckout
        stripeKey={publishKey}
        amount={convertedPrice} // cents
        currency="USD"
        shippingAddress
        billingAddress
        label='Pay Now'
        name='Lawkakala Ico.'
        token={onToken}
        description={`Your total is $${price}`}
        ></StripeCheckout>
    )
}

export default StripeCheckoutBtn;