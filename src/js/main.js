document.getElementById("year").textContent = new Date().getFullYear();

document.querySelectorAll("[data-youtube-id]").forEach((button) => {
  button.addEventListener("click", () => {
    const id = button.getAttribute("data-youtube-id");
    if (!id || button.classList.contains("is-playing")) return;

    const iframe = document.createElement("iframe");
    iframe.src = `https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0`;
    iframe.title = button.getAttribute("aria-label") || "YouTube video";
    iframe.allow =
      "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share";
    iframe.allowFullscreen = true;
    iframe.loading = "lazy";

    button.classList.add("is-playing");
    button.appendChild(iframe);
  });
});
