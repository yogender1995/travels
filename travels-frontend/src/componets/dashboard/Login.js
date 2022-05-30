import React from 'react';

import { useState } from "react"
import AuthUser from '../AuthUser';

const Login = () => {
    const {http,setToken} = AuthUser();
    const [email,setEmail] = useState();
    const [password,setPassword] = useState();
    

    const submitForm = () =>{
        // api call
        http.post('/login',{email:email,password:password}).then((res)=>{

                  console.log(res.data);
                  console.log(res.data);
            setToken(res.data.user,res.data.access_token);
           
            
        })
    }

    return (
        <div>
            <div className="modal fade in" id="signin" tabIndex={-1} role="dialog" aria-labelledby="myModalLabel1" aria-hidden="true" style={{display: 'block'}}>
  <div className="modal-dialog">
    <div className="modal-content" id="myModalLabel1">
      <div className="modal-body">
        <div className="text-center"><img src="assets/img/logo.png" className="img-responsive" /></div>
        {/* Nav tabs */}
        <ul className="nav nav-tabs nav-advance theme-bg" role="tablist">
          <li className="nav-item active">
            <a className="nav-link" data-toggle="tab" href="#employer" role="tab" aria-expanded="true">
              <i className="ti-user" /> Admin</a>
          </li>
          
        </ul>
        {/* Nav tabs */}
        {/* Tab panels */}
        <div className="tab-content">
          {/* Employer Panel 1*/}
          <div className="tab-pane fade show active in" id="employer" role="tabpanel">
            <form>
              <div className="form-group">
                <label>Email</label>
                <input type="email" className="form-control" placeholder="Email"
                onChange={e=>setEmail(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label>Password</label>
                <input type="password" className="form-control" placeholder="*********" 
                onChange={e=>setPassword(e.target.value)}
                />
              </div>
              <div className="form-group">
                
                <a href="#" title="Forget" className="fl-right">Forgot Password?</a>
              </div>
              <div className="form-group text-center">
                <button type="button" className="btn theme-btn full-width btn-m" onClick={submitForm}>LogIn </button>
              </div>
            </form>
          </div>
          {/*/.Panel 1*/}
        </div>
        {/* Tab panels */}
      </div>
    </div>
  </div>
</div>

        </div>
    );
}

export default Login;
