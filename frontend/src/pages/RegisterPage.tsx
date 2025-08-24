import React, { useState } from "react";
import axios from "axios";

const RegisterPage = () => {
    const [formData, setFormData] = useState({
        fullName: "",
        username: "",
        email: "",
        password: "",
        confirmPassword: "",
        profilePic: null,
    });

    const [message, setMessage] = useState("");

    const handleChange = (e) => {
        const { name, value, files } = e.target;
        if (files) {
            setFormData({ ...formData, [name]: files[0] });
        } else {
            setFormData({ ...formData, [name]: value });
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            // Create FormData for file upload
            const data = new FormData();
            data.append("fullName", formData.fullName);
            data.append("username", formData.username);
            data.append("email", formData.email);
            data.append("password", formData.password);
            data.append("confirmPassword", formData.confirmPassword);
            if (formData.profilePic) {
                data.append("profilePic", formData.profilePic);
            }

            // Send to API Gateway
            const res = await axios.post("http://localhost:3000/auth/register", data, {
                headers: { "Content-Type": "multipart/form-data" },
            });

            setMessage("✅ Registered successfully!");
            console.log("Response:", res.data);
        } catch (err) {
            console.error("Registration error:", err.response?.data || err.message);
            setMessage("❌ " + (err.response?.data?.message || "Registration failed"));
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-[#FFF8F0] px-4">
            <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
                <h2 className="text-2xl font-bold text-[#C0392B] mb-6 text-center">
                    Create an Account
                </h2>

                {/* Feedback Message */}
                {message && (
                    <div
                        className={`mb-4 text-center font-medium ${message.startsWith("✅") ? "text-green-600" : "text-red-600"
                            }`}
                    >
                        {message}
                    </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-4">
                    {/* Full Name */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700">
                            Full Name
                        </label>
                        <input
                            type="text"
                            name="fullName"
                            value={formData.fullName}
                            onChange={handleChange}
                            placeholder="Enter your full name"
                            className="w-full mt-1 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-[#C0392B] focus:outline-none"
                        />
                    </div>

                    {/* Username */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700">
                            Username <span className="text-red-500">*</span>
                        </label>
                        <input
                            type="text"
                            name="username"
                            required
                            value={formData.username}
                            onChange={handleChange}
                            placeholder="Choose a username"
                            className="w-full mt-1 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-[#C0392B] focus:outline-none"
                        />
                    </div>

                    {/* Email */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700">
                            Email <span className="text-red-500">*</span>
                        </label>
                        <input
                            type="email"
                            name="email"
                            required
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Enter your email"
                            className="w-full mt-1 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-[#C0392B] focus:outline-none"
                        />
                    </div>

                    {/* Password */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700">
                            Password <span className="text-red-500">*</span>
                        </label>
                        <input
                            type="password"
                            name="password"
                            required
                            value={formData.password}
                            onChange={handleChange}
                            placeholder="Enter password"
                            className="w-full mt-1 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-[#C0392B] focus:outline-none"
                        />
                    </div>

                    {/* Confirm Password */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700">
                            Confirm Password <span className="text-red-500">*</span>
                        </label>
                        <input
                            type="password"
                            name="confirmPassword"
                            required
                            value={formData.confirmPassword}
                            onChange={handleChange}
                            placeholder="Re-enter password"
                            className="w-full mt-1 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-[#C0392B] focus:outline-none"
                        />
                    </div>

                    {/* Profile Picture */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700">
                            Profile Picture
                        </label>
                        <input
                            type="file"
                            name="profilePic"
                            accept="image/*"
                            onChange={handleChange}
                            className="w-full mt-1"
                        />
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="w-full bg-[#C0392B] text-white py-2 rounded-lg font-semibold hover:bg-[#a93226] transition-all duration-300"
                    >
                        Register
                    </button>
                </form>

                <p className="text-sm text-center text-gray-600 mt-4">
                    Already have an account?{" "}
                    <a href="/login" className="text-[#C0392B] hover:underline">
                        Login
                    </a>
                </p>
            </div>
        </div>
    );
};

export default RegisterPage;
