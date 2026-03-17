import { useState, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

const EditStudent = () => {
    const student_id = useParams().student_id;
    const redirect = useNavigate();
    const [studentData, setStudentData] = useState({
        name: '',
        roll: '',
        faculty: '',
        address: '',
        phone: '',
        email: '',
        age: ''
    });

    useEffect(() => {
        axios.get(`http://127.0.0.1:8000/api/students/${student_id}/`)
            .then(response => {
                setStudentData(response.data.data);
            })
            .catch(error => {
                console.error('Error fetching student data:', error);
            });
    }, []);

    console.log(studentData);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setStudentData({
            ...studentData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.put(`http://127.0.0.1:8000/api/students/${student_id}/`, studentData)
            .then(response => {
                console.log('Student updated successfully:', response.data);
                redirect('/students');
            })
            .catch(error => {
                console.error('Error updating student:', error);
            });
    };

    return (
        <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
                <div className="bg-indigo-600 px-8 py-6">
                    <h1 className="text-2xl font-bold text-white">Student Registration</h1>
                    <p className="text-indigo-100 text-sm mt-1">Fill in the information to create a new student record.</p>
                </div>

                <form className="p-8 space-y-6" onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="md:col-span-2">
                            <label className="block text-sm font-semibold text-gray-700 mb-1">Full Name</label>
                            <input
                                type="text"
                                name="name"
                                value={studentData.name}
                                onChange={handleChange}
                                placeholder="Enter Full Name"
                                className="w-full px-4 py-2.5 bg-gray-50 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all"
                            />
                        </div>

                        <div className="md:col-span-2">
                            <label className="block text-sm font-semibold text-gray-700 mb-1">Email Address</label>
                            <input
                                type="email"
                                name="email"
                                value={studentData.email}
                                onChange={handleChange}
                                placeholder="Enter Email Address"
                                className="w-full px-4 py-2.5 bg-gray-50 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-1">Roll Number</label>
                            <input
                                type="text"
                                name="roll"
                                value={studentData.roll}
                                onChange={handleChange}
                                placeholder="Enter Roll Number"
                                className="w-full px-4 py-2.5 bg-gray-50 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-1">Faculty</label>
                            <select
                                name="faculty"
                                value={studentData.faculty}
                                onChange={handleChange}
                                className="w-full px-4 py-2.5 bg-gray-50 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all"
                            >
                                <option value="">Select Department</option>
                                <option value="BCA">BCA</option>
                                <option value="CSIT">CSIT</option>
                                <option value="BBA">BBA</option>
                            </select>
                        </div>

                        <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-1">Phone Number</label>
                            <input
                                type="tel"
                                name="phone"
                                value={studentData.phone}
                                onChange={handleChange}
                                placeholder="Enter Phone Number"
                                className="w-full px-4 py-2.5 bg-gray-50 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-1">Age</label>
                            <input
                                type="number"
                                name="age"
                                value={studentData.age}
                                onChange={handleChange}
                                placeholder="Enter Age"
                                className="w-full px-4 py-2.5 bg-gray-50 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all"
                            />
                        </div>

                        <div className="md:col-span-2">
                            <label className="block text-sm font-semibold text-gray-700 mb-1">Address</label>
                            <textarea
                                rows="3"
                                name="address"
                                value={studentData.address}
                                onChange={handleChange}
                                placeholder="Enter Address"
                                className="w-full px-4 py-2.5 bg-gray-50 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all"
                            ></textarea>
                        </div>
                    </div>

                    <div className="flex items-center justify-end space-x-4 pt-4 border-t border-gray-100">
                        <Link to="/" className="px-6 py-2 text-sm font-medium text-gray-600 hover:text-gray-800 transition-colors">
                            Cancel
                        </Link>
                        <button
                            type="button"
                            className="px-6 py-2 text-sm font-medium text-gray-600 hover:text-gray-800 transition-colors"
                        >
                            Reset
                        </button>
                        <button
                            type="submit"
                            onClick={handleSubmit}
                            className="px-8 py-2.5 bg-indigo-600 text-white font-bold rounded-lg shadow-md hover:bg-indigo-700 active:transform active:scale-95 transition-all"
                        >
                            Register Student
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default EditStudent;