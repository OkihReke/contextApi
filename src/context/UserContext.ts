import { createContext, type Dispatch, type SetStateAction } from "react";


export interface UserType{
    username: string|null
    password: string|null
}
interface UserContextType{
    user: UserType|null
    setUser: Dispatch<SetStateAction<UserType|null>>;
}

const UserContext = createContext<UserContextType|undefined>(undefined);


export default UserContext;
