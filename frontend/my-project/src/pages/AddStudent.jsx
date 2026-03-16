import React from 'react';

const AddStudent = () => {
    return (
        <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
                <div className="bg-indigo-600 px-8 py-6">
                    <h1 className="text-2xl font-bold text-white">Student Registration</h1>
                    <p className="text-indigo-100 text-sm mt-1">Fill in the information to create a new student record.</p>
                </div>

                <form className="p-8 space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="md:col-span-2">
                            <label className="block text-sm font-semibold text-gray-700 mb-1">Full Name</label>
                            <input
                                type="text"
                                placeholder="e.g. Alex Johnson"
                                className="w-full px-4 py-2.5 bg-gray-50 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-1">Roll Number</label>
                            <input
                                type="text"
                                placeholder="2024-001"
                                className="w-full px-4 py-2.5 bg-gray-50 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-1">Faculty</label>
                            <select className="w-full px-4 py-2.5 bg-gray-50 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all">
                                <option value="">Select Department</option>
                                <option value="cs">Computer Science</option>
                                <option value="it">Information Technology</option>
                                <option value="eng">Engineering</option>
                            </select>
                        </div>

                        <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-1">Phone Number</label>
                            <input
                                type="tel"
                                placeholder="+1 234 567 890"
                                className="w-full px-4 py-2.5 bg-gray-50 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-1">Age</label>
                            <input
                                type="number"
                                placeholder="20"
                                className="w-full px-4 py-2.5 bg-gray-50 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all"
                            />
                        </div>

                        <div className="md:col-span-2">
                            <label className="block text-sm font-semibold text-gray-700 mb-1">Address</label>
                            <textarea
                                rows="3"
                                placeholder="Street address, City, Zip Code"
                                className="w-full px-4 py-2.5 bg-gray-50 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all"
                            ></textarea>
                        </div>
                    </div>

                    <div className="flex items-center justify-end space-x-4 pt-4 border-t border-gray-100">
                        <button
                            type="button"
                            className="px-6 py-2 text-sm font-medium text-gray-600 hover:text-gray-800 transition-colors"
                        >
                            Reset
                        </button>
                        <button
                            type="submit"
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

export default AddStudent;