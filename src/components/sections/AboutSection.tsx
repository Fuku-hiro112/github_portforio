import { PROFILE } from "@/config/profile";
import ScrollFadeIn from "@/components/ui/ScrollFadeIn";
import SectionHeading from "@/components/ui/SectionHeading";

export default function AboutSection() {
  return (
    <section id="about" className="py-20">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeading>About</SectionHeading>
        <ScrollFadeIn>
          <div className="max-w-3xl mx-auto text-center text-gray-600 leading-relaxed space-y-4">
            {PROFILE.aboutParagraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </ScrollFadeIn>
      </div>
    </section>
  );
}
