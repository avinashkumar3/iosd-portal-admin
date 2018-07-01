import React, {Component} from 'react';
import {Route , Switch , Redirect} from 'react-router-dom' ;
import BlogsList from "./BlogsList";
import BlogNewForm from "./BlogNewForm";
import BlogDetails from "./BlogDetails";


class Blogs extends Component {
    render() {
        return (
            <div className='container'>
                <Switch>
                    <Route path='/blogs/list' component={BlogsList}/>
                    <Route path='/blogs/new' component={BlogNewForm}/>
                    <Route path='/blogs/:id' component={BlogDetails}/>
                    <Route path='/blogs' component={()=><Redirect to='/blogs/list'/>}/>
                </Switch>

            </div>
        );
    }
}


export default Blogs;
