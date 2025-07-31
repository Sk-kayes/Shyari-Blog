import React, { useState } from 'react';

const AddShayariForm = () => {
    const [formData, setFormData] = useState({
        authorName: '',
        title: '',
        shayariType: '',
        dedicatedTo: '',
        shayariContent: ''
    });

    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormData({ authorName: '', title: '', shayariType: '', dedicatedTo: '', shayariContent: '' });
  };

  return (
    // Main container for the form, centered and styled to match the site's aesthetic
    <div className="min-h-screen flex items-center justify-center bg-[#FFF8F0] py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-xl w-full bg-white p-8 rounded-xl shadow-lg border border-[#fbe0c3]">
        <div className="text-center mb-6">
          <h2 className="text-3xl font-extrabold text-[#C0392B] mb-2">
            Apni Shayari Likhein
          </h2>
          <p className="text-lg text-[#2C3E50]">
            Apne dil ke ehsaason ko alfaazon mein dhaal dein.
          </p>
        </div>

        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          {/* Author Name Input */}
          <div>
            <label htmlFor="author-name" className="sr-only">Author Name</label>
            <input
              id="author-name"
              name="authorName"
              type="text"
              required
              className="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-[#C0392B] focus:border-[#C0392B] focus:z-10 sm:text-sm"
              placeholder="Aapka Naam"
              value={formData.authorName}
              onChange={onChangeHandler}
            />
          </div>

          {/* Title of Shayari Input */}
          <div>
            <label htmlFor="shayari-title" className="sr-only">Title of Shayari</label>
            <input
              id="shayari-title"
              name="title"
              type="text"
              required
              className="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-[#C0392B] focus:border-[#C0392B] focus:z-10 sm:text-sm"
              placeholder="Shayari Ka Title"
              value={formData.title}
              onChange={onChangeHandler}
            />
          </div>

          {/* Type of Shayari Input (now a text input) */}
          <div>
            <label htmlFor="shayari-type" className="sr-only">Type of Shayari</label>
            <input
              id="shayari-type"
              name="shayariType"
              type="text"
              required
              className="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-[#C0392B] focus:border-[#C0392B] focus:z-10 sm:text-sm"
              placeholder="Shayari Ki Type (e.g., Pyaar, Gham, Dosti)"
              value={formData.shayariType}
              onChange={onChangeHandler}
            />
          </div>

          {/* Dedicated To Input (Optional) */}
          <div>
            <label htmlFor="dedicated-to" className="sr-only">Dedicated To</label>
            <input
              id="dedicated-to"
              name="dedicatedTo"
              type="text"
              className="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-[#C0392B] focus:border-[#C0392B] focus:z-10 sm:text-sm"
              placeholder="Kisko Dedicate Karna Chahte Hain? (Optional)"
              value={formData.dedicatedTo}
              onChange={onChangeHandler}
            />
          </div>

          {/* Shayari Content Textarea */}
          <div>
            <label htmlFor="shayari-content" className="sr-only">Shayari</label>
            <textarea
              id="shayari-content"
              name="shayariContent"
              rows={8}
              required
              className="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-[#C0392B] focus:border-[#C0392B] focus:z-10 sm:text-sm resize-y"
              placeholder="Apni Shayari Yahan Likhein..."
              value={formData.shayariContent}
              onChange={onChangeHandler}
            ></textarea>
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-[#C0392B] hover:bg-[#a93226] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#C0392B] transition"
            >
              Shayari Submit Karein
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddShayariForm;
