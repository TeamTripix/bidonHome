import React from 'react'
import { useHistory } from 'react-router'

const RestrictedRoutes = (props) => {
    const history = useHistory()
    const Component = props.component
    const data = localStorage.getItem("login")
    console.log("normal", data)
    const getItem = JSON.parse(data)
    console.log("parsed", getItem)


    if(getItem){
        history.push('/home')
        return(
            <Component username={getItem.username}/>
            )
        }
        else{
            return(
                <>
                {history.push('/')}
                </>
                )
        }
}

export default RestrictedRoutes