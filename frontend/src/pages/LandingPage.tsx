import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const LandingPage = () => {
  return (
    <>
    <Navbar />
      <div className="bg-[#FFF8F0] text-[#2C3E50]">

        {/* <!-- 🌇 Hero Section --> */}
        <section className="text-center py-16 px-4 bg-gradient-to-b from-[#fbe0c3] to-[#FFF8F0]">
          <div className="max-w-4xl mx-auto">
            <img src="https://i.pinimg.com/736x/11/24/b1/1124b1c4637d9469731c56d99bdbdbd9.jpg" alt="Romantic Sunset" className="rounded-xl shadow-lg w-full h-auto object-cover mb-8" />
            <h1 className="text-4xl md:text-5xl font-bold text-[#C0392B] mb-4">Dil Ki Baat, Shayari Ke Saath</h1>
            <p className="text-lg md:text-xl mb-6">
              Har dil mein chhupi hoti hai kuch baatein... ab likho unhe shabdon mein.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button className="bg-[#C0392B] text-white px-6 py-2 rounded-full hover:bg-[#a93226] transition">Read Shayari</button>
              <button className="border border-[#C0392B] text-[#C0392B] px-6 py-2 rounded-full hover:bg-[#fde6e2] transition">Write Your Shayari</button>
            </div>
          </div>
        </section>

        {/* <!-- ❤️ About Section --> */}
        <section className="py-16 px-6">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-3xl font-semibold text-[#C0392B] mb-4">Kya hai Dil-Ki-Baat?</h2>
            <p className="text-lg mb-4">
              Shayari ek aisi kala hai jo dil se nikalti hai aur dusre dil tak jaati hai.
              Humne "Dil-Ki-Baat" banaya un sabke liye jinke paas kehne ko bahut kuch hai, par sunne wala koi nahi.
            </p>
            <p className="text-lg mb-4">
              Chahe pyaar ho, judai ho, ya ek adhura rishta — yahan har ehsaas ko shabdon ka roop milta hai.
              Aap likh sakte ho apni baat, padh sakte ho dusron ki.
            </p>
            <p className="text-lg">
              Ye platform aapko ek safe jagah deta hai jahan aap apna dil halka kar sakte ho.
              Jab aap kisi anjaan ki baat padhte ho, kabhi-kabhi woh aapki apni lagti hai.
            </p>
          </div>
        </section>

        {/* <!-- 📸 Visual Shayari Cards (Sample Grid) --> */}
        <section className="bg-[#fdf1e8] py-14 px-6">
          <div className="max-w-6xl mx-auto">
            <h3 className="text-2xl font-bold text-[#C0392B] text-center mb-8">Popular Shayari Snippets</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              <div className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition">
                <p className="italic text-lg">"Tere jaane ke baad bhi, tere hone ka ehsaas rehta hai..."</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition">
                <p className="italic text-lg">"Kabhi khushi, kabhi gham — Shayari har pal mein saath hai."</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition">
                <p className="italic text-lg">"Jo lafz nahi keh sakte, woh hum likh dete hain."</p>
              </div>
            </div>
          </div>
        </section>

        {/* <!-- 🌟 Quotes to Inspire --> */}
        <section className="py-14 px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-2xl font-semibold text-[#C0392B] mb-6">Motivational Quotes</h3>
            <div className="space-y-4 text-lg italic">
              <p>"Jab dil bhare ho, toh shabdon se halka kar lo."</p>
              <p>"Shayari, ek aisi zubaan hai jo sirf dil samajhta hai."</p>
              <p>"Har likhi line mein ek kahani chhupi hoti hai."</p>
            </div>
          </div>
        </section>

        {/* <!-- ✨ How it Works --> */}
        <section className="bg-[#fbe9db] py-16 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-2xl font-bold text-[#C0392B] mb-8">Shuru kaise karein?</h3>
            <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6 text-left text-lg">
              <div>
                <span className="font-bold">1. </span> Sign Up karo ya Guest ban kar likho
              </div>
              <div>
                <span className="font-bold">2. </span> Apni Shayari likho ya koi purani baat likho
              </div>
              <div>
                <span className="font-bold">3. </span> Share karo aur doosron ki bhi padhkar connect ho jao
              </div>
              <div>
                <span className="font-bold">4. </span> Trending tags se explore karo emotions ki duniya
              </div>
            </div>
          </div>
        </section>

        {/* <!-- 📊 Community Stats --> */}
        <section className="py-14 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-2xl font-semibold text-[#C0392B] mb-4">Dil Se Judne Wale</h3>
            <p className="text-lg mb-6">❤️ <strong>12,000+</strong> Shayari shared | 🤝 <strong>5,500+</strong> Users connected</p>
          </div>
        </section>

      </div>
      <Footer />
    </>
  );
};

export default LandingPage;
