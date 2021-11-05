import { useState } from 'react'
import { Auth, input } from 'aws-amplify'

export default function SignIn({ setUser }) {

    async function logIn(e) {
        e.preventDefault()
        try {
            const user = await Auth.signIn(username, password)
            setUser(user)
        } catch (error) {
            console.error(error)
        }
    }

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    return (
        <div>
            <form onSubmit={logIn} action="">
                <input type="text" name="" id="" placeholder="Username" onChange={ e => setUsername(e.target.value) }/>
                <input type="password" name="" id="" placeholder="Password" onChange={ e => setPassword(e.target.value) }/>
                <input type="submit" value="Log In"/>
            </form>
        </div>
    )
}