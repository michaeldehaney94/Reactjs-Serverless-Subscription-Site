import { loadStripe } from "@stripe/stripe-js"
import './Subscribe.css'

export default function Subscribe() {
    const handleClick = async (e) => {
        e.preventDefault()
        const stripe = await loadStripe('pk_test_51JsU3WF7598WbjGUqVKY00wg7FQYR2bf24ILK4gEYTUdvJWshjMTX7yqE8gEp3eOES09EY8CPVzhWtvIvrIqVScW00wJyDMjw9')
        const { error } = await stripe.redirectToCheckout({
            lineItems: [{
                price: 'price_1JsUD3F7598WbjGU5jIyvzDY',
                quantity: 1
            }],
            mode: 'subscription',
            successUrl: 'http://localhost:3000',
            cancelUrl: 'http://localhost:3000/cancel'
        })
    }

    return (
        <button onClick={handleClick} className="f6 link dim br3 ph3 pv2 mb2 dib white bg-light-purple">Get Course Access</button>
    )
}