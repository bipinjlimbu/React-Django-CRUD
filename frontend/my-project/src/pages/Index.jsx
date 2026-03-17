import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Index = () => {
    const [students, setStudents] = useState([]);

    useEffect(() => {
        axios.get('http://127.0.0.1:8000/api/students/')
            .then(response => {
                setStudents(response.data.data);
            })
            .catch(error => {
                console.error('Error fetching students:', error);
            });
    }, []);

    console.log(students);
    return (
        <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                {/* Top Header Section */}
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-10 gap-4">
                    <div>
                        <h1 className="text-3xl font-extrabold text-gray-900 tracking-tight">Student Records</h1>
                        <p className="text-gray-500 mt-1">Manage, filter, and view all enrolled student profiles.</p>
                    </div>

                    <Link
                        to="/add-student"
                        className="inline-flex items-center justify-center px-6 py-3 bg-indigo-600 text-white font-bold rounded-xl shadow-lg hover:bg-indigo-700 hover:shadow-indigo-200 transition-all transform hover:-translate-y-1 active:scale-95"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                        </svg>
                        Add New Student
                    </Link>
                </div>

                {/* Main Table Container */}
                <div className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden">
                    <div className="overflow-x-auto">
                        <table className="w-full text-left">
                            <thead>
                                <tr className="bg-gray-50 border-b border-gray-100">
                                    <th className="px-6 py-5 text-xs font-bold text-gray-500 uppercase tracking-widest">Roll No.</th>
                                    <th className="px-6 py-5 text-xs font-bold text-gray-500 uppercase tracking-widest">Full Name</th>
                                    <th className="px-6 py-5 text-xs font-bold text-gray-500 uppercase tracking-widest">Email Address</th>
                                    <th className="px-6 py-5 text-xs font-bold text-gray-500 uppercase tracking-widest">Phone</th>
                                    <th className="px-6 py-5 text-xs font-bold text-gray-500 uppercase tracking-widest">Faculty</th>
                                    <th className="px-6 py-5 text-xs font-bold text-gray-500 uppercase tracking-widest text-center">Actions</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-100">
                                {students.map((student) => (
                                    <tr key={student.id || student.roll} className="hover:bg-indigo-50/30 transition-all group">
                                        <td className="px-6 py-6 font-mono text-sm font-bold text-indigo-600">
                                            {student.roll}
                                        </td>
                                        <td className="px-6 py-6 text-sm font-semibold text-gray-900">
                                            {student.name}
                                        </td>
                                        <td className="px-6 py-6 text-sm text-gray-600">
                                            <div className="flex items-center">
                                                <svg className="w-4 h-4 mr-2 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                                </svg>
                                                {student.email}
                                            </div>
                                        </td>
                                        <td className="px-6 py-6 text-sm text-gray-600">
                                            <div className="flex items-center">
                                                <svg className="w-4 h-4 mr-2 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.948V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                                </svg>
                                                {student.phone}
                                            </div>
                                        </td>
                                        <td className="px-6 py-6">
                                            <span className="px-3 py-1 bg-indigo-100 text-indigo-700 rounded-lg text-xs font-bold uppercase tracking-wider">
                                                {student.faculty}
                                            </span>
                                        </td>
                                        <td className="px-6 py-6">
                                            <div className="flex justify-center space-x-2">
                                                <button
                                                    className="inline-flex items-center px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold rounded-lg transition-colors shadow-sm"
                                                >
                                                    <svg className="w-3.5 h-3.5 mr-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                                                    </svg>
                                                    Edit
                                                </button>
                                                <button
                                                    className="inline-flex items-center px-4 py-2 bg-red-500 hover:bg-red-600 text-white text-xs font-bold rounded-lg transition-colors shadow-sm"
                                                >
                                                    <svg className="w-3.5 h-3.5 mr-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                                    </svg>
                                                    Delete
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    {/* Empty State */}
                    {students.length === 0 && (
                        <div className="py-20 text-center">
                            <p className="text-gray-400 font-medium">No students found in the database.</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Index;