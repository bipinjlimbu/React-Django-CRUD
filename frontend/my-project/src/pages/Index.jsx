import React from 'react';
import { Link } from 'react-router-dom';

const Index = () => {
    return (
        <>
            <div className="flex items-center justify-center h-screen">
                <h1 className="text-4xl font-bold text-blue-500">
                    Welcome to the Student Management System
                </h1>
                <Link to="/add-student" className="ml-4 px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors">
                    Add Student
                </Link>
            </div>
        </>
    );
}

export default Index;