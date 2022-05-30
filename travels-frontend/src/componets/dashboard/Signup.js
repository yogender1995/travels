import React from 'react';

import { useState } from 'react';

import { useNavigate } from 'react-router-dom';

import AuthUser from '../AuthUser';

const Signup = () => {
    const navigate = useNavigate();
    const {http,setToken} = AuthUser();

    const [email, setEmail] = useState();
    const [name, setName] = useState();
    const [password, setPassword] = useState();

    const submitForm = () =>{
        // api call
        http.post('register',{email:email,password:password,name:name}).then((res)=>{
          navigate('login');
           console.log(res.data);
         
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
              <i className="ti-user" /> Register Admin</a>
          </li>
          
        </ul>
        {/* Nav tabs */}
        {/* Tab panels */}
        <div className="tab-content">
          {/* Employer Panel 1*/}
          <div className="tab-pane fade show active in" id="employer" role="tabpanel">
            <form>
              <div className="form-group">
                <label>User Name</label>
                <input type="text" className="form-control" placeholder="User Name"
                 onChange={e=>setName(e.target.value)}
                
                />
              </div>
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
              <div className="form-group text-center">
                <button type="button" className="btn theme-btn full-width btn-m" onClick={submitForm}>Signup </button>
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

export default Signup;
