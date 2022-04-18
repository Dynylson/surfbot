export default function initScrollSuave() {
  const linksInternos = document.querySelectorAll(
    "[data-header='menu'] a[href^='#']"
  );

  const smoothScroll = (event) => {
    event.preventDefault();

    const href = event.currentTarget.getAttribute("href");
    const section = document.querySelector(href);

    section.scrollIntoView({
      block: "start",
      behavior: "smooth",
    });
  };

  linksInternos.forEach((link) => {
    link.addEventListener("click", smoothScroll);
  });
}
