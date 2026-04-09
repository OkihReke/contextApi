import { useState, type ReactNode} from 'react'

import UserContext, { type UserType }  from './UserContext.ts';

const UserContextProvider = ({ children }:{children: ReactNode}) => {
    const [user, setUser] = useState<UserType|null>(null)

    return (
    <UserContext.Provider value={{user, setUser}}>{children}</UserContext.Provider>
    )
}

export default UserContextProvider
