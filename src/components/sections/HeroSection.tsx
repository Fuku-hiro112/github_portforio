import { PROFILE } from "@/config/profile";

export default function HeroSection() {
  return (
    <section className="pt-32 pb-20 bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 text-white">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center gap-10">
        <div className="w-36 h-36 rounded-full bg-white/20 border-4 border-white/40 flex items-center justify-center text-5xl font-bold shrink-0">
          F
        </div>
        <div className="text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold mb-3">
            {PROFILE.name}
          </h1>
          <p className="text-xl md:text-2xl text-blue-200 mb-4">
            {PROFILE.role}
          </p>
          <p className="text-blue-100 max-w-lg">
            {PROFILE.location}在住。{PROFILE.bio}
          </p>
        </div>
      </div>
    </section>
  );
}
