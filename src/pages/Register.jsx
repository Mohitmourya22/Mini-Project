// src/pages/Register.jsx
import React from "react";
import { SignUp } from "@clerk/clerk-react";

const Register = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900">Create Account</h2>
          <p className="mt-2 text-gray-600">Start your job search journey today</p>
        </div>
        
        <SignUp 
          routing="path" 
          path="/register"
          signInUrl="/login"
          redirectUrl="/dashboard"
          appearance={{
            elements: {
              rootBox: "mx-auto",
              card: "shadow-lg"
            }
          }}
        />
      </div>
    </div>
  );
};

export default Register;