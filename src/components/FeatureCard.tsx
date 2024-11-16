import { LucideIcon } from 'lucide-react'

interface FeatureCardProps {
  icon: LucideIcon
  title: string
  description: string
  ctaText: string
  iconColor?: string
  onCtaClick: () => void
}

//Enhanced FeatureCard component with updated border radius
export const FeatureCard = ({ icon: Icon, title, description, ctaText, onCtaClick, iconColor }: FeatureCardProps) => {
  return (
    <div className="bg-white/10 rounded-[1.5rem] sm:rounded-[2rem] lg:rounded-[2.5rem] p-6 relative group hover:transform hover:scale-105 transition-all duration-300">
      <div className="space-y-4">
        <div className="inline-block rounded-2xl bg-white/20 p-3">
          <Icon className={`w-6 h-6 ${iconColor}`} />
        </div>
        <h3 className="text-xl font-semibold text-white">{title}</h3>
        <p className="text-gray-300">{description}</p>
        <button 
          onClick={onCtaClick}
          className="text-white bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 px-4 py-2 rounded-xl transition-colors duration-300"
        >
          {ctaText}
        </button>
      </div>
    </div>
  );
};