/** Spline 3D robot — same scene as Matter demo */
import { Application } from "@splinetool/runtime";

const SCENE =
  "https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode";

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
  // Let the CSS wordmark show through around the robot mesh.
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

const mount = async () => {
  const canvas = document.querySelector<HTMLCanvasElement>("[data-spline-robot]");
  const shell = document.querySelector<HTMLElement>("[data-robot-shell]");
  if (!canvas || !shell) return;

  try {
    const app = new Application(canvas);
    await app.load(SCENE);
    clearSceneBackdrop(app);
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
