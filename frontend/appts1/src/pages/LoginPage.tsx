import React from 'react'
import LoginArea from '../components/Auth/LoginArea'

const Login = () => {
  return (
    <>
      <div className="mx-auto max-w-screen-2xl p-4 md:p-6 2xl:p-10">
        <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <h2 className="text-title-md2 font-bold text-black dark:text-white">
            Sign In
          </h2>

          <nav>
            <ol className="flex items-center gap-2">
              <li>
                <a className="font-medium" href="index.html">Dashboard /</a>
              </li>
              <li className="font-medium text-primary">Sign In</li>
            </ol>
          </nav>
        </div>

        <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
          <div className="flex flex-wrap items-center">
            <div className="hidden w-full xl:block xl:w-1/2">
              <div className="py-17.5 px-26 text-center">
                <a className="mb-5.5 inline-block" href="index.html">
                  <img className="hidden dark:block" src="src/images/logo/logo.svg" alt="Logo" />
                  <img className="dark:hidden" src="src/images/logo/logo-dark.svg" alt="Logo" />
                </a>

                <p className="font-medium 2xl:px-20">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit
                  suspendisse.
                </p>

                <span className="mt-15 inline-block">
                  <img src="src/images/illustration/illustration-03.svg" alt="illustration" />
                </span>
              </div>
            </div>
            <div className="w-full border-stroke dark:border-strokedark xl:w-1/2 xl:border-l-2">
              <div className="w-full p-4 sm:p-12.5 xl:p-17.5">
                <span className="mb-1.5 block font-medium">Start for free</span>
                <h2 className="mb-9 text-2xl font-bold text-black dark:text-white sm:text-title-xl2">
                  Sign In to TailAdmin
                </h2>

                <LoginArea />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Login