export function renderHero(container) {
  const section = document.createElement('section')
  section.id = 'hero'
  section.className = 'home-section d-flex justify-content-center flex-column align-items-center text-center'
  section.innerHTML = `
    <div class="container-fluid p-0">
      <h1 class="display-5">Hero Title</h1>
      <p class="lead">A short hero subtitle to introduce the site.</p>
      <p><a class="btn btn-primary btn-lg" href="#about">Learn more</a></p>
    </div>
  `
  container.appendChild(section)
}
