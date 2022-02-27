import React from 'react'
import styled from 'styled-components'
import { FaFacebookF, FaGoogle, FaTwitter } from 'react-icons/fa'
import { MdOutlineMail, MdLockOutline } from 'react-icons/md'

import { Link } from 'react-router-dom'
function Login() {
    return (
        <Wrapper>
            <h1>Sign In</h1>
            <form>
                <div className='form-item'>
                    <MdOutlineMail/>
                    <input type="email" name="email" placeholder='Email address'></input>
                </div>
                <div className='form-item'>
                    <MdLockOutline/>
                    <input type="password" name="password" placeholder='Password'></input>
                </div>
                <button>Sign In</button>
            </form>
            <p>Don’t have an account? <Link to='/signup' >Sign Up</Link></p>
            <div className='social-login'>
                <p>Sign In via socials</p>
                <div>
                    <FaFacebookF />
                    <FaGoogle />
                    <FaTwitter />
                </div>
            </div>
        </Wrapper>
    )
}

export default Login

const Wrapper = styled.div`
    width:300px;
    margin:0 auto;
    padding-top:3rem;
    h1{
        margin-bottom:1rem;
        text-align:center;
    }
    p{
        text-align:center;
    }
    form{
        margin-bottom:1rem;
        input{
            width:88.5%;
            padding-left:3rem;
        }
        button{
            width:332px;
            padding:1rem;
        }
    }
    .social-login{
        margin-top:2rem;
        p{
            font-size:1rem;
            margin-bottom:1rem;
        }
        div{
            display:flex;
            justify-content:space-between;
            width:332px;
            svg{
                background-color:#f5f5f5;
                padding:1rem 3rem;
                border-radius:0.5rem;
                font-size:1.5rem;
                cursor:pointer;
            }
        }
    }
`