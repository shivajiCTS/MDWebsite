export function renderLegacy(container) {
  const section = document.createElement('section')
  section.id = 'legacy'
  section.className = 'home-section d-flex justify-content-center flex-column align-items-center'
  section.innerHTML = `
    <div class="container-fluid p-0">
      <h2>Legacy</h2>
      <p>Highlight legacy work, history, or milestones.</p>
    </div>
  `
  container.appendChild(section)
}
