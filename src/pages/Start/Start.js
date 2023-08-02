import React, { useState } from 'react'
import { Link } from 'react-router-dom'
const initialState ={userName:''}
export default function Start() {
  const [state, setState]= useState(initialState)
  const handleChange=e=>{
    setState(s=>({...s, [e.target.name]: e.target.value}))
  }
  const handleUser=()=>{

    let {userName}=state
    if(userName.length<3){
      return alert("Plz! Enter Your Name")
    }
    let user ={userName}
    localStorage.setItem('user', JSON.stringify(user))
    setState(initialState)
  }
  return (
    <>
      <div id="startPage" className=''>
        <div className="container ">
          <div className="row justify-content-center">
            <div className="col-12 col-md-8 col-lg-4 ">
              <div className="card p-2 p-md-3 p-lg-4 mt-5">
                <input type="text" placeholder='Enter your name' name='userName' value={state.userName} onChange={handleChange} />
                <div className="col text-center mt-4">
                  <Link to="/play" className='btn btn-primary w-50 ' onClick={handleUser}>Start</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
