import React from 'react'
import { Link } from 'react-router-dom'
import Button from '@mui/material/Button'


const BadURL = () => {
    return (
        <div>
        <h2 className='info-prompt'>That was not a valid choice...<p>Please click below to return Home</p></h2>
        <Link to='/'>
            <Button variant="contained" component={Link} to="/" sx={() => ({
                backgroundColor: '#0E86D4', color: 'white', fontWeight: 'bold', width: '35%' })}>
                  Go Home
            </Button>
        </Link>
        </div>
    )
}

export default BadURL