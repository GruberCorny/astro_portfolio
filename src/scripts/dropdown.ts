const toggle = document.querySelector<HTMLButtonElement>(".dropdown-toggle");
const menu = document.querySelector<HTMLElement>(".dropdown-menu");

toggle?.addEventListener("click", () => {
    const isOpen = menu!.classList.toggle("open");
    toggle.setAttribute("aria-expanded", String(isOpen));
});

document.addEventListener("click", (e) => {
    if (!toggle?.contains(e.target as Node) && !menu?.contains(e.target as Node)) {
        menu?.classList.remove("open");
        toggle?.setAttribute("aria-expanded", "false");
    }
});
