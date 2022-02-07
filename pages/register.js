import React from 'react'

export default function Register() {
  return (
    <div>
      <h1>Register</h1>
      <div className="error">Help me!</div>
      <style jsx>
        {`
          .error {
            background-color: red;
            color: black;
          }
        `}
      </style>
    </div>
  )
}
