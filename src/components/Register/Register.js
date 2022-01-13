
import React, { useState } from 'react'
import apple from '../../images/images.png'
import google from '../../images/Get_it_on_Google_play.png'
import insta from '../../images/Screen-Shot-2018-10-05-at-2.09.37-pm.png'
import validator from "@brocode/simple-react-form-validation-helper";


function Register() {
    const [email, setemail] = useState('')
    const [emailError, setemailError] = useState('')
    const [Phone, setPhone] = useState('')
    const [PhoneError, setPhoneError] = useState('')
    const [fullName, setfullName] = useState('')
    const [fullNameError, setfullNameError] = useState('')
    const [userName, setuserName] = useState('')
    const [userNameError, setuserNameError] = useState('')
    const [password, setpassword] = useState('')
    const [passwordError, setpasswordError] = useState('')
    return (
        <div className='row'>
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
                            <div className="text-center mt-1 mb-1 flex-justify-center">
                                <p className='font-medium not-italic text-gray-400'>Sign up to see photos and videos from your friends.
                                </p>
                            </div>
                            <div className='mb-3 '>
                                <button className="block rounded bg-blue-500 w-72 h-8 text-ellipsis items-center-center">Login with Facebook</button>
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
                            <div className='mb-6'>
                                <div className="space-y-2">
                                <span className="text-danger text-xs">{emailError}</span>
                                    <input
                                    value={email} onChange={(e)=>{
                                        setemail(e.target.value);
                                        validator.emailInputChangeHandler(e.target.value,setemailError)   
                                    }} 
                                    onBlur={(e)=>{
                                        validator.emailInputBlurHandler(e.target.value,setemailError)
                                    }}
                                    className='border #f1f5f9 border-zinc-900 rounded h-8 w-72 pl-3 text-sm' type="email" placeholder="Email" />
                                    <span className="text-danger text-xs">{PhoneError}</span>
                                    <input
                                    value={Phone} onChange={(e)=>{
                                        setPhone(e.target.value);
                                        validator.phoneInputChangeHandler(e.target.value,setPhoneError)
                                    }}
                                    onBlur={(e)=>{
                                        validator.phoneInputBlurHandler(e.target.value,setPhoneError)
                                    }}
                                    className='border border-zinc-900  rounded h-8 w-72 pl-3 text-sm' type="text" placeholder="Mobile number" />
                                    <span className="text-danger text-xs">{fullNameError}</span>
                                    <input 
                                    value={fullName} onChange={(e)=>{
                                        setfullName(e.target.value);
                                        validator.nameInputChangeHandler(e.target.value,setfullNameError)
                                    }}
                                    onBlur={(e)=>{
                                        validator.nameInputBlurHandler(e.target.value,setfullNameError)
                                    }} className='border border-zinc-900  rounded h-8 w-72 pl-3 text-sm' type="text" placeholder='Fullname' />
                                    <span className="text-danger text-xs">{userNameError}</span>
                                    <input value={userName} onChange={(e)=>{
                                        setuserName(e.target.value);
                                        validator.nameInputChangeHandler(e.target.value,setuserNameError)
                                    }} 
                                    onBlur={(e)=>{
                                        validator.nameInputBlurHandler(e.target.value,setuserNameError)}}
                                    className='border border-zinc-900 rounded h-8 w-72 pl-3 text-sm' type="text" placeholder='Username' />
                                    <span className="text-danger text-xs">{passwordError}</span>
                                    <input value={password} onChange={(e)=>{
                                        setpassword(e.target.value);
                                        validator.passwordInputChangeHandler(e.target.value,setpasswordError)
                                    }}
                                    onBlur={(e)=>{
                                        validator.passwordInputBlurHandler(e.target.value,setpasswordError)
                                    }}
                                    className='border border-zinc-900 rounded h-8 w-72 pl-3 text-sm' type="password" placeholder='password' />
                                </div>

                            </div>
                            <div className='mb-3'  >
                                <button className="block rounded bg-sky-600 w-72 h-8 text-ellipsis items-center-center">signup</button>
                            </div>

                            <div >
                                <p className='text-center text-gray-400 text-sm not-italic'>
                                    By signing up, you agree to our Terms, Data Policy and Cookie Policy.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className='flex justify-center'>
                        <div className='text-center w-80  border mt-2 mb-3  border-slate-300'>
                            <p className='mb-7 mt-7'>Have an account? <a href="#"  target={'_blank'}>Log in</a></p>
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
    )
}

export default Register
