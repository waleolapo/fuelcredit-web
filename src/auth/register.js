import { LockClosedIcon, } from '@heroicons/react/solid'
import { Link, Navigate } from 'react-router-dom'
import config from '../config.js'
import { useState } from 'react'
import axios from 'axios'



const Register = () => {

    const [ loading, setLoading ] = useState(false);
    const [ btnText, setBtnText ] = useState('Sign Up')
    const [ redirect, setRedirect ] = useState(false)

    const submitForm = (evt) => {
        evt.preventDefault();

        setBtnText('Loading...')
    
        const form = new FormData(evt.target)
        const data = {
            name: form.get('name'),
            email: form.get('email'),
            password: form.get('password')
        }
        
        setLoading(true)
        axios.post(config.APP_URL + '/auth/signup', data).then( res => {
            console.log(res)
            setLoading(false)
                setBtnText('Sign Up')
                alert('Registration successful!')
                // window.location.href = '/fuelcredit-web/dashboard'
                setRedirect(true);

        }).catch( (e, f) => {
            if(e.response && e.response.status === 422) {
                alert(e.response.data.message)
            }
            console.log({...e})
                setBtnText('Sign Up')
            setLoading(false);
        })
    }

    return redirect ? <Navigate to="/fuelcredit-web/app" /> : <>
        <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full space-y-8">
            <div>
                <img
                className="mx-auto h-12 w-auto"
                src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                alt="Workflow"
                />
                <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Sign Up with FuelCredit</h2>
                <p className="mt-2 text-center text-sm text-gray-600">
                Or{' '}
                <Link to="/" className="font-medium text-indigo-600 hover:text-indigo-500">
                    Back Home
                </Link>
                </p>
            </div>
            <form onSubmit={submitForm} className="mt-8 space-y-6" action="#" method="POST">
                <input type="hidden" name="remember" defaultValue="true" />
                <div className="rounded-md shadow-sm -space-y-px">
                <div>
                    <label htmlFor="name" className="sr-only">
                    Full Name
                    </label>
                    <input
                    // onChange={ (val => setName(val.target.value))}
                    id="name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    required
                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                    placeholder="Full name"
                    />
                </div>
                <div>
                    <label htmlFor="email-address" className="sr-only">
                    Email address
                    </label>
                    <input
                    id="email-address"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                    placeholder="Email address"
                    />
                </div>
                <div>
                    <label htmlFor="password" className="sr-only">
                    Password
                    </label>
                    <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    required
                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                    placeholder="Password"
                    />
                </div>
                </div>

                <div className="flex items-center justify-between">
                <div className="flex items-center">
                    <input
                    id="remember-me"
                    name="remember-me"
                    type="checkbox"
                    className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                    />
                    <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                    Subscribe to newsletter
                    </label>
                </div>

                <div className="text-sm">
                    <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                    Forgot your password?
                    </a>
                </div>
                </div>

                <div>
                <button
                    type="submit"
                    className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 loading"
                    disabled={ loading ? true : false }
                >
                    <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                    <LockClosedIcon className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" aria-hidden="true" />
                    
                    </span>
                    {btnText}
                </button>
                </div>
            </form>
            </div>
        </div>
    </>
}


export default Register