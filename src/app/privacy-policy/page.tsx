import type { Metadata } from "next";
import Link from "next/link";
import { BreadcrumbSchema } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How Front Range Detail Studio collects, uses and protects the information you share through our quote form, phone, email and website in Englewood, CO.",
  alternates: { canonical: "https://frontrangedetailstudio.com/privacy-policy/" },
  openGraph: {
    title: "Privacy Policy | Front Range Detail Studio",
    description:
      "How Front Range Detail Studio collects, uses and protects the information you share with us.",
    url: "https://frontrangedetailstudio.com/privacy-policy/",
    type: "website",
    locale: "en_US",
    siteName: "Front Range Detail Studio",
    images: [
      {
        url: "/images/og/og-default.jpg",
        width: 1200,
        height: 630,
        alt: "Front Range Detail Studio",
      },
    ],
  },
};

const LAST_UPDATED = "September 5, 2026";

const h2: React.CSSProperties = {
  fontFamily: "var(--font-heading)",
  fontWeight: 700,
  textTransform: "uppercase",
  letterSpacing: "-0.2px",
  fontSize: "clamp(1.15rem, 1.9vw, 1.45rem)",
  color: "#fff",
  margin: "44px 0 14px",
};

const p: React.CSSProperties = {
  margin: "0 0 15px",
  fontFamily: "var(--font-body)",
  fontWeight: 300,
  fontSize: "1rem",
  lineHeight: 1.75,
  color: "rgba(255,255,255,0.78)",
};

const li: React.CSSProperties = { ...p, margin: "0 0 9px" };

const link: React.CSSProperties = { color: "#00BCD4", textDecoration: "underline" };

export default function PrivacyPolicyPage() {
  return (
    <div style={{ background: "#000", fontFamily: "var(--font-body)" }}>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "/" },
          { name: "Privacy Policy", url: "/privacy-policy/" },
        ]}
      />

      <section style={{ padding: "clamp(108px, 11vw, 138px) 0 clamp(28px, 3vw, 40px)" }}>
        <div style={{ maxWidth: 760, margin: "0 auto", padding: "0 clamp(20px, 5vw, 56px)" }}>
          <span
            style={{
              fontFamily: "var(--font-display)",
              fontSize: 12,
              letterSpacing: "0.16em",
              textTransform: "uppercase",
              color: "#00BCD4",
            }}
          >
            Legal
          </span>
          <h1
            style={{
              margin: "14px 0 12px",
              fontFamily: "var(--font-heading)",
              fontWeight: 800,
              textTransform: "uppercase",
              letterSpacing: "-0.5px",
              fontSize: "clamp(2rem, 5vw, 3.1rem)",
              lineHeight: 1.05,
              color: "#fff",
            }}
          >
            Privacy Policy
          </h1>
          <p
            style={{
              margin: 0,
              fontFamily: "var(--font-body)",
              fontSize: "0.9rem",
              color: "rgba(255,255,255,0.5)",
            }}
          >
            Last updated {LAST_UPDATED}
          </p>
        </div>
      </section>

      <section style={{ padding: "0 0 clamp(64px, 8vw, 104px)" }}>
        <div style={{ maxWidth: 760, margin: "0 auto", padding: "0 clamp(20px, 5vw, 56px)" }}>
          <p style={p}>
            Front Range Detail Studio (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or
            &ldquo;our&rdquo;) operates frontrangedetailstudio.com. This policy
            explains what information we collect when you use this website or
            contact us, why we collect it, who we share it with, and the choices
            you have. We keep this deliberately plain — we are a vehicle
            protection and detailing shop, not an advertising business, and we do
            not sell customer information.
          </p>

          <h2 style={h2}>Information you give us</h2>
          <p style={p}>
            When you submit a quote request through this website, we ask for:
          </p>
          <ul style={{ paddingLeft: 22, margin: "0 0 15px" }}>
            <li style={li}>Your name</li>
            <li style={li}>Your email address</li>
            <li style={li}>Your phone number, if you choose to provide it</li>
            <li style={li}>Your vehicle&rsquo;s make, model and year</li>
            <li style={li}>The services you are interested in</li>
            <li style={li}>How you prefer to be contacted</li>
            <li style={li}>Any additional comments you write in the form</li>
          </ul>
          <p style={p}>
            You can also reach us by phone, email, text message or in person. In
            those cases we hold whatever you choose to tell us — typically the
            same kind of contact and vehicle details, plus any notes needed to
            quote or perform the work.
          </p>

          <h2 style={h2}>Information collected automatically</h2>
          <p style={p}>
            Like most websites, ours records basic technical information when you
            visit: IP address, browser and device type, the pages you view, how
            you arrived, and how long you stay. This comes from analytics and
            security tooling rather than anything you type.
          </p>
          <p style={p}>
            We use Google Analytics, loaded through Google Tag Manager, to
            understand which pages and services people are interested in. Google
            Analytics sets cookies and processes this data on our behalf. You can
            opt out across all sites using Google&rsquo;s{" "}
            <a
              href="https://tools.google.com/dlpage/gaoptout"
              target="_blank"
              rel="noopener noreferrer"
              style={link}
            >
              browser opt-out add-on
            </a>
            , or by blocking cookies in your browser settings. Blocking them does
            not affect your ability to use this site or request a quote.
          </p>
          <p style={p}>
            Some pages embed a Google Map showing our location, and our reviews
            are pulled from our Google Business Profile. When those elements
            load, Google may set cookies and receive your IP address under its
            own privacy policy.
          </p>

          <h2 style={h2}>How we use your information</h2>
          <p style={p}>We use what we collect to:</p>
          <ul style={{ paddingLeft: 22, margin: "0 0 15px" }}>
            <li style={li}>Prepare and send you a quote</li>
            <li style={li}>Contact you about your request, booking or vehicle</li>
            <li style={li}>Schedule and carry out the work, and handle warranty questions afterwards</li>
            <li style={li}>Keep records of work performed on your vehicle</li>
            <li style={li}>Understand how the website is used so we can improve it</li>
            <li style={li}>Meet our legal, tax and accounting obligations</li>
          </ul>
          <p style={p}>
            We do not use your details for automated decision-making, and we do
            not add you to a marketing list from a quote request alone. If we
            ever start sending promotional messages, every one will include a way
            to unsubscribe.
          </p>

          <h2 style={h2}>Who we share it with</h2>
          <p style={p}>
            <strong style={{ color: "#fff", fontWeight: 600 }}>
              We do not sell, rent or trade your personal information.
            </strong>{" "}
            We share it only with service providers that help us run the business,
            and only to the extent they need it:
          </p>
          <ul style={{ paddingLeft: 22, margin: "0 0 15px" }}>
            <li style={li}>
              Our email delivery provider, which transmits quote requests from
              the website to our inbox
            </li>
            <li style={li}>Our website host and analytics providers</li>
            <li style={li}>
              Payment processors, when you pay for work — card details are handled
              by the processor and are never stored on this website
            </li>
            <li style={li}>
              Professional advisers such as our accountant, where required
            </li>
          </ul>
          <p style={p}>
            We may also disclose information where the law requires it, to respond
            to a valid legal request, or to protect our rights, property or
            safety. If the business is ever sold or transferred, customer records
            may transfer with it, and this policy would continue to apply to
            information collected before that point.
          </p>

          <h2 style={h2}>How long we keep it</h2>
          <p style={p}>
            We keep quote requests and customer records for as long as we need
            them for the purpose they were collected — which for vehicle work
            means for the life of any applicable warranty, and afterwards for as
            long as our tax and accounting obligations require. Enquiries that
            never became jobs are cleared out periodically. You can ask us to
            delete your information sooner, and we will unless we are required to
            keep it.
          </p>

          <h2 style={h2}>How we protect it</h2>
          <p style={p}>
            This website is served entirely over an encrypted HTTPS connection,
            and quote requests are transmitted to us over encrypted channels.
            Access to customer records is limited to the people who need it to do
            their job. No method of transmission or storage is completely secure,
            so we cannot guarantee absolute security, but we take reasonable and
            appropriate measures to protect what you share with us.
          </p>

          <h2 style={h2}>Your choices and rights</h2>
          <p style={p}>
            You can ask us at any time to tell you what personal information we
            hold about you, correct anything that is wrong, delete it, or provide
            a copy of it. You can also ask us to stop contacting you. To make a
            request, email{" "}
            <a href="mailto:info@frontrangedetailstudio.com" style={link}>
              info@frontrangedetailstudio.com
            </a>{" "}
            or call{" "}
            <a href="tel:+13035208023" style={link}>
              (303) 520-8023
            </a>
            . We may need to verify your identity before we act, and we will not
            treat you differently for exercising these rights.
          </p>
          <p style={p}>
            Colorado residents have specific rights under the Colorado Privacy
            Act, including the right to access, correct, delete and obtain a
            portable copy of their personal data, and the right to opt out of
            targeted advertising, the sale of personal data, and profiling. We do
            not sell personal data or use it for targeted advertising or
            profiling. If we deny a request, you may appeal by replying to our
            response, and you may contact the Colorado Attorney General&rsquo;s
            office if you are not satisfied with the outcome.
          </p>

          <h2 style={h2}>Do Not Track</h2>
          <p style={p}>
            Browsers vary in how they send &ldquo;Do Not Track&rdquo; signals and
            there is no agreed standard for responding to them, so this site does
            not respond to them differently. The cookie controls in your browser,
            and the Google Analytics opt-out above, remain effective.
          </p>

          <h2 style={h2}>Children</h2>
          <p style={p}>
            This website is intended for adults and is not directed at children
            under 13. We do not knowingly collect information from children. If
            you believe a child has provided us with personal information, please
            contact us and we will delete it.
          </p>

          <h2 style={h2}>Links to other sites</h2>
          <p style={p}>
            Our site links to other websites — our social media profiles, our
            Google Business Profile, and the manufacturers whose products we
            install. We are not responsible for the privacy practices of those
            sites, and we encourage you to read their policies.
          </p>

          <h2 style={h2}>Changes to this policy</h2>
          <p style={p}>
            We may update this policy as our practices or the law change. The
            revised version will be posted on this page with a new
            &ldquo;last updated&rdquo; date. Material changes will be made clear
            on the page.
          </p>

          <h2 style={h2}>Contact us</h2>
          <p style={p}>
            Questions about this policy, or about the information we hold about
            you:
          </p>
          <p style={{ ...p, marginBottom: 6 }}>
            <strong style={{ color: "#fff", fontWeight: 600 }}>
              Front Range Detail Studio
            </strong>
            <br />
            12559 E Broncos Pkwy, Englewood, CO 80112
            <br />
            <a href="tel:+13035208023" style={link}>
              (303) 520-8023
            </a>
            <br />
            <a href="mailto:info@frontrangedetailstudio.com" style={link}>
              info@frontrangedetailstudio.com
            </a>
          </p>

          <p style={{ ...p, marginTop: 34 }}>
            <Link href="/contact" style={link}>
              Contact us
            </Link>{" "}
            &nbsp;·&nbsp;{" "}
            <Link href="/free-quote" style={link}>
              Request a free quote
            </Link>
          </p>
        </div>
      </section>
    </div>
  );
}
