export function renderGlobalPartners(container) {
  const section = document.createElement('section')
  section.id = 'global-partners'
  section.className = 'home-section d-flex justify-content-center flex-column align-items-center bg-light'
  section.innerHTML = `
    <div class="container-fluid p-0">
      <div class="d-flex w-100 align-items-start justify-content-between mb-3">
        <div>
          <h2>Global Partners</h2>
          <p class="mb-0">International partnerships and collaborations.</p>
        </div>
        <div class="gp-controls">
          <!-- optional controls -->
        </div>
      </div>

      <div class="gp-carousel">
        <div class="gp-track">
          <!-- slides inserted by JS -->
        </div>
      </div>
    </div>
  `

  container.appendChild(section)

  const track = section.querySelector('.gp-track')
  const partners = [
    'Partner A', 'Partner B', 'Partner C', 'Partner D',
    'Partner E', 'Partner F', 'Partner G', 'Partner H'
  ]

  const slides = []
  partners.forEach((name) => {
    const slide = document.createElement('div')
    slide.className = 'gp-slide card'
    slide.innerHTML = `
      <div class="card-body text-center">
        <h5 class="card-title">${name}</h5>
        <p class="card-text small text-muted">Official partner</p>
      </div>
    `
    track.appendChild(slide)
    slides.push(slide)
  })

  // State for continuous carousel
  let isDragging = false
  let startX = 0
  let offset = 0 // current translateX offset (px)
  let lastTimestamp = null
  let rafId = null
  let slideWidth = 0

  // Duplicate slides to allow seamless looping
  const originalCount = slides.length
  slides.forEach((s) => {
    const clone = s.cloneNode(true)
    track.appendChild(clone)
  })

  function computeMetrics() {
    if (!slides[0]) return
    const style = getComputedStyle(slides[0])
    const mr = parseFloat(style.marginRight || '0')
    slideWidth = slides[0].getBoundingClientRect().width + mr
  }

  // Continuous animation: move left by speed px/s
  const SPEED = 60 // pixels per second; tweak for faster/slower scroll

  function step(ts) {
    if (lastTimestamp == null) lastTimestamp = ts
    const dt = (ts - lastTimestamp) / 1000
    lastTimestamp = ts
    if (!isDragging) {
      offset -= SPEED * dt
      // when offset passes the width of original slides, wrap
      const totalWidth = slideWidth * originalCount
      if (-offset >= totalWidth) {
        offset += totalWidth
      }
      track.style.transform = `translateX(${offset}px)`
    }
    rafId = requestAnimationFrame(step)
  }

  function startContinuous() {
    stopContinuous()
    lastTimestamp = null
    rafId = requestAnimationFrame(step)
  }

  function stopContinuous() {
    if (rafId) { cancelAnimationFrame(rafId); rafId = null }
  }

  // Pointer / touch drag (live movement) - when user drags, pause continuous motion
  function pointerDown(x) { isDragging = true; startX = x; stopContinuous() }
  function pointerMove(x) { if (!isDragging) return; const dx = x - startX; startX = x; offset += dx; track.style.transform = `translateX(${offset}px)` }
  function pointerUp() { if (!isDragging) return; isDragging = false; startContinuous() }

  if (window.PointerEvent) {
    track.addEventListener('pointerdown', (e) => { track.setPointerCapture && track.setPointerCapture(e.pointerId); pointerDown(e.clientX) })
    track.addEventListener('pointermove', (e) => pointerMove(e.clientX))
    track.addEventListener('pointerup', (e) => { pointerUp(); track.releasePointerCapture && track.releasePointerCapture(e.pointerId) })
    track.addEventListener('pointercancel', () => { isDragging = false; pointerUp() })
  } else {
    track.addEventListener('touchstart', (e) => { pointerDown(e.touches[0].clientX) }, { passive: true })
    track.addEventListener('touchmove', (e) => { pointerMove(e.touches[0].clientX) }, { passive: true })
    track.addEventListener('touchend', (e) => { pointerUp() }, { passive: true })
    track.addEventListener('mousedown', (e) => { e.preventDefault(); pointerDown(e.clientX) })
    window.addEventListener('mousemove', (e) => pointerMove(e.clientX))
    window.addEventListener('mouseup', (e) => { pointerUp() })
  }

  window.addEventListener('resize', () => { computeMetrics() })

  // initial layout and start continuous scroll
  setTimeout(() => { computeMetrics(); startContinuous() }, 50)
}
