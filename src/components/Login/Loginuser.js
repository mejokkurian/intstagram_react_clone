import React, { useState } from 'react'
import apple from '../../images/images.png'
import google from '../../images/Get_it_on_Google_play.png'
import insta from '../../images/Screen-Shot-2018-10-05-at-2.09.37-pm.png'
import validator from "@brocode/simple-react-form-validation-helper";

function Loginuser() {
    const [email, setemail] = useState('')
    const [emailError, setemailerror] = useState('')
    const [Password, setPassword] = useState('')
    const [PasswordError, setPasswordError] = useState('')
    return (
        <div>
            <div className='row  '>
                <div className="col-md-6 hidden md:block ">
                    <img className='w-96 ml-auto mt-24' src={insta} alt="instagram feeds" />
                </div>

                <div className='col-md-4 ' >
                    <div className='mx-auto mt-10 '>
                        <div className='flex justify-center  '>
                            <div className="row w-80 border mt-2 border-slate-300">
                                <div className="row text-center mt-1 ">
                                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/2880px-Instagram_logo.svg.png" alt="" />
                                </div>

                                <div className='mb-6'>
                                    <div className="space-y-2">
                                    <span className="text-danger text-xs">{emailError}</span>
                                        <input value={email} onChange={(e)=>{
                                          setemail(e.target.value);
                                          validator.emailInputChangeHandler(e.target.value,setemailerror)  
                                        }}
                                        onBlur={(e)=>{
                                            validator.emailInputBlurHandler(e.target.value,setemailerror)
                                        }}
                                        className='border #f1f5f9 border-zinc-900 rounded h-8 w-72 pl-3 text-sm' type="text" placeholder="Email" />
                                        <span className="text-danger text-xs">{PasswordError}</span>
                                        <input value={Password} onChange={(e)=>{
                                          setPassword(e.target.value);
                                          validator.passwordInputChangeHandler(e.target.value,setPasswordError) 
                                        }}
                                        onBlur={(e)=>{
                                            validator.passwordInputBlurHandler(e.target.value,setPasswordError)
                                        }}
                                        className='border border-zinc-900  rounded h-8 w-72 pl-3 text-sm' type="Password" placeholder="Password" />

                                    </div>
                                </div>
                                
                                <div className='mb-3'  >
                                    <button className="block rounded bg-sky-600 w-72 h-8 text-ellipsis items-center-center">signup</button>
                                </div>

                                <div className='flex justify-center '>
                                    <div className='col-md-5'>
                                        <hr />
                                    </div>
                                    <div className='col-md-2 flex justify-center'>
                                        <p className='text-gray-400 font-medium' >OR</p>
                                    </div>
                                    <div className='col-md-5'>
                                        <hr />
                                    </div>
                                </div>
                                <div className='text-center'>
                                    <p className='' >Login with Facebook</p>
                                </div>
                            </div>

                        </div>

                        <div className='flex justify-center'>
                            <div className='text-center w-80  border mt-2 mb-3  border-slate-300'>
                                <p className='mb-7 mt-7'>Don't have an account? <a href="#" target={'_blank'}>Sign up</a></p>
                            </div>
                        </div>

                        <div className=''>
                            <p className='text-center'>Get the app.</p>
                        </div>

                        <div className=' flex justify-center mb-9 '>
                            <div className='row w-80 pr-0 mt-1'>
                                <div className='col-md-6 mr-0 sm'>
                                    <a href="https://apps.apple.com/app/instagram/id389801252?vt=lo" target={'_blank'} rel='noreferrer'>
                                        <img src={apple} alt="" />
                                    </a>
                                </div>
                                <div className='col-md-6  pl-0 sm'>
                                    <a className='md:w-32' target={'_blank'} href="https://play.google.com/store/apps/details?id=com.instagram.android&referrer=utm_source%3Dinstagramweb&utm_campaign=loginPage&ig_mid=63C2417A-5A88-4900-8DB1-59373E802CFA&utm_content=lo&utm_medium=badge" rel='noreferrer'>
                                        <img src={google} alt="" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default Loginuser
