import { wrap } from "@/lib/ui";

// One numbered telling of the work: 1 to 4, a name, and one line.
// On a phone the steps stack. They never sit in a thin horizontal strip.
export default function ProcessSteps({ label, heading, text, steps }) {
  return (
    <section className="bg-surface-low grain border-y border-outline-light/70">
      <div className={`${wrap} py-20 md:py-28`}>
        <p className="eyebrow mb-4">{label}</p>
        <h2 className="type-h2 text-primary mb-4">{heading}</h2>
        <p className="type-body text-on-surface-muted mb-14 md:mb-16">{text}</p>
        <ol className="process-steps">
          {steps.map((step, i) => (
            <li key={step.title}>
              <span className="process-num">{i + 1}</span>
              <h3 className="type-h3 text-primary mb-3">{step.title}</h3>
              <p className="type-body text-on-surface-muted">{step.desc}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
