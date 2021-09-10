import React from 'react'
import { Redirect, Route } from 'react-router-dom'

const PublicRouter = ({ log, component: Component, ...resto }) => {
    return (
        <Route {...resto}
            component={(props) => 
                log ? <Redirect to="/home" /> : <Component {...props} />
            } 
        />
    )
}

export default PublicRouter
