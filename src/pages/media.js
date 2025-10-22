export function renderMedia() {
  const root = document.getElementById('page-root')
  root.innerHTML = `
    <div class="container-fluid py-5 media-page">
      <h2 class="my-4">In the Media</h2>

      <!-- Row 1: feature + two stacked items -->
      <div class="row media-row-1 mb-4">
        <div class="col-md-7 col-12 feature-story">
          <div class="media-card p-3 d-flex gap-3 align-items-start">
            <img src="/public/img/media-feature.jpg" alt="feature" class="img-fluid media-thumb" />
            <div>
              <div class="paper-name small text-muted">The Daily Observer</div>
              <h4 class="media-headline">Startup X raises $20M to expand globally</h4>
              <div class="reporter small text-muted">By Jane Reporter</div>
            </div>
          </div>
        </div>

        <div class="col-md-5 col-12">
          <div class="row stacked-stories g-3">
            <div class="col-12 stacked-item">
              <div class="media-card p-3 d-flex gap-2 align-items-center">
                <img src="/public/img/media-1.jpg" alt="media 1" class="img-fluid media-thumb-sm" />
                <div class="flex-grow-1">
                  <div class="paper-name small text-muted">Tech Daily</div>
                  <div class="media-headline-sm">New AI tool helps designers ship faster</div>
                </div>
                <div><button class="btn btn-sm btn-outline-primary">Read</button></div>
              </div>
            </div>
            <div class="col-12 stacked-item">
              <div class="media-card p-3 d-flex gap-2 align-items-center">
                <img src="/public/img/media-2.jpg" alt="media 2" class="img-fluid media-thumb-sm" />
                <div class="flex-grow-1">
                  <div class="paper-name small text-muted">Business Weekly</div>
                  <div class="media-headline-sm">How companies are rethinking remote work</div>
                </div>
                <div><button class="btn btn-sm btn-outline-primary">Read</button></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Row 2: three columns teasers -->
      <div class="row media-row-2">
        <div class="col-md-4 col-12 mb-3">
          <div class="media-card p-3 text-center">
            <img src="/public/img/teaser-1.jpg" alt="teaser1" class="img-fluid teaser-thumb mb-2" />
            <h5>Interview with CEO</h5>
            <p class="small text-muted">A conversation about leadership and growth.</p>
            <button class="btn btn-sm btn-primary">Read more</button>
          </div>
        </div>
        <div class="col-md-4 col-12 mb-3">
          <div class="media-card p-3 text-center">
            <img src="/public/img/teaser-2.jpg" alt="teaser2" class="img-fluid teaser-thumb mb-2" />
            <h5>Product roadmap revealed</h5>
            <p class="small text-muted">What to expect from the next updates.</p>
            <button class="btn btn-sm btn-primary">Read more</button>
          </div>
        </div>
        <div class="col-md-4 col-12 mb-3">
          <div class="media-card p-3 text-center">
            <img src="/public/img/teaser-3.jpg" alt="teaser3" class="img-fluid teaser-thumb mb-2" />
            <h5>Design case study</h5>
            <p class="small text-muted">A behind-the-scenes look at our process.</p>
            <button class="btn btn-sm btn-primary">Read more</button>
          </div>
        </div>
      </div>
    </div>
  `
}
