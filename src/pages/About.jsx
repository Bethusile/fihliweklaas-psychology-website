import { BookOpen, Award, CheckCircle } from 'lucide-react';
import profileImg from '../assets/pic-sitting2.jpeg';

const About = () => {
  return (
    <main className="pt-32 pb-24 bg-[#FDFBF9] min-h-screen">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row gap-16 items-center mb-24">
          <div className="md:w-1/2">
            <div className="relative">
              <img 
                src={profileImg} 
                alt="Fihliwe Klaas" 
                className="w-full h-[500px] object-cover rounded-3xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-[#B584B1] text-white p-8 rounded-2xl hidden md:block">
                <p className="text-2xl font-serif">"Healing is not linear."</p>
              </div>
            </div>
          </div>
          
          <div className="md:w-1/2 space-y-6">
            <p className="text-[10px] uppercase tracking-[0.2em] text-[#2D4A31] font-semibold">
              Meet Fihliwe
            </p>
            <h1 className="text-5xl font-serif leading-tight text-[#1A2C1D]">
              Dedicated to your mental well-being
            </h1>
            <p className="text-gray-600 leading-relaxed">
              I am a registered psychologist based in South Africa, specializing in 
              the emotional and mental development of young people. My journey into 
              psychology started with a desire to provide the kind of support I saw 
              was missing for many growing up in our communities.
            </p>
            <p className="text-gray-600 leading-relaxed">
              I believe that therapy is a collaborative process. I am not here to 
              "fix" you, but to walk alongside you as you discover your own 
              strength and resilience.
            </p>
          </div>
        </div>

        {/* Qualifications Section */}
        <div className="bg-[#1A2C1D] rounded-[3rem] p-12 md:p-20 text-white">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl font-serif mb-8">Qualifications & Experience</h2>
              <div className="space-y-8">
                <div className="flex gap-4">
                  <div className="mt-1 text-[#86A88B]"><Award size={24} /></div>
                  <div>
                    <h4 className="font-medium text-lg">Registered Psychologist</h4>
                    <p className="text-sm text-[#86A88B]">Health Professions Council of South Africa (HPCSA)</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="mt-1 text-[#86A88B]"><BookOpen size={24} /></div>
                  <div>
                    <h4 className="font-medium text-lg">Academic Background</h4>
                    <p className="text-sm text-[#86A88B]">Specialized training in Child and Adolescent Psychology.</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-serif mb-8">My Approach</h2>
              <ul className="space-y-4">
                {[
                  "Trauma-informed therapy",
                  "Client-centered and empathetic",
                  "Play-based techniques for children",
                  "Culturally sensitive practice",
                  "Cognitive Behavioral Therapy (CBT) tools"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-gray-300">
                    <CheckCircle size={16} className="text-[#B584B1]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

      </div>
    </main>
  );
};

export default About;