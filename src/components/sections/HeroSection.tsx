import { PROFILE } from "@/config/profile";

export default function HeroSection() {
  return (
    <section className="relative pt-36 pb-20 border-b border-line">
      <div className="max-w-5xl mx-auto px-6">
        <p className="text-accent text-sm tracking-[0.25em] mb-6">ポートフォリオ</p>
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-3 text-ink">
          {PROFILE.name}
        </h1>
        <p className="font-display text-lg text-faint mb-8 tracking-wide">
          {PROFILE.nameEn}
        </p>
        <div className="border-t border-line pt-6 space-y-3">
          <p className="text-xl md:text-2xl text-ink font-medium">
            {PROFILE.roleJa}
          </p>
          <p className="text-muted max-w-xl leading-relaxed">
            {PROFILE.location}在住。{PROFILE.bio}
          </p>
        </div>
      </div>
    </section>
  );
}
