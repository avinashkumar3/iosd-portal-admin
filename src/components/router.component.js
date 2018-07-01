import React from 'react' ;
import {Route} from 'react-router-dom' ;

import Dashboard from './dashboard/Dashboard' ;
import Library from "./Library/Library";
import Courses from "./Courses/Courses";
import Mentors from "./Mentors/Mentors";
import Events from "./Events/Events";
import Blogs from "./Blogs/Blogs";
import Projects from "./Projects/Projects";
import TotalUsers from './TotalUsers/TotalUsers';


const RouterComponent = () => {
    return (
        <div>
            <Route exact path='/' component={Dashboard}/>
            <Route path='/library' component={Library}/>
            <Route path='/courses' component={Courses}/>
            <Route path='/mentors' component={Mentors}/>
            <Route path='/events' component={Events}/>
            <Route path='/blogs' component={Blogs}/>
            <Route path='/projects' component={Projects}/>
            <Route path='/totalusers' component={TotalUsers}/>
            {/* <Route path='/player' component={PlayerComponent}/> */}
        </div>
    )
} ;

export default RouterComponent ;