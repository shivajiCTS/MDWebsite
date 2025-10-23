export function renderPartners(container) {
  const section = `
  <section id="partners" class="home-section d-flex justify-content-center flex-column align-items-center bg-light">
    <div class="container-fluid p-0">
      <h2>Partners</h2>
      <p>List partner logos or descriptions here.</p>
    </div>
  </section>
  `
  container.innerHTML+=section
}
