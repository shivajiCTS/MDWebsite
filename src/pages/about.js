export function renderAbout() {
  const root = document.getElementById('page-root')
  root.innerHTML = `
    <div class="container-fluid py-5 about-page">
      <div class="row align-items-center mb-5 about-row-1">
        <div class="col-lg-6 col-12 about-text">
          <h2 class="mb-3">About</h2>
          <p class="lead">We build thoughtful products and share what we've learned along the way. Our work focuses on real people and measurable outcomes.</p>
        </div>
        <div class="col-lg-6 col-12 about-image text-center">
          <img src="/public/img/about-illustration.png" alt="About illustration" class="img-fluid rounded shadow-sm" />
        </div>
      </div>

      <div class="row about-row-2">
        <div class="col-12 quote-wrap text-center">
          <blockquote class="blockquote p-4">
            <p class="mb-0">“When people ask for my advice, I always<br/>share my mistakes along with my successes.<br/>I think it’s important for others to learn from<br/>the full story, not just the wins.”</p>
          </blockquote>
        </div>
      </div>
        <!-- New third section: Mission / Vision / Values -->
        <div class="row about-row-3 mt-5">
          <div class="col-12 text-center mb-4">
            <h3 class="section-heading">Our Purpose</h3>
            <p class="section-sub">What drives our work and the principles we follow.</p>
          </div>

          <!-- Each pillar now occupies its own full-width row -->
          <div class="col-12 mb-4">
            <div class="pillar p-3">
              <div class="pillar-year text-center mb-3">${new Date().getFullYear()}</div>
              <div class="row pillar-body align-items-center">
                <div class="col-md-5 col-12 pillar-left">
                  <h5>Mission</h5>
                  <p>Design and deliver products that solve meaningful problems and improve everyday lives.</p>
                </div>
                <div class="col-md-2  justify-center">
                  <div class="pillar-divider"></div>
                </div>
                <div class="col-md-5 col-12 pillar-image text-center">
                  <div class="img-placeholder rounded">Image</div>
                </div>
              </div>
            </div>
          </div>

          <div class="col-12 mb-4">
            <div class="pillar p-3">
              <div class="pillar-year text-center mb-3">${new Date().getFullYear()}</div>
              <div class="row pillar-body align-items-center">
                <div class="col-md-5 col-12 pillar-left">
                  <h5>Vision</h5>
                  <p>To be a trusted partner for teams seeking clarity, craft, and measurable impact.</p>
                </div>
                <div class="col-md-2  justify-items-center">
                  <div class="pillar-divider"></div>
                </div>
                <div class="col-md-5 col-12 pillar-image text-center">
                  <div class="img-placeholder rounded">Image</div>
                </div>
              </div>
            </div>
          </div>

          <div class="col-12 mb-4">
            <div class="pillar p-3">
              <div class="pillar-year text-center mb-3">${new Date().getFullYear()}</div>
              <div class="row pillar-body align-items-center">
                <div class="col-md-5 col-12 pillar-left">
                  <h5>Values</h5>
                  <p>Transparency, continuous learning, and empathy guide our decisions.</p>
                </div>
                <div class="col-md-2  justify-items-center">
                  <div class="pillar-divider"></div>
                </div>
                <div class="col-md-5 col-12 pillar-image text-center">
                  <div class="img-placeholder rounded">Image</div>
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
  `
}
