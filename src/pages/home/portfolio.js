export function renderPortfolio(container) {
  const section = document.createElement('div');
   section.innerHTML = `
  <section id="portfolio" class="home-section d-flex justify-content-center flex-column align-items-center">
    <div class="container-fluid p-0">
      <div class="d-flex w-100 align-items-start justify-content-between mb-3">
        <div>
          <h2>Portfolio</h2>
          <p class="mb-0">Showcase recent work or projects.</p>
        </div>
        <div class="portfolio-controls">
          <button class="btn btn-outline-primary me-2" data-bs-target="#portfolioCarousel" data-bs-slide="prev" aria-label="Previous">Prev</button>
          <button class="btn btn-primary" data-bs-target="#portfolioCarousel" data-bs-slide="next" aria-label="Next">Next</button>
        </div>
      </div>

      <div id="portfolioCarousel" class="carousel slide" data-bs-ride="false">
        <div class="carousel-inner">
          <div class="carousel-item active">
            <div class="portfolio-track d-flex">
              <div class="portfolio-slide card me-3">
                <div class="card-body">
                  <h5 class="card-title">Project Alpha</h5>
                  <p class="card-text">A short description of Project Alpha.</p>
                  <a href="#" class="btn btn-sm btn-outline-primary">Learn more</a>
                </div>
              </div>
              <div class="portfolio-slide card me-3">
                <div class="card-body">
                  <h5 class="card-title">Project Beta</h5>
                  <p class="card-text">A short description of Project Beta.</p>
                  <a href="#" class="btn btn-sm btn-outline-primary">Learn more</a>
                </div>
              </div>
              <div class="portfolio-slide card me-3">
                <div class="card-body">
                  <h5 class="card-title">Project Gamma</h5>
                  <p class="card-text">A short description of Project Gamma.</p>
                  <a href="#" class="btn btn-sm btn-outline-primary">Learn more</a>
                </div>
              </div>
              <div class="portfolio-slide card me-3">
                <div class="card-body">
                  <h5 class="card-title">Project Delta</h5>
                  <p class="card-text">A short description of Project Delta.</p>
                  <a href="#" class="btn btn-sm btn-outline-primary">Learn more</a>
                </div>
              </div>
              <div class="portfolio-slide card me-3">
                <div class="card-body">
                  <h5 class="card-title">Project Epsilon</h5>
                  <p class="card-text">A short description of Project Epsilon.</p>
                  <a href="#" class="btn btn-sm btn-outline-primary">Learn more</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </section>
  `

  container.appendChild(section)

  // No autoplay: allow manual slide with controls which will translate the track
  const carousel = section.querySelector('#portfolioCarousel')
  const track = section.querySelector('.portfolio-track')
  const slides = Array.from(section.querySelectorAll('.portfolio-slide'))
  const prevBtn = section.querySelector('[data-bs-slide="prev"]')
  const nextBtn = section.querySelector('[data-bs-slide="next"]')

  // state: index of the left-most visible slide
  let index = 0

  function getVisibleCount() {
    // On narrow viewports show 1, otherwise show 3 + partial
    return window.innerWidth < 768 ? 1 : 3
  }

  function getSlideWidth() {
    // width of a single slide (including margin-right)
    const slide = slides[0]
    const style = window.getComputedStyle(slide)
    const marginRight = parseFloat(style.marginRight || '0')
    return slide.offsetWidth + marginRight
  }

  function update() {
    const slideW = getSlideWidth()
    // translate so that the left-most visible slide is at the start
    track.style.transform = `translateX(${-index * slideW}px)`
  }

  function clampIndex(i) {
    // allow up to slides.length - visibleCount (so next shows partial)
    const max = Math.max(0, slides.length - getVisibleCount())
    return Math.max(0, Math.min(i, max))
  }

  prevBtn.addEventListener('click', () => {
    index = clampIndex(index - 1)
    update()
  })

  nextBtn.addEventListener('click', () => {
    index = clampIndex(index + 1)
    update()
  })

  window.addEventListener('resize', () => {
    // keep index in range when viewport changes
    index = clampIndex(index)
    update()
  })

  // initial layout
  setTimeout(update, 50)
}
