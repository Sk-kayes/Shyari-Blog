import React from 'react';

const AboutUsPage = () => {
  return (
    // Main container for the About Us page, matching the site's background and text colors
    <div className="min-h-screen bg-[#FFF8F0] text-[#2C3E50] py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-xl shadow-lg border border-[#fbe0c3]">
        <div className="text-center mb-10">
          <h1 className="text-4xl md:text-5xl font-extrabold text-[#C0392B] mb-4">
            Humare Baare Mein: Dil-Ki-Baat
          </h1>
          <p className="text-lg md:text-xl text-[#2C3E50]">
            Jahan har ehsaas ko alfaaz milte hain, aur har dil ko sukoon.
          </p>
        </div>

        {/* Introduction Section */}
        <section className="mb-10">
          <h2 className="text-3xl font-semibold text-[#C0392B] mb-4 text-center">
            Hamari Kahani
          </h2>
          <p className="text-lg leading-relaxed mb-4">
            Har insaan ke dil mein kuch aisi baatein hoti hain jo woh kehna chahta hai, par shayad sahi lafz nahi milte ya sunne wala koi nahi hota. Isi ehsaas ko samjhte hue, humne **Dil-Ki-Baat** banaya hai. Yeh sirf ek website nahi, balki ek aisi jagah hai jahan aap apne dil ke jazbaat ko shayari ke roop mein bayaan kar sakte hain, aur doosron ki baaton mein khud ko pa sakte hain.
          </p>
          <p className="text-lg leading-relaxed">
            Humara maqsad hai ek aisa platform dena jahan har koi bina kisi jhijhak ke apne ehsaas share kar sake. Chahe woh khushi ho, gham ho, pyaar ho, ya zindagi ka koi bhi rang – yahan har ehsaas ko shabdon ki roshni milti hai.
          </p>
        </section>

        {/* Our Mission Section */}
        <section className="mb-10">
          <h2 className="text-3xl font-semibold text-[#C0392B] mb-4 text-center">
            Humara Maqsad
          </h2>
          <p className="text-lg leading-relaxed mb-4">
            **Dil-Ki-Baat** ka maqsad hai shayari ke zariye dilon ko jodna. Hum chahte hain ki har koi is khoobsurat kala ka hissa bane, apni creativity dikhaye, aur doosron ki rachnaon se inspire ho. Hum ek aisi community banana chahte hain jahan lafz sirf padhe na jaayen, balki mehsoos kiye jaayen.
          </p>
          <p className="text-lg leading-relaxed">
            Humare liye har shayari khaas hai, kyunki woh kisi ke dil ki awaaz hai. Hum is awaaz ko duniya tak pahunchane mein aapki madad karna chahte hain.
          </p>
        </section>

        {/* What Makes Us Special Section */}
        <section className="mb-10">
          <h2 className="text-3xl font-semibold text-[#C0392B] mb-4 text-center">
            Kyun Dil-Ki-Baat Hi Chunein?
          </h2>
          <ul className="list-disc list-inside text-lg leading-relaxed space-y-2 text-left mx-auto max-w-2xl">
            <li><strong className="font-semibold">Har Mood Ki Shayari:</strong> Yahan aapko har tarah ke jazbaat ke liye shayari milegi – ishq, judai, dosti, zindagi, aur bahut kuch.</li>
            <li><strong className="font-semibold">Nayi Aur Taazi Shayaris:</strong> Hum roz nayi aur dil ko chhoo lene wali shayaris add karte hain, taaki aapko hamesha kuch naya padhne ko mile.</li>
            <li><strong className="font-semibold">Simple Aur Aasan Interface:</strong> Humara platform bahut hi user-friendly hai, jahan aap aasani se apni pasand ki shayari dhoondh sakte hain aur likh sakte hain.</li>
            <li><strong className="font-semibold">Ek Judti Hui Community:</strong> Humari community mein aap jaise aur bhi poetry lovers hain, jahan aap apne ehsaas share kar sakte hain aur doosron ki shayaris ka lutf utha sakte hain.</li>
          </ul>
        </section>
      </div> {/* Closing tag for the main content card */}

      {/* Call to Action - Moved outside the main content card */}
      <div className="text-center mt-10 max-w-4xl mx-auto"> {/* Added max-w-4xl and mx-auto for centering */}
        <h2 className="text-3xl font-semibold text-[#C0392B] mb-6">
          Humare Parivaar Ka Hissa Banein
        </h2>
        <p className="text-lg leading-relaxed mb-8">
          Agar aap bhi apne dil ki baat kehna chahte hain ya doosron ke ehsaason se judna chahte hain, toh aaj hi humare saath judiye.
        </p>
      </div>
    </div>
  );
};

export default AboutUsPage;
