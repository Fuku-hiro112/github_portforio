import { CERTIFICATIONS } from "@/config/profile";
import ScrollFadeIn from "@/components/ui/ScrollFadeIn";
import SectionHeading from "@/components/ui/SectionHeading";

export default function CertificationsSection() {
  return (
    <section id="certifications" className="py-24 border-b border-line">
      <div className="max-w-5xl mx-auto px-6">
        <SectionHeading index="05" en="Certifications">
          資格
        </SectionHeading>
        <div className="max-w-2xl border-t border-line">
          {CERTIFICATIONS.map((cert) => (
            <ScrollFadeIn key={cert.name}>
              <div className="flex items-baseline justify-between gap-4 py-4 border-b border-line">
                <p className="text-ink">{cert.name}</p>
                <p className="text-sm text-faint tabular-nums shrink-0">
                  {cert.date}
                </p>
              </div>
            </ScrollFadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
