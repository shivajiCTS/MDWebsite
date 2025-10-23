export function renderHero(container) {
  let section = `
  <section id="hero" class="home-section d-flex justify-content-center flex-column align-items-center text-center">
    <div class="container-fluid p-0">
      <h1 class="display-5">Hero Title</h1>
      <p class="lead">A short hero subtitle to introduce the site.</p>
      <p><a class="btn btn-primary btn-lg" href="#about">Learn more</a></p>
    </div>
  </section>
  `
  container.innerHTML+=section
}
