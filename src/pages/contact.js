export function renderContact() {
  const root = document.getElementById('page-root')
  root.innerHTML = `
    <div class="container-fluid  py-5">
      <h2 class="my-4">Contact</h2>
      <form class="row g-3" id="contactForm">
        <div class="col-md-6">
          <label class="form-label">Name</label>
          <input type="text" class="form-control" required>
        </div>
        <div class="col-md-6">
          <label class="form-label">Email</label>
          <input type="email" class="form-control" required>
        </div>
        <div class="col-12">
          <label class="form-label">Message</label>
          <textarea class="form-control" rows="4" required></textarea>
        </div>
        <div class="col-12">
          <button type="submit" class="btn btn-primary">Send</button>
        </div>
      </form>
    </div>
  `
  const form = document.getElementById('contactForm')
  form.addEventListener('submit', (e) => {
    e.preventDefault()
    alert('Thanks! Message sent (demo).')
    form.reset()
  })
}
