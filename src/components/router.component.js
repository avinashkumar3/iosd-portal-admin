import React from 'react' ;
import {Route} from 'react-router-dom' ;

import Dashboard from './dashboard/Dashboard' ;
import Library from "./Library/Library";


const RouterComponent = () => {
    return (
        <div>
            <Route exact path='/' component={Dashboard}/>
            <Route path='/library' component={Library}/>
            {/* <Route path='/player' component={PlayerComponent}/> */}
        </div>
    )
} ;

export default RouterComponent ;