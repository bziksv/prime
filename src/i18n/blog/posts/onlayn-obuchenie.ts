import type { BlogPost } from "../../../data/blog";

/** EN overlay for onlayn-obuchenie — same structure as RU JSON. */
export const onlaynObuchenieEn: BlogPost = {
  slug: "onlayn-obuchenie",
  title: "How to organize online training for employees",
  date: "2019-10-10",
  category: "Internet marketing",
  cover: "/images/blog/onlayn-obuchenie/cover-en.webp",
  excerpt:
    "How to move corporate training online: adapting materials, preparing the speaker, engagement, feedback, and a hybrid with in-person sessions — without a series of boring webinars.",
  lead: [
    "Online training saves logistics and removes geography: one strong speaker can lead a large group, and a recording catches those who missed the live session. But “just put a deck into a call” almost always fails on engagement.",
    "Below — practical rules: how to adapt content, prepare the host, pull participants into practice, collect feedback, and not throw away the in-person format entirely. Specific platform vendors are secondary — process and rhythm matter more.",
  ],
  faq: [
    {
      q: "Is online always cheaper than in-person?",
      a: "Often yes on logistics and group scale. But you need hours to adapt materials, coordinate, and handle tech — put that in the plan.",
    },
    {
      q: "Which platform is best?",
      a: "The one the company already has and where recordings, chat, and access are easy. Switching tools rarely saves a weak script.",
    },
    {
      q: "How long should a good webinar block last?",
      a: "Change activity every few minutes: slide → question → poll → short clip. A 40-minute monologue kills attention.",
    },
    {
      q: "Are homework assignments needed?",
      a: "Yes if the goal is a skill, not “they listened”. Mini-research, KPI calc, project defense keep engagement.",
    },
    {
      q: "Can you skip in-person meetings entirely?",
      a: "For team energy and bonding, hybrid is usually stronger. Fully remote makes culture and informal ties harder.",
    },
    {
      q: "How do you measure effect?",
      a: "Not only “watched the live”: module completion, scores, on-the-job application, quality of project defenses.",
    },
  ],
  sections: [
    {
      title: "Why move training online",
      level: 2,
      paras: [
        "A remote format reduces dependence on the speaker’s and participants’ city, speeds group scaling, and simplifies repeat access via recording. A small team can move a pilot online in tens of work hours — if there’s a script, not only a call link.",
        "Typical formats: a short learning club under current business tasks, and a longer “marathon” with webinars, tests, practice, and project defense. The platform (Teams, Zoom, and peers) is a shell; content and rhythm create the value.",
      ],
      lists: [
        {
          intro: "Pluses with solid organization:",
          items: [
            "one speaker — a large group;",
            "recording for those not live;",
            "fewer business trips;",
            "one hub for materials.",
          ],
        },
      ],
      links: [
        {
          label: "Remote work",
          href: "/en/blog/udalennaya-rabota/",
        },
      ],
    },
    {
      title: "Adapt materials for the screen",
      level: 2,
      paras: [
        "Online leans on the visual channel. Slides and clips should feel alive — no bureaucratese and stock “handshakes”. Change format every 3–5 minutes: new block, question, mini-poll, short clip — or attention drifts even with a strong speaker.",
        "In-person handouts don’t transfer “as is” into a webinar. Shorten, strengthen headlines, cut walls of text.",
      ],
      notes: [
        {
          title: "Practice",
          text: "If a block runs longer than 15–20 minutes without an activity change — part of the group is almost certainly in email. Put switch points into the script in advance.",
          kind: "tip",
        },
      ],
    },
    {
      title: "Prepare the speaker for going live",
      level: 2,
      paras: [
        "An online monologue needs more dynamics than an in-person lecture: voice, frame changes, hooking headlines, video inserts. Address participants by name from the attendance list, ask for a short chat reply — that brings attention back.",
        "You can hire an external speaker, but an internal expert with prep is often more useful: they know the company context. Rehearsal and timing are mandatory.",
      ],
    },
    {
      title: "Pull people into creation and practice",
      level: 2,
      paras: [
        "Passive listeners drop off fast. Give assignments: mini-research of a region/process, KPI calc, project defense, even informal activities with nominations — people value what they made themselves.",
        "Let participants suggest topics for next sessions. That raises the sense of “our training”, not a broadcast from above.",
      ],
      lists: [
        {
          intro: "What drives engagement:",
          items: [
            "practical cases between live sessions;",
            "polls and chat questions;",
            "project defense;",
            "peer content from employees.",
          ],
        },
      ],
    },
    {
      title: "Feedback and a hybrid with in-person",
      level: 2,
      paras: [
        "Without feedback the program goes blind. Collect module scores, keep a chat/community for questions, appoint a coordinator who actually replies — not a “bot for show”. Company internal channels beat random external tools with data-access risks.",
        "Don’t cancel in-person entirely: short offline sessions give energy and ties a screen struggles to replace. Hybrid usually saves travel days but keeps contact. Social media as a “showcase” for participants is optional under company rules; for learning, work chats and an LMS matter more.",
      ],
      links: [
        {
          label: "Touchpoints",
          href: "/en/blog/tochki-kontakta/",
        },
      ],
    },
  ],
  closing: [
    "Employee online training works when there’s content rhythm, a prepared speaker, practice, and feedback — not when you bought “yet another webinar tool”. Combine live with in-person touchpoints and measure knowledge use, not only attendance.",
  ],
  related: [
    "udalennaya-rabota",
    "project-manager",
    "tochki-kontakta",
    "interaktivnyy-kontent",
    "sem-kasaniy",
    "aydentika-brenda",
  ],
};
