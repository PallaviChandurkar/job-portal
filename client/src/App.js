import 'antd/dist/antd.css';
import './App.css';
import Home from './pages/Home';
import { BrowserRouter, Redirect, Route } from 'react-router-dom';
import Profile from './pages/Profile';
import PostJob from './pages/PostJob';
import AppliedJobs from './pages/AppliedJobs';
import JobInfo from './pages/JobInfo';
import { css } from "@emotion/react";
import MoonLoader from "react-spinners/MoonLoader";
import { useDispatch, useSelector } from 'react-redux';
import { getAlljobs } from './redux/actions/jobActions';
import { useEffect } from 'react';
import Login from './pages/Login';
import Register from './pages/Register';
import PostedJobs from './pages/PostedJobs';
import EditJob from './pages/EditJob';
import { getAllUsers } from './redux/actions/userActions';
import UserInfo from './pages/UserInfo';

function App() {
  const { loader } = useSelector(state => state.loaderReducer)
  const dispatch = useDispatch()
  useEffect(() => {

    dispatch(getAlljobs());
    dispatch(getAllUsers());

  }, []);
  return (
    <div className="App">
      {loader && (<div className="sweet-loading text-center">
        <MoonLoader color={'#001529'} />
      </div>)}

      <BrowserRouter>
        <Route path='/login' exact component={Login} />
        <Route path='/register' exact component={Register} />
        <ProtectedRoute path='/' exact component={Home} />
        <ProtectedRoute path='/profile' exact component={Profile} />
        <ProtectedRoute path='/postjob' exact component={PostJob} />
        <ProtectedRoute path='/appliedjobs' exact component={AppliedJobs} />
        <ProtectedRoute path='/jobs/:id' exact component={JobInfo} />
        <ProtectedRoute path='/posted' exact component={PostedJobs} />
        <ProtectedRoute path='/editjob/:id' exact component={EditJob} />
        <ProtectedRoute path='/users/:id' exact component={UserInfo} />
      </BrowserRouter>
    </div>
  );
}

export default App;

export function ProtectedRoute(props) {

  const user = localStorage.getItem('user')

  if (!user) {
    return <Redirect to='/login' />
  }
  else {
    return <Route {...props} />
  }

}
