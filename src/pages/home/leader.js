export function renderLeader(container) {
  const section = document.createElement('div');
  section.innerHTML = `
  <section id="leader" class="home-section d-flex justify-content-center flex-column align-items-center bg-light py-5">
    <div class="container">
      <div id="leaderCarousel" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-inner">
          <div class="carousel-item active">
            <div class="row align-items-center">
              <div class="col-md-6">
                <h3>Leader Slide 1</h3>
                <p>Some introductory text for slide one. Highlight the main message here.</p>
                <div class="carousel-dots mt-3">
                  <button type="button" data-bs-target="#leaderCarousel" data-bs-slide-to="0" class="btn btn-sm btn-secondary me-1 active" aria-label="Slide 1"></button>
                  <button type="button" data-bs-target="#leaderCarousel" data-bs-slide-to="1" class="btn btn-sm btn-secondary me-1" aria-label="Slide 2"></button>
                  <button type="button" data-bs-target="#leaderCarousel" data-bs-slide-to="2" class="btn btn-sm btn-secondary me-1" aria-label="Slide 3"></button>
                  <button type="button" data-bs-target="#leaderCarousel" data-bs-slide-to="3" class="btn btn-sm btn-secondary" aria-label="Slide 4"></button>
                </div>
              </div>
              <div class="col-md-6 text-center">
                <img src="https://via.placeholder.com/600x360?text=Slide+1" class="img-fluid" alt="Slide 1 image">
              </div>
            </div>
          </div>

          <div class="carousel-item">
            <div class="row align-items-center">
              <div class="col-md-6">
                <h3>Leader Slide 2</h3>
                <p>Second slide content. Use this space for additional detail.</p>
                <div class="carousel-dots mt-3">
                  <button type="button" data-bs-target="#leaderCarousel" data-bs-slide-to="0" class="btn btn-sm btn-secondary me-1" aria-label="Slide 1"></button>
                  <button type="button" data-bs-target="#leaderCarousel" data-bs-slide-to="1" class="btn btn-sm btn-secondary me-1 active" aria-label="Slide 2"></button>
                  <button type="button" data-bs-target="#leaderCarousel" data-bs-slide-to="2" class="btn btn-sm btn-secondary me-1" aria-label="Slide 3"></button>
                  <button type="button" data-bs-target="#leaderCarousel" data-bs-slide-to="3" class="btn btn-sm btn-secondary" aria-label="Slide 4"></button>
                </div>
              </div>
              <div class="col-md-6 text-center">
                <img src="https://via.placeholder.com/600x360?text=Slide+2" class="img-fluid" alt="Slide 2 image">
              </div>
            </div>
          </div>

          <div class="carousel-item">
            <div class="row align-items-center">
              <div class="col-md-6">
                <h3>Leader Slide 3</h3>
                <p>Third slide content — highlight successes or quotes.</p>
                <div class="carousel-dots mt-3">
                  <button type="button" data-bs-target="#leaderCarousel" data-bs-slide-to="0" class="btn btn-sm btn-secondary me-1" aria-label="Slide 1"></button>
                  <button type="button" data-bs-target="#leaderCarousel" data-bs-slide-to="1" class="btn btn-sm btn-secondary me-1" aria-label="Slide 2"></button>
                  <button type="button" data-bs-target="#leaderCarousel" data-bs-slide-to="2" class="btn btn-sm btn-secondary me-1 active" aria-label="Slide 3"></button>
                  <button type="button" data-bs-target="#leaderCarousel" data-bs-slide-to="3" class="btn btn-sm btn-secondary" aria-label="Slide 4"></button>
                </div>
              </div>
              <div class="col-md-6 text-center">
                <img src="https://via.placeholder.com/600x360?text=Slide+3" class="img-fluid" alt="Slide 3 image">
              </div>
            </div>
          </div>

          <div class="carousel-item">
            <div class="row align-items-center">
              <div class="col-md-6">
                <h3>Leader Slide 4</h3>
                <p>Fourth slide content — call to action or closing message.</p>
                <div class="carousel-dots mt-3">
                  <button type="button" data-bs-target="#leaderCarousel" data-bs-slide-to="0" class="btn btn-sm btn-secondary me-1" aria-label="Slide 1"></button>
                  <button type="button" data-bs-target="#leaderCarousel" data-bs-slide-to="1" class="btn btn-sm btn-secondary me-1" aria-label="Slide 2"></button>
                  <button type="button" data-bs-target="#leaderCarousel" data-bs-slide-to="2" class="btn btn-sm btn-secondary me-1" aria-label="Slide 3"></button>
                  <button type="button" data-bs-target="#leaderCarousel" data-bs-slide-to="3" class="btn btn-sm btn-secondary active" aria-label="Slide 4"></button>
                </div>
              </div>
              <div class="col-md-6 text-center">
                <img src="https://via.placeholder.com/600x360?text=Slide+4" class="img-fluid" alt="Slide 4 image">
              </div>
            </div>
          </div>
        </div>

        <button class="carousel-control-prev" type="button" data-bs-target="#leaderCarousel" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#leaderCarousel" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </div>
    </section>
  `

  container.appendChild(section)

  // Sync dot active classes on slide change (custom dots inside left column)
  
  const carouselEl = section.querySelector('#leaderCarousel')
  if (carouselEl) {
    const items = carouselEl.querySelectorAll('.carousel-item')
    const dotButtons = section.querySelectorAll('.carousel-dots button')
    function updateDots() {
      const activeIndex = Array.from(items).findIndex(i => i.classList.contains('active'))
      dotButtons.forEach((b, i) => b.classList.toggle('active', i === activeIndex))
    }
    // Update when slide completes
    carouselEl.addEventListener('slid.bs.carousel', updateDots)
    // Initial sync
    updateDots()
  }
}
