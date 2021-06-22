import {Fragment} from 'react'
import { Route } from "react-router-dom"





export const UserTemplate = (props) =>{

    return <Route path={props.path} exact render={(propsRoute) =>{
        return <Fragment>
           
            <props.component />
        </Fragment>
    }}/>
}