import React, { createContext } from 'react'

export const routeGuardContext = createContext('')

function GuardContext({ children }) {
    
    return (
        <>
            {children}
        </>
    )
}

export default GuardContext