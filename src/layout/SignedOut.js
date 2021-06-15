import React from 'react'
import { Button, Segment } from 'semantic-ui-react'

function SignedOut({signIn}) {
    return (
        <div>
            <Button onClick={signIn}  inverted color='purple'>
             Sign In
            </Button>
            <Button inverted color='purple'>
             Sign Up
            </Button>
        </div>
    )
}

export default SignedOut
