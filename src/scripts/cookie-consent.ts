import { cookieConsentKey } from "../data/legal";

export function initCookieConsent() {
  const bar = document.getElementById("v6-cookie-bar");
  const accept = document.getElementById("v6-cookie-accept");
  if (!bar || !accept) return;

  try {
    if (localStorage.getItem(cookieConsentKey) === "1") return;
  } catch {
    /* private mode */
  }

  bar.hidden = false;

  accept.addEventListener("click", () => {
    try {
      localStorage.setItem(cookieConsentKey, "1");
    } catch {
      /* ignore */
    }
    bar.hidden = true;
  });
}
