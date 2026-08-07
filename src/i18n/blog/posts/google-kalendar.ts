import type { BlogPost } from "../../../data/blog";

/** EN overlay for google-kalendar — same structure as RU JSON. */
export const googleKalendarEn: BlogPost = {
  slug: "google-kalendar",
  title: "Google Calendar for work: how to organize meetings and tasks",
  date: "2019-06-19",
  category: "Digital marketing",
  cover: "/images/blog/google-kalendar/cover-en.webp",
  excerpt:
    "How to use Google Calendar at work: multiple calendars by purpose, meetings with guests, video, attachments, working hours, and sharing — without outdated clicks and Hangouts.",
  lead: [
    "Google Calendar is a planner for meetings, reminders, and focus blocks in the Google ecosystem. It works for solo operators and teams: shared calendars, invites, Drive attachments, working hours.",
    "The settings below fit a typical work flow. Menu labels and button names change; follow the meaning of features, not a 2019 screenshot. Video meetings today usually go through Google Meet, not Hangouts.",
  ],
  faq: [
    {
      q: "Is one calendar enough?",
      a: "For a simple day — yes. When clients, internal calls, and personal mix, several colored calendars plus a visibility filter work better.",
    },
    {
      q: "Do I need Google Workspace?",
      a: "Basic planning works on a regular account. Some corporate options (appointment slots, access policies) are on work/school plans — check Google’s current list.",
    },
    {
      q: "What replaces Hangouts from old guides?",
      a: "Google Meet: add a meeting link to the calendar event.",
    },
    {
      q: "Is this the same as a content plan for a blog?",
      a: "No. Calendar is about time and meetings. An editorial publishing plan lives in a separate content-plan article.",
    },
    {
      q: "Can I open a calendar to the whole company?",
      a: "Yes, via sharing settings. Give edit rights only to people who must change events; others get free/busy view.",
    },
  ],
  sections: [
    {
      title: "Several calendars for different goals",
      level: 2,
      paras: [
        "One “everything in a row” stream quickly becomes noise: important items drown among reminders. Create separate calendars — e.g. Clients, Internal, Personal, Deadlines — and assign colors.",
        "In the sidebar, turn on only the layers you need for the day. It’s easier to prepare for calls and not miss hard deadlines.",
      ],
      lists: [
        {
          intro: "A typical set:",
          items: [
            "client meetings",
            "internal syncs",
            "deep work (focus blocks)",
            "recurring reminders",
            "personal events (optionally a hidden layer).",
          ],
        },
      ],
      links: [
        {
          label: "Content plan",
          href: "/en/blog/kontent-plan/",
        },
      ],
    },
    {
      title: "Scheduling meetings with participants",
      level: 2,
      paras: [
        "Create an event, set the time, and add guests with Google accounts. If you can see their busy times, Calendar highlights conflicts — easier to find a shared slot.",
        "Without access to someone else’s schedule you can still send an invite: people accept, decline, or propose another time. For external clients it’s often better to agree a slot in chat first, then lock the event.",
      ],
      lists: [
        {
          intro: "Before sending the invite:",
          items: [
            "a clear subject and meeting goal",
            "timezone and duration",
            "video link or address",
            "agenda in the description",
            "needed attachments already on the event.",
          ],
        },
      ],
    },
    {
      title: "Video and materials on the event",
      level: 2,
      paras: [
        "Add a video meeting (Meet) to the event. Remote guests get the link with the invite — no separate “here’s Zoom” email.",
        "Attach files from your computer or Google Drive: deck, brief, estimate. Guests see materials on the meeting card and prepare ahead.",
      ],
      notes: [
        {
          title: "Important",
          text: "Don’t put personal-data documents in a shared calendar “just in case”. Drive access and event access are separate permission layers.",
          kind: "tip",
        },
      ],
    },
    {
      title: "Working hours and booking slots",
      level: 2,
      paras: [
        "Working hours show colleagues when you’re usually free for meetings. An invite outside the window may show a warning — fewer “midnight calls”.",
        "For consults and teaching slots, work accounts often have appointment intervals: you publish windows, people book. Names and availability depend on account type — see Google Help.",
      ],
      lists: [
        {
          intro: "Agency / freelance practice:",
          items: [
            "set working hours",
            "leave a buffer between meetings",
            "deep-work blocks without invites",
            "a separate calendar for sales / interviews.",
          ],
        },
      ],
    },
    {
      title: "Sharing and shortcuts",
      level: 2,
      paras: [
        "In calendar settings, choose who sees details, who only sees free/busy, and who can edit. For a team, a shared project calendar with editors works well; keep personal view limited.",
        "Keyboard shortcuts speed up creating events and moving through the week. The list is in Calendar Help — no need to memorize “as in 2019”.",
      ],
      lists: [
        {
          intro: "Sharing minimum:",
          items: [
            "don’t make a personal calendar public without need",
            "editors — selectively",
            "for externals — a separate calendar or one-off invites",
            "periodically revoke access for people who left.",
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
      title: "Takeaways",
      level: 2,
      paras: [
        "Calendar saves time when layers are split, meetings have an agenda and materials, and sharing isn’t blurry. It’s a discipline tool — not a substitute for priorities.",
        "Linking with tasks (Tasks, the team tracker) and closing follow-ups after a call matters more than a perfect color scheme.",
      ],
    },
  ],
  closing: [
    "Split calendars by goals, set working hours and sharing, add Meet and files on the event itself — that’s when Google Calendar starts saving coordination instead of growing chaos in one endless stream.",
  ],
  related: [
    "kontent-plan",
    "udalennaya-rabota",
    "kpi-menedzhera-prodazh",
    "dashboard",
    "marketingovaya-strategiya",
    "otchet-klientu",
  ],
};
