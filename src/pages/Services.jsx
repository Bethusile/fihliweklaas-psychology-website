import { User, Users, Baby, Check, Sparkles, Heart, Shield } from 'lucide-react';

const ServiceSection = ({ title, description, features, Icon, reverse }) => (
  <div className={`flex flex-col ${reverse ? 'md:flex-row-reverse' : 'md:flex-row'} gap-16 items-center py-20`}>
    {/* Left/Right: Icon Box instead of Image */}
    <div className="md:w-1/2 w-full">
      <div className="w-full h-[350px] bg-[#F4F1F4] rounded-[2.5rem] flex items-center justify-center text-[#B584B1] border border-[#EDE7ED]">
        {/* We scale the icon up to be a focal point */}
        <Icon size={120} strokeWidth={1} />
      </div>
    </div>

    {/* Right/Left: Text side */}
    <div className="md:w-1/2 space-y-6">
      <h2 className="text-3xl font-serif text-[#1A2C1D]">{title}</h2>
      <p className="text-gray-600 leading-relaxed">{description}</p>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
        {features.map((f, i) => (
          <div key={i} className="flex items-center gap-3 text-sm text-gray-500 bg-white p-3 rounded-xl border border-gray-50 shadow-sm">
            <div className="text-[#B584B1]"><Check size={14} /></div>
            {f}
          </div>
        ))}
      </div>
    </div>
  </div>
);

const Services = () => {
  return (
    <main className="pt-32 pb-24 bg-[#FDFBF9] min-h-screen">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-[10px] uppercase tracking-[0.2em] text-[#2D4A31] font-semibold mb-4">
            Areas of Expertise
          </p>
          <h1 className="text-5xl font-serif mb-6 text-[#1A2C1D]">Therapeutic Services</h1>
          <p className="text-gray-500 max-w-2xl mx-auto leading-relaxed">
            I provide a compassionate space for exploration and healing. 
            Below are the primary ways I can support you or your family.
          </p>
        </div>

        {/* Individual Therapy */}
        <ServiceSection 
          title="Individual Therapy"
          description="Dedicated one-on-one sessions focused on your personal growth. We work together to navigate life's challenges, understand emotional patterns, and develop sustainable coping strategies."
          features={["Anxiety & Panic", "Depression Support", "Trauma Recovery", "Identity Work"]}
          Icon={User}
          reverse={false}
        />

        {/* Child & Adolescent */}
        <ServiceSection 
          title="Child & Adolescent Therapy"
          description="Specialized support for younger clients. I use play-based methods for children and creative, talk-based approaches for teenagers to help them navigate their unique developmental stages."
          features={["Behavioral Concerns", "School Stress", "Bullying & Social", "Emotional Regulation"]}
          Icon={Baby}
          reverse={true}
        />

        {/* Couples & Family */}
        <ServiceSection 
          title="Couples & Family Support"
          description="Facilitating healthy communication and resolving conflicts within relationships. I provide a neutral space to help partners and families reconnect and build stronger bonds."
          Icon={Users}
          features={["Communication Skills", "Conflict Mediation", "Parenting Support", "Life Transitions"]}
          reverse={false}
        />

      </div>
    </main>
  );
};

export default Services;