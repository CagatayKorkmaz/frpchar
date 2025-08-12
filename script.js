document.querySelectorAll(".main-content h2").forEach(h2 => {
  h2.addEventListener("click", function() {
    this.classList.toggle("kapat");

    // Aynı parent içindeki story-content'u bul
    const storyContent = this.nextElementSibling;
    if (storyContent && storyContent.classList.contains("story-content")) {
      storyContent.classList.toggle("gizli");
    }
  });
});
