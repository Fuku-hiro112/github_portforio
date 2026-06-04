import { PROFILE } from "@/config/profile";
import ScrollFadeIn from "@/components/ui/ScrollFadeIn";
import SectionHeading from "@/components/ui/SectionHeading";

export default function AboutSection() {
  return (
    <section id="about" className="py-24 border-b border-line">
      <div className="max-w-5xl mx-auto px-6">
        <SectionHeading index="01" en="About">
          自己紹介
        </SectionHeading>
        <ScrollFadeIn>
          <div className="max-w-2xl text-lg text-muted leading-loose space-y-5">
            {PROFILE.aboutParagraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </ScrollFadeIn>
      </div>
    </section>
  );
}
