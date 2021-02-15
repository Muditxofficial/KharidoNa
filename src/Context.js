import { createContext,useEffect,useState } from 'react'

export const Context = createContext();

export function ContextController ({children}){
    const intialState = {
        propertyListing:[]
    }
    const [state, setState] = useState(intialState);
    useEffect(() => {
        fetch('/server/listings.json')
        .then(res => res.json())
        .then(res => {
            setState({ propertyListing: res })
        })

    },[])

    

    
    return (
/* Every Context object comes with a Provider React component that allows consuming components to subscribe to context changes. */
        <Context.Provider value={state}>
            {children}
        </Context.Provider>
    )
}