export function renderInTheNews(container) {
  const section = document.createElement('section')
  section.id = 'in-the-news'
  section.className = 'home-section d-flex justify-content-center flex-column align-items-center'
  section.innerHTML = `
    <div class="container-fluid p-0">
      <h2>In the News</h2>
      <p>Recent press mentions and articles.</p>
    </div>
  `
  container.appendChild(section)
}
