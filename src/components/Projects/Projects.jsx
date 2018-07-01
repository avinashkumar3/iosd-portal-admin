import React, {Component} from 'react';
import {Route , Switch , Redirect} from 'react-router-dom' ;
import ProjectsList from "./ProjectsList";
import ProjectNewForm from "./ProjectNewForm";
import ProjectDetails from "./ProjectDetails";


class Projects extends Component {
    render() {
        return (
            <div className='container'>
                <Switch>
                    <Route path='/projects/list' component={ProjectsList}/>
                    <Route path='/projects/new' component={ProjectNewForm}/>
                    <Route path='/projects/:id' component={ProjectDetails}/>
                    <Route path='/projects' component={()=><Redirect to='/projects/list'/>}/>
                </Switch>

            </div>
        );
    }
}


export default Projects;
//run it