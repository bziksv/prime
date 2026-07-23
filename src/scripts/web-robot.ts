/** Spline 3D robot — NEXBOT (CC0 Community), brand-adjacent teal tint */
import { Application } from "@splinetool/runtime";

/** https://community.spline.design/file/615b9422-9985-43f6-8593-d7d7bc3b0be1 — CC0 1.0 */
const SCENE = "/spline/nexbot.splinecode";

/**
 * Brand mark: P #e02040 · R #f09830 · M #b8d050 · E #20b8d0
 * Deep teal near brand-E / site accent — not a loud fill.
 */
const ROBOT_TINT = "#1a5c68";

const hideSplineBadge = (root: HTMLElement) => {
  const kill = () => {
    root.querySelectorAll("a").forEach((a) => {
      if (/spline/i.test(a.href) || /spline/i.test(a.textContent || "")) {
        a.style.display = "none";
      }
    });
  };
  kill();
  const obs = new MutationObserver(kill);
  obs.observe(root, { childList: true, subtree: true });
  window.setTimeout(() => obs.disconnect(), 8000);
};

const clearSceneBackdrop = (app: Application) => {
  try {
    app.setBackgroundColor("transparent");
  } catch {
    /* older runtime */
  }

  const names = ["Background", "Bg", "Plane", "Floor", "Ground", "Backdrop"];
  for (const name of names) {
    const obj = app.findObjectByName(name);
    if (obj) obj.visible = false;
  }
};

/** Scene ships with giant «NEXBOT» typography (logo + Shape 0–6) — keep only CSS «ПРАЙМ». */
const hideSceneWordmark = (app: Application) => {
  const kill = /^(logo|shape(\s+\d+)?)$/i;

  for (const obj of app.getAllObjects()) {
    const name = obj?.name?.trim();
    if (!name || !kill.test(name)) continue;
    try {
      obj.hide();
    } catch {
      obj.visible = false;
    }
  }
};

const tintRobot = (app: Application, color: string) => {
  const skip =
    /light|camera|background|bg|plane|floor|ground|backdrop|shadow|null|eye|visor|screen|glass|text|logo|^shape(\s+\d+)?$/i;

  for (const obj of app.getAllObjects()) {
    if (!obj?.name || skip.test(obj.name)) continue;
    try {
      obj.color = color;
    } catch {
      /* non-colorable */
    }
  }
};

const mount = async () => {
  const canvas = document.querySelector<HTMLCanvasElement>("[data-spline-robot]");
  const shell = document.querySelector<HTMLElement>("[data-robot-shell]");
  if (!canvas || !shell) return;

  try {
    const app = new Application(canvas);
    await app.load(SCENE);
    clearSceneBackdrop(app);
    hideSceneWordmark(app);
    tintRobot(app, ROBOT_TINT);
    hideSplineBadge(shell);
    shell.classList.add("is-ready");
  } catch (err) {
    console.error("[web-robot] Spline failed", err);
    shell.classList.add("is-fallback");
  }
};

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", () => {
    void mount();
  });
} else {
  void mount();
}
