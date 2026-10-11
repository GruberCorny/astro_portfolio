const mobileToggle = document.getElementById("mobile-menu-toggle") as HTMLButtonElement | null;
const mobileNav = document.getElementById("mobile-nav") as HTMLElement | null;
const mobileSubToggle = document.querySelector<HTMLButtonElement>(".mobile-submenu-toggle");
const mobileSub = document.querySelector<HTMLElement>(".mobile-submenu");

mobileToggle?.addEventListener("click", () => {
    const isOpen = mobileNav!.classList.toggle("open");
    mobileToggle.setAttribute("aria-expanded", String(isOpen));
    mobileToggle.classList.toggle("is-open", isOpen);
    document.body.classList.toggle("nav-open", isOpen);
});

mobileSubToggle?.addEventListener("click", () => {
    const isOpen = mobileSub!.classList.toggle("open");
    mobileSubToggle.setAttribute("aria-expanded", String(isOpen));
});

mobileNav?.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
        mobileNav.classList.remove("open");
        mobileToggle?.setAttribute("aria-expanded", "false");
        mobileToggle?.classList.remove("is-open");
        document.body.classList.remove("nav-open");
    });
});
