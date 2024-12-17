import { Link } from '@remix-run/react'
import React from 'react'
import { FaFacebookF, FaGoogle, FaTwitter } from 'react-icons/fa'

function Register() {
    return (
        <div className="login bg-gray-100 flex items-center justify-center">
            <div className="bg-white p-8 rounded shadow-lg w-full max-w-md">
                <h2 className="text-2xl font-bold text-center mb-6">Register</h2>

                <form method="post">
                    {/* Name Field */}
                    <div className="mb-4">
                        <label
                            htmlFor="name"
                            className="block text-gray-700 text-sm font-medium mb-2"
                        >
                            Full Name
                        </label>
                        <input
                            type="text"
                            name="name"
                            id="name"
                            placeholder="Enter your full name"
                            className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    {/* Email/Phone Field */}
                    <div className="mb-4">
                        <label
                            htmlFor="emailOrPhone"
                            className="block text-gray-700 text-sm font-medium mb-2"
                        >
                            Email or Phone
                        </label>
                        <input
                            type="text"
                            name="emailOrPhone"
                            id="emailOrPhone"
                            placeholder="Enter your email or phone"
                            className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    {/* Password Field */}
                    <div className="mb-4">
                        <label
                            htmlFor="password"
                            className="block text-gray-700 text-sm font-medium mb-2"
                        >
                            Password
                        </label>
                        <input
                            type="password"
                            name="password"
                            id="password"
                            placeholder="Create a password"
                            className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    {/* Confirm Password Field */}
                    <div className="mb-4">
                        <label
                            htmlFor="confirmPassword"
                            className="block text-gray-700 text-sm font-medium mb-2"
                        >
                            Confirm Password
                        </label>
                        <input
                            type="password"
                            name="confirmPassword"
                            id="confirmPassword"
                            placeholder="Confirm your password"
                            className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    {/* Register Button */}
                    <button
                        type="submit"
                        className="btn-full"
                    >
                        Sign Up
                    </button>
                </form>

                {/* Divider */}
                <div className="flex items-center justify-center mt-6">
                    <div className="h-px bg-gray-300 w-1/3"></div>
                    <span className="text-gray-500 mx-2 text-sm">or</span>
                    <div className="h-px bg-gray-300 w-1/3"></div>
                </div>

                {/* Social Media Login */}
                <div className="mt-6 space-y-4">
                    <button
                        className="w-full flex items-center justify-center bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition duration-200"
                    >
                        <span className="mr-2"><FaFacebookF /></span>
                        Login with Facebook
                    </button>
                    <button
                        className="w-full flex items-center justify-center bg-gray-800 text-white py-2 px-4 rounded hover:bg-gray-900 transition duration-200"
                    >
                        <span className="mr-2"><FaTwitter /></span>
                        Login with Twitter
                    </button>
                    <button
                        className="w-full flex items-center justify-center bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600 transition duration-200"
                    >
                        <span className="mr-2"><FaGoogle /></span>
                        Login with Google
                    </button>
                </div>


                {/* Already Have an Account */}
                <div className="mt-6 text-center">
                    <p className="text-sm text-gray-600">
                        Already have an account?{" "}
                        <Link
                            to="/login"
                            className="text-blue-500 hover:underline font-medium"
                        >
                            Login
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Register