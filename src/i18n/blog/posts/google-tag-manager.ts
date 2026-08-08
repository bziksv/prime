import type { BlogPost } from "../../../data/blog";

/** EN overlay for google-tag-manager — same structure as RU JSON. */
export const googleTagManagerEn: BlogPost = {
  slug: "google-tag-manager",
  title: "Google Tag Manager: how it works and where to start",
  date: "2020-10-01",
  category: "Digital marketing",
  cover: "/images/blog/google-tag-manager/cover-en.webp",
  excerpt:
    "What GTM is: container, tags, triggers, and variables — install the code once, then publish counters and events without editing the theme for every pixel.",
  lead: [
    "Google Tag Manager (GTM) is a container for marketing and analytics tags. One code snippet goes on the site; counters, pixels, and events are added and updated in the account — not in every layout release.",
    "Below: account and container, the tag → trigger → variable chain, working with GA4 and Metrica, and Preview before publish. The UI changes; this is not a Universal Analytics 2020 screenshot walkthrough.",
  ],
  faq: [
    {
      q: "Is GTM required?",
      a: "No. You can put gtag/Metrica in the template. GTM helps when there are many tags and you need flexibility without constant code edits.",
    },
    {
      q: "How does a tag differ from a trigger?",
      a: "A tag is what runs (GA4, Metrica, a pixel). A trigger is when (page view, click, submit). Variables supply data (URL, ID, button text).",
    },
    {
      q: "Where do I paste the container code?",
      a: "Per Google’s instructions: part in `<head>`, part right after `<body>` opens (or the current snippet from the account). On every site template — and never a “native + GTM” duplicate of the same counter.",
    },
    {
      q: "Can I install Metrica via GTM?",
      a: "Yes: a tag with the counter ID and the goals/events you need. Don’t leave a draft unpublished and don’t also hard-code Metrica in the theme.",
    },
    {
      q: "Why use Preview?",
      a: "To see which tags fired on the page before publishing to everyone. Without Preview it’s easy to publish empty or double tracking.",
    },
    {
      q: "Does GTM replace GA4?",
      a: "No. GTM delivers tags; GA4/Metrica count data. Common pattern: GTM → GA4 config/event tags.",
    },
    {
      q: "What about cookie consent?",
      a: "If you need blocking until consent — set Consent Mode / firing conditions by your site policy. Don’t ignore personal-data requirements.",
    },
  ],
  sections: [
    {
      title: "Account, container, and site code",
      level: 2,
      paras: [
        "In Tag Manager you create an account (often per company) and a Web container for the site. Name the container clearly: domain or project.",
        "The account shows the install snippet. Put it on every needed template (home, product, cart, landings). One container is one door for tags; a second parallel hard-code of the same counter in the theme doubles hits.",
      ],
      lists: [
        {
          intro: "Before go-live:",
          items: [
            "code on production, not only localhost",
            "cache/minification don’t break the script",
            "team access rights are locked",
            "no duplicate of the same counter outside GTM",
          ],
        },
      ],
    },
    {
      title: "Tags, triggers, variables",
      level: 2,
      paras: [
        "Working model: an event on the site → a trigger catches it → a tag sends data to analytics or ads. Variables read URL, click, dataLayer and feed the tag.",
        "Start small: GA4 config / Metrica counter on All Pages, then phone clicks, form submit, purchase. Don’t spawn dozens of tags without a naming convention.",
      ],
      lists: [
        {
          intro: "Basic vocabulary:",
          items: [
            "tag — action (send event, load pixel)",
            "trigger — firing condition",
            "variable — value from the page or dataLayer",
            "publish — container version live on the site",
            "Preview / Tag Assistant — check before release",
          ],
        },
      ],
      links: [
        {
          label: "Inserting JavaScript on a site",
          href: "/en/blog/vstavka-javascript/",
        },
      ],
    },
    {
      title: "GA4 and goals via GTM",
      level: 2,
      paras: [
        "For Google Analytics 4 you usually add a config tag (Measurement ID) and tags/events for key actions. In the GA4 admin, mark needed events as key events.",
        "Don’t lean on old Universal Analytics guides: the event model and UI differ. Check DebugView and realtime reports after publish.",
      ],
      links: [
        {
          label: "Goals in Google Analytics",
          href: "/en/blog/google-analytics-tseli/",
        },
      ],
    },
    {
      title: "Metrica and pixels in one container",
      level: 2,
      paras: [
        "Yandex Metrica and ad pixels also fit well in GTM: one publish and version rollback. Watch that a form event doesn’t fire twice — from the theme and from the container.",
        "After edits always Preview → check on a live page → Publish. A draft on production means “the counter is silent” even if the code “seems installed.”",
      ],
      lists: [
        {
          intro: "Common mistakes:",
          items: [
            "forgot to publish the container",
            "double Metrica/GA install",
            "trigger only on a thank-you page that doesn’t exist",
            "tag on all pages instead of the right event",
            "no owner for versions and access",
          ],
        },
      ],
      links: [
        {
          label: "Metrica isn’t working",
          href: "/en/blog/metrika-ne-rabotaet/",
        },
      ],
    },
  ],
  closing: [
    "GTM is a panel for tags: one code on the site, then tags and triggers in the account. Publish only after Preview — and without duplicate counters in the theme.",
  ],
};
