/* eslint-disable react/prop-types */

import { Navigate } from 'react-router-dom'
const Protected = ({ isLoggedIn, children }) => {
    if (!isLoggedIn) {
        return <Navigate to='/sign-in' replace />
    }
    return children
}

export default Protected