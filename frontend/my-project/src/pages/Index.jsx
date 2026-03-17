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
            <div className="max-w-6xl mx-auto">
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

                <div className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden">
                    <div className="overflow-x-auto">
                        <table className="w-full text-left">
                            <thead>
                                <tr className="bg-indigo-50/50 border-b border-gray-100">
                                    <th className="px-8 py-5 text-xs font-bold text-indigo-600 uppercase tracking-widest">Roll No.</th>
                                    <th className="px-8 py-5 text-xs font-bold text-indigo-600 uppercase tracking-widest">Student Info</th>
                                    <th className="px-8 py-5 text-xs font-bold text-indigo-600 uppercase tracking-widest">Faculty</th>
                                    <th className="px-8 py-5 text-xs font-bold text-indigo-600 uppercase tracking-widest">Address</th>
                                    <th className="px-8 py-5 text-xs font-bold text-indigo-600 uppercase tracking-widest text-center">Actions</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-50">
                                {students.map((student) => (
                                    <tr className="hover:bg-gray-50/80 transition-all group">
                                        <td className="px-8 py-6 font-mono text-sm font-bold text-gray-400 group-hover:text-indigo-600">{student.roll}</td>
                                        <td className="px-8 py-6">
                                            <div className="flex flex-col">
                                                <span className="text-sm font-bold text-gray-900">{student.name}</span>
                                                <span className="text-xs text-gray-400">{student.email}</span>
                                                <span className="text-xs font-medium text-gray-500 mt-1">{student.phone}</span>
                                            </div>
                                        </td>
                                        <td className="px-8 py-6">
                                            <span className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-xs font-bold border border-blue-100">
                                                {student.faculty}
                                            </span>
                                        </td>
                                        <td className="px-8 py-6 text-sm text-gray-500 italic">{student.address}</td>
                                        <td className="px-8 py-6">
                                            <div className="flex justify-center space-x-3">
                                                <button className="p-2 bg-gray-50 text-gray-400 hover:text-indigo-600 hover:bg-indigo-50 rounded-lg transition-all">Edit</button>
                                                <button className="p-2 bg-gray-50 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-all">Delete</button>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Index;