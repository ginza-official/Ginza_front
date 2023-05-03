//eslint-disable
import React from 'react';
import Main from "./component/main";
import {Route, Routes,BrowserRouter} from "react-router-dom";
import RegistrationPage from "./component/registrationpage/signup";
import LoginPage from "./component/registrationpage/login";
import CourseSinglePage from "./component/courses/course"

// sherzamon
function App() {
  return (
    <div className="App">
        {/*eslint-disable*/}
      <BrowserRouter>
      <Routes>
        <Route path={'/'} element={<Main/>}/>
        <Route path={'/signup'} element={<RegistrationPage/>}/>
        <Route path={'/login'} element={<LoginPage/>}/>
        <Route path='/courses/:id'   element= {<CourseSinglePage/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
