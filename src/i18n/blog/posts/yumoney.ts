import type { BlogPost } from "../../../data/blog";

/** EN overlay for yumoney — same structure as RU JSON. */
export const yumoneyEn: BlogPost = {
  slug: "yumoney",
  title: "YooMoney (Yandex.Wallet): what it is and how to use it",
  date: "2021-04-30",
  category: "Digital marketing",
  cover: "/images/blog/yumoney/cover-en.webp",
  excerpt:
    "YooMoney (formerly Yandex.Money / Yandex.Wallet): an e-wallet for payments and transfers, ID levels, funding and withdrawals — without outdated screenshots or mixing it up with YooKassa.",
  lead: [
    "YooMoney is an e-wallet for online payments and transfers (historically Yandex.Money or Yandex.Wallet). It’s a user’s account — not a payment aggregator for an online store.",
    "Below: what the wallet is for, how it differs from YooKassa, ID levels, and the logic of funding and withdrawals. Fees, limits, and menus change — check the YooMoney dashboard and Help.",
  ],
  faq: [
    {
      q: "Are YooMoney and Yandex.Wallet the same?",
      a: "Essentially yes: the product was renamed. Older texts and client habits still say Yandex.Money or wallet.",
    },
    {
      q: "How is YooMoney different from YooKassa?",
      a: "YooKassa takes payments on a business site. YooMoney is a personal or client wallet for paying and sending money. A shop usually needs Checkout (Kassa), not the owner’s personal wallet.",
    },
    {
      q: "Why identify yourself?",
      a: "Balance, transfer, and withdrawal limits depend on the ID level. Without ID, features are thinner. Status details live in current YooMoney Help.",
    },
    {
      q: "Do I need a Yandex account?",
      a: "Sign-in is usually tied to a Yandex account or linked profile. Don’t use someone else’s login for money.",
    },
    {
      q: "Can I pay in stores with YooMoney?",
      a: "Yes, where they accept YooMoney or linked methods. Points and limits — in the app and with the merchant.",
    },
    {
      q: "How do I withdraw to a card?",
      a: "After the required ID level — transfer to a bank card or other methods in the dashboard. Fee and timing depend on the method.",
    },
    {
      q: "Is it safe to keep large sums?",
      a: "An e-wallet isn’t a bank deposit. Keep working balances, turn on login protection, don’t store the password in messengers.",
    },
    {
      q: "Is it enough to take payments on a website?",
      a: "For a full online store you usually connect a payment aggregator (e.g. YooKassa) under a sole trader or company contract. A personal wallet is a different scenario with different limits.",
    },
  ],
  sections: [
    {
      title: "What it is",
      level: 2,
      paras: [
        "The wallet holds electronic money and lets you pay for services, send to people and businesses, and sometimes cash out to a card — within service rules and the law.",
        "Historically the brand was Yandex.Money; communication now usually says YooMoney. For the user it’s the same idea: a digital account with app and web.",
        "Don’t confuse it with acquiring: take payments as a legal entity from a site and pay from your own wallet are different products.",
      ],
      links: [
        {
          label: "YooKassa for a store",
          href: "/en/blog/yukassa/",
        },
        {
          label: "Online payments on a site",
          href: "/en/blog/onlayn-oplata/",
        },
      ],
    },
    {
      title: "Sign-up and login",
      level: 2,
      paras: [
        "Opening goes through a Yandex account or the form on the YooMoney site or app: phone for confirmations, password, terms acceptance.",
        "After creating it, find the account or wallet number in the dashboard — some funding channels need it. Exact UI paths change.",
        "Turn on available protections right away: SMS or app confirmation, device control, a strong Yandex account password.",
      ],
      notes: [
        {
          title: "Don’t memorize old screenshots",
          kind: "tip",
          text: "2021 guides with a checkbox by the balance are often outdated. Find the account number and funding options in the current menu or YooMoney Help.",
        },
      ],
    },
    {
      title: "Funding, transfer, withdrawal",
      level: 2,
      paras: [
        "Funding: bank card, bank transfer, sometimes terminals and other wallets — list and fees in the Add money section.",
        "Transfer: pick the recipient (phone, account, card — what’s available), amount, confirm. Check the fee before sending.",
        "Card withdrawal and cash-out usually need a higher ID status. Anonymous or minimal levels cut limits hard.",
      ],
      lists: [
        {
          intro: "Before a large transfer:",
          items: [
            "recipient details verified",
            "fee is clear",
            "ID status is enough",
            "no “today or never” pressure from a stranger",
          ],
        },
      ],
    },
    {
      title: "Identification and limits",
      level: 2,
      paras: [
        "The service splits identity-check levels (confirm status names in Help). Higher level — wider operations and limits.",
        "For business and freelance, plan ahead: withdrawing fees may need passport data and verification time.",
        "Don’t copy 2021 article limit numbers — use current figures in the dashboard.",
      ],
    },
    {
      title: "Security",
      level: 2,
      paras: [
        "Don’t enter password and codes on wallet recovery sites from email. Official login — only via a trusted domain or app.",
        "Don’t dictate SMS codes to support in a messenger. Bank and wallet staff never ask for the full password.",
        "On a shared computer, sign out; on a phone — screen lock and a separate profile if others use the device.",
      ],
    },
    {
      title: "When a wallet vs Checkout",
      level: 2,
      paras: [
        "For a client paying an order — YooMoney fits if the seller accepts it.",
        "For a store taking hundreds of payments with receipts — look at an aggregator like YooKassa and receipt rules (e.g. 54-FZ in Russia), not the founder’s personal wallet.",
        "Mixing “send money to a sole trader’s wallet” with no contract creates accounting and legal risk — that’s not just a handy button.",
      ],
    },
    {
      title: "What to remember",
      level: 2,
      paras: [
        "YooMoney is a user wallet; YooKassa is business payment acceptance.",
        "ID unlocks withdrawals and limits; terms live only in current Help.",
        "Login security beats life hacks for funding via outdated terminal networks.",
      ],
    },
  ],
  closing: [
    "If you need a personal wallet — register in YooMoney, turn on protection, and complete the ID level for your limits; if you need payments on a site — look at YooKassa and online checkout, and don’t mix the products.",
  ],
  related: [
    "yukassa",
    "onlayn-oplata",
    "yandeks-toloka",
    "pochtovyy-servis",
    "formy-zahvata",
    "roi-marketinga",
  ],
};
