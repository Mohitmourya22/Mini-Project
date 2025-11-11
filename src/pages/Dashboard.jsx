// src/pages/Dashboard.jsx
import React, { useEffect, useState } from "react";
import { useUser } from "@clerk/clerk-react";

const Dashboard = () => {
  const { user, isLoaded } = useUser();

  if (!isLoaded) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Welcome Section */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <div className="flex items-center space-x-4">
            {user?.imageUrl && (
              <img 
                src={user.imageUrl} 
                alt={user.firstName || "User"} 
                className="h-16 w-16 rounded-full"
              />
            )}
            <div>
              <h1 className="text-3xl font-bold text-gray-900">
                Welcome, {user?.firstName || user?.username || "User"}! 👋
              </h1>
              <p className="text-gray-600 mt-1">
                {user?.primaryEmailAddress?.emailAddress}
              </p>
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm">Saved Jobs</p>
                <p className="text-3xl font-bold text-gray-900 mt-1">12</p>
              </div>
              <div className="text-4xl">💼</div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm">Applications</p>
                <p className="text-3xl font-bold text-gray-900 mt-1">8</p>
              </div>
              <div className="text-4xl">📝</div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm">Interviews</p>
                <p className="text-3xl font-bold text-gray-900 mt-1">3</p>
              </div>
              <div className="text-4xl">🎯</div>
            </div>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Recent Activity</h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between py-3 border-b">
              <div>
                <p className="font-medium text-gray-900">Applied to Frontend Developer</p>
                <p className="text-sm text-gray-600">TechCorp Inc. • 2 hours ago</p>
              </div>
              <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                Applied
              </span>
            </div>
            
            <div className="flex items-center justify-between py-3 border-b">
              <div>
                <p className="font-medium text-gray-900">Saved Python Backend Developer</p>
                <p className="text-sm text-gray-600">DataFlow Systems • 5 hours ago</p>
              </div>
              <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm">
                Saved
              </span>
            </div>

            <div className="flex items-center justify-between py-3">
              <div>
                <p className="font-medium text-gray-900">Interview Scheduled</p>
                <p className="text-sm text-gray-600">StartupXYZ • 1 day ago</p>
              </div>
              <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">
                Interview
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;