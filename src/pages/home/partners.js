export function renderPartners(container) {
  const section = document.createElement('section')
  section.id = 'partners'
  section.className = 'home-section d-flex justify-content-center flex-column align-items-center bg-light'
  section.innerHTML = `
    <div class="container-fluid p-0">
      <h2>Partners</h2>
      <p>List partner logos or descriptions here.</p>
    </div>
  `
  container.appendChild(section)
}
