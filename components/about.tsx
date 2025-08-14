// components/AboutUs.tsx
import Image from 'next/image';

export const metadata = {
  title: "About Us - Al Mufeeda Academy",
  description: "Learn more about Al Mufeeda Academy and our mission.",
};

export default function AboutUs() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-emerald-50 to-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-emerald-800 mb-4">
            About Al Mufeeda Academy
          </h2>
          <div className="w-24 h-1 bg-amber-500 mx-auto"></div>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <div className="lg:w-1/2">
            <div className="relative h-64 md:h-80 rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/images/Gemini_Generated_Image_xzvqqjxzvqqjxzvq.png" // Replace with your image
                alt="Al Mufeeda Academy"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-emerald-900/20"></div>
            </div>
          </div>

          <div className="lg:w-1/2 space-y-6">
            <p className="text-lg text-gray-700">
              Welcome to <span className="font-semibold text-emerald-700">Al Mufeeda Academy</span> — 
              a dedicated institute committed to providing authentic, sound, and in-depth Islamic and 
              Qur'anic education to women and the youth.
            </p>

            <div className="p-6 bg-white rounded-lg shadow-md border-l-4 border-amber-400">
              <p className="text-gray-700">
                Our mission is to nurture a strong Islamic identity and deepen the connection with 
                Allah ﷻ through meaningful and relevant knowledge.
              </p>
            </div>

            <p className="text-lg text-gray-700">
              We are proud to launch our journey with a unique Islamic Studies course designed 
              specifically for youth — boys and girls — covering essential topics to help them 
              confidently navigate life as practicing Muslims, in sha Allah.
            </p>

            <div className="mt-8 p-6 bg-emerald-800 text-white rounded-lg">
              <h3 className="text-xl font-semibold mb-3">Our Teacher</h3>
              <p>
                A qualified Qaaidah Nooraniyyah instructor with years of experience teaching Tajweed, 
                Qur'an, and Islamic Studies to children and teenagers in both madrassah settings and 
                private sessions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}