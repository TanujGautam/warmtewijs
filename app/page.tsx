import Link from "next/link";
import styles from "./page.module.css";

const ADVISOR = "/advisor";

const measures = [
  { name: "Spouwmuurisolatie", meta: "€1.950 · ISDE €664", payback: "3,1 yr" },
  { name: "HR++ glas, achtergevel", meta: "€3.400 · ISDE €945", payback: "6,8 yr" },
  { name: "Hybride warmtepomp", meta: "€6.100 · ISDE €2.700", payback: "9,4 yr" },
];

const pillars = [
  {
    title: "No installer commissions",
    text: "Our revenue is a flat fee from you, not a cut of the work. The ranking doesn't change based on who's paying.",
  },
  {
    title: "Not owned by an energy supplier",
    text: "No shareholder sells you gas, electricity, or a service contract. Sometimes the right answer is to do nothing this year.",
  },
  {
    title: "The maths is on the page",
    text: "Every number opens up: assumed gas price, heat demand, subsidy rate, the source it came from. Disagree with an assumption and change it.",
  },
];

const steps = [
  {
    title: "Your address",
    text: "Postcode and house number. We pull build year, floor area, house type and current energy label from public BAG, WOZ and Kadaster records — so you don't type them.",
  },
  {
    title: "A few questions",
    text: "What's already been done, how warm you keep it, how long you plan to stay, and what you can spend. Roughly a dozen questions, all skippable.",
  },
  {
    title: "Your ranked plan",
    text: "Measures in the order that pays best, with cost, saving, payback, subsidy and label effect. Change an assumption and the whole plan recalculates.",
  },
  {
    title: "Take it to anyone",
    text: "Export as PDF and use it to brief an installer, apply for ISDE, or argue your case with the VvE. We're not in the transaction.",
  },
];

const features = [
  {
    title: "Ranked list of measures",
    text: "Ordered by payback, not by margin. Including the measures you should not do yet, and why.",
  },
  {
    title: "Yearly saving in euros",
    text: "Based on your own consumption and a gas and electricity price you can set yourself.",
  },
  {
    title: "Subsidy eligibility",
    text: "ISDE for owners, SVVE for VvE's, plus the municipal and provincial schemes for your postcode.",
  },
  {
    title: "CO₂ reduction",
    text: "Tonnes per year per measure, so you can see what the climate case looks like next to the financial one.",
  },
  {
    title: "Energy label effect",
    text: "Which combination moves you from D to A, and what that's worth on the mortgage and at resale.",
  },
  {
    title: "Financing options",
    text: "Warmtefonds rates, mortgage top-up, or paying cash — shown as monthly cost against monthly saving.",
  },
];

const audiences = [
  {
    title: "Huiseigenaren",
    text: "Owner-occupiers who've had three installers give three different answers. Get one plan you can hold them to.",
    cta: "Start the check →",
  },
  {
    title: "Huurders",
    text: "Renters get the measures their landlord is obliged to consider, plus a letter you can send, and the no-cost changes that still help.",
    cta: "See renter options →",
  },
  {
    title: "VvE's en corporaties",
    text: "Building-level plans with SVVE eligibility, a multi-year MJOP view, and a one-page summary for the ledenvergadering.",
    cta: "Book a walkthrough →",
  },
  {
    title: "Installateurs",
    text: "Customers arrive with a scoped, subsidy-checked brief. You quote against a spec instead of a conversation. No lead fees either way.",
    cta: "For partners →",
  },
];

const sources = [
  ["BAG", "Build year, surface, type"],
  ["EP-Online", "Registered energy label"],
  ["RVO", "ISDE and SVVE rates"],
  ["CBS", "Average consumption by type"],
  ["KNMI", "Degree days, your region"],
];

const pad = (n: number) => String(n).padStart(2, "0");

export default function Home() {
  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <a href="#top" className={styles.brand}>
          <span className={styles.brandMark} />
          <span className={styles.brandName}>Warmtewijs</span>
        </a>
        <nav className={styles.nav}>
          <a href="#how">How it works</a>
          <a href="#plan">Your plan</a>
          <a href="#who">Who it&apos;s for</a>
          <a href="#independent">Independence</a>
          <Link href={ADVISOR} className={styles.navCta}>
            Start free check
          </Link>
        </nav>
      </header>

      <section id="top" className={styles.hero}>
        <div className={`${styles.container} ${styles.heroGrid}`}>
          <div>
            <div className={styles.badge}>Onafhankelijk · No commissions</div>
            <h1 className={styles.h1}>
              Know exactly what to fix in your house first.
            </h1>
            <p className={styles.lede}>
              Warmtewijs is an independent AI energy advisor for Dutch homes.
              Enter your address, answer a few questions, and get a ranked plan:
              what to insulate, what it costs, what you get back, and which
              subsidy applies.
            </p>

            <form action={ADVISOR} className={styles.addressCard}>
              <label htmlFor="postcode" className={styles.addressLabel}>
                Start with your address
              </label>
              <div className={styles.addressRow}>
                <input
                  id="postcode"
                  name="postcode"
                  defaultValue="1015 CJ"
                  placeholder="Postcode"
                  autoComplete="postal-code"
                  className={`${styles.input} ${styles.inputPostcode}`}
                />
                <input
                  name="nr"
                  defaultValue="42 B"
                  placeholder="Nr."
                  aria-label="House number"
                  className={`${styles.input} ${styles.inputNr}`}
                />
                <button type="submit" className={styles.submit}>
                  Check my house
                </button>
              </div>
              <div className={styles.addressNote}>
                Free. No account. Takes about four minutes.
              </div>
            </form>
          </div>

          <div className={styles.preview}>
            <div className={styles.previewHead}>
              <span>Plan · Rijtjeshuis 1972</span>
              <span className={styles.previewLabel}>Label D → A</span>
            </div>
            <div className={styles.stats}>
              <div>
                <div className={styles.statLabel}>Saving / year</div>
                <div className={styles.statValue}>€1.840</div>
              </div>
              <div>
                <div className={styles.statLabel}>Subsidy</div>
                <div className={styles.statValue}>€4.310</div>
              </div>
              <div>
                <div className={styles.statLabel}>CO₂ / year</div>
                <div className={styles.statValue}>2,1 t</div>
              </div>
            </div>
            <div className={styles.measures}>
              {measures.map((m, i) => (
                <div key={m.name} className={styles.measure}>
                  <span className={styles.measureNum}>{pad(i + 1)}</span>
                  <span>
                    <span className={styles.measureName}>{m.name}</span>
                    <span className={styles.measureMeta}>{m.meta}</span>
                  </span>
                  <span className={styles.measurePayback}>{m.payback}</span>
                </div>
              ))}
              <div className={`${styles.measure} ${styles.measureLater}`}>
                <span className={styles.measureNum}>—</span>
                <span>
                  <span className={styles.measureName}>Zonnepanelen (12×)</span>
                  <span className={styles.measureMeta}>
                    Not yet — roof needs work first
                  </span>
                </span>
                <span className={styles.measurePayback}>later</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="independent" className={styles.independent}>
        <div className={styles.container}>
          <h2>
            We don&apos;t sell installations, and nobody pays us to recommend
            theirs.
          </h2>
          <div className={styles.pillars}>
            {pillars.map((p, i) => (
              <div key={p.title} className={styles.pillar}>
                <div className={styles.pillarNum}>{pad(i + 1)}</div>
                <div className={styles.pillarTitle}>{p.title}</div>
                <p>{p.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="how" className={styles.section}>
        <div className={styles.container}>
          <div className={styles.eyebrow}>How it works</div>
          <h2 className={styles.h2} style={{ maxWidth: "20ch" }}>
            Four minutes in, a plan you can act on.
          </h2>
          <div className={styles.steps}>
            {steps.map((s, i) => (
              <div key={s.title} className={styles.step}>
                <div className={styles.stepNum}>STEP {pad(i + 1)}</div>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="plan" className={styles.section}>
        <div className={styles.container}>
          <div className={styles.eyebrow}>What you get</div>
          <h2 className={styles.h2} style={{ maxWidth: "22ch" }}>
            Six answers, all for your specific house.
          </h2>
          <div className={styles.features}>
            {features.map((f) => (
              <div key={f.title} className={styles.feature}>
                <h3>{f.title}</h3>
                <p>{f.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="who" className={styles.section}>
        <div className={styles.container}>
          <div className={styles.eyebrow}>Who it&apos;s for</div>
          <h2 className={styles.h2} style={{ maxWidth: "20ch" }}>
            Four ways in.
          </h2>
          <div className={styles.audiences}>
            {audiences.map((a) => (
              <div key={a.title} className={styles.audience}>
                <div className={styles.audienceMark} />
                <h3>{a.title}</h3>
                <p>{a.text}</p>
                <Link href={ADVISOR}>{a.cta}</Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={`${styles.container} ${styles.sourcesGrid}`}>
          <div>
            <div className={styles.eyebrow}>Where the numbers come from</div>
            <h2 className={styles.sourcesTitle}>
              Public data, stated assumptions.
            </h2>
            <p className={styles.sourcesText}>
              The model runs on open registers and published tariffs. We show
              every input we used and let you overwrite it. If we got your house
              wrong, you can correct it in one click and the plan updates.
            </p>
          </div>
          <div className={styles.sourceList}>
            {sources.map(([name, desc]) => (
              <div key={name} className={styles.source}>
                <span className={styles.sourceName}>{name}</span>
                <span className={styles.sourceDesc}>{desc}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.cta}>
        <div className={`${styles.container} ${styles.ctaInner}`}>
          <div>
            <h2>Find out what your house actually needs.</h2>
            <p>Free, no account, four minutes. Available in Dutch and English.</p>
          </div>
          <Link href={ADVISOR} className={styles.ctaButton}>
            Start free check
          </Link>
        </div>
      </section>

      <footer className={styles.footer}>
        <div className={`${styles.container} ${styles.footerInner}`}>
          <div className={styles.footerBrand}>
            <span className={styles.footerMark} />
            <span className={styles.footerText}>
              Warmtewijs B.V. · Amsterdam · KvK 91.204.338
            </span>
          </div>
          <div className={styles.footerLinks}>
            <a href="#independent">Independence</a>
            <a href="#how">Method</a>
            <a href="#top">Privacy</a>
            <a href="#top">Nederlands</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
