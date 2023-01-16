import React from 'react'
import Link from '@mui/material/Link';
import Button from '@mui/material/Button'


const BadURL = () => {
    return (
        <div>
        <h2 className='info-prompt'>That was not a valid choice...<p>Please click below to return Home</p></h2>
        <Link to='/'>
            <Button variant="contained">
                Home
            </Button>
        </Link>
        </div>
    )
}

export default BadURL