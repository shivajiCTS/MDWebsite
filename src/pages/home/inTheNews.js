export function renderInTheNews(container) {
  const section = `
  <section id="in-the-news" class="home-section d-flex justify-content-center flex-column align-items-center">
    <div class="container-fluid p-0">
      <h2>In the News</h2>
      <p>Recent press mentions and articles.</p>
    </div>
  </section>
  `
  container.innerHTML+=section
}
