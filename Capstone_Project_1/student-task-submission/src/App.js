import React from 'react';
import HeaderBar from './components/Layouts/headerBar';
import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom';
import Home from './components/routes/home';
import About from './components/routes/about';
import StudentLogin from './components/routes/student';
import AdminLogin from './components/routes/admin';
import ContactUs from './components/routes/contact';
import FooterBar from './components/Layouts/footerBar';
import StudentRegister from './components/screens/student/studentRegister';
import StudentDashboard from './components/screens/student/studentDashboard';
import SubjectLists from './components/services/student/subjectLists';
import MyAccount from './components/services/student/myAccount';
import AdminDashboard from './components/screens/admin/adminDashboard';
import ChangePassword from './components/screens/student/changePassword';
import AdminPassReset from './components/screens/admin/adminpassreset';
import ResetLink from './components/screens/student/resetlink';
import AdminresetLink from './components/screens/admin/adminresetLink';
import ForgotPassword from './components/screens/student/forgotReset';
import AdminForgotPassword from './components/screens/admin/adminForgotReset';
import PostAssignment from './components/services/admin/addAssignment';
import AssignmentReport from './components/services/admin/assignmentReport';
import ManageAdmin from './components/services/admin/manageAdmin';
import ManageUser from './components/services/admin/manageStudent';



import './App.css';

export const AppContext = React.createContext();


function App() {
 
  return (
    <div className="App">   
      <BrowserRouter>
      <Switch>
      <AppContext.Provider value='dark'>
      <HeaderBar />
      <Route exact path='/' render = {() => {return <Redirect to='/home' />}} />
      <Route path = '/home' component = {Home} />
      <Route exact path= '/about' component = {About} />
      <Route exact path= '/student' component = {StudentLogin} />
      <Route path='/studentregister' component={StudentRegister} />
      <Route path='/studentdashboard' component={StudentDashboard} />
      <Route path='/subjectlists' component={SubjectLists} />
      <Route path='/myaccount' component={MyAccount} />
      <Route exact path= '/admin' component = {AdminLogin} />
      <Route exact path= '/admindashboard' component = {AdminDashboard} />
      <Route exact path= '/changepassword' component = {ChangePassword} />
      <Route exact path= '/adminpassreset' component = {AdminPassReset} />
      <Route exact path= '/resetlink' component = {ResetLink} />
      <Route exact path= '/adminresetlink' component = {AdminresetLink} />
      <Route exact path= '/forgotpassword/:userId/:token' component = {ForgotPassword} />
      <Route exact path= '/adminforgotpassword/:userId/:token' component = {AdminForgotPassword} />
      <Route exact path= '/postassignment' component = {PostAssignment} />
      <Route exact path= '/assignmentreport' component = {AssignmentReport} />
      <Route exact path= '/manageadmin' component = {ManageAdmin} />
      <Route exact path= '/manageuser' component = {ManageUser} />
      <Route exact path= '/contact' component = {ContactUs} />
      </AppContext.Provider>
      </Switch>
      </BrowserRouter>    
      <FooterBar />
    </div>
  );
}

export default App;
