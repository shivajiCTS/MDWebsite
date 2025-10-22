export function initFooter() {
  const root = document.getElementById('footer-root')
  if (!root) return

  root.innerHTML = `
    <footer class="bg-dark text-light py-4">
      <div class="container-fluid">
        <div class="row align-items-center">
          <div class="col-md-6 d-flex flex-column align-items-left gap-3">
            <div class="footer-logo">
              <img src="/vite.svg" alt="Logo" width="48" />
            </div>
            <div class="footer-email">
              <a href="mailto:info@example.com" class="text-light">info@example.com</a>
            </div>
            <div class="footer-copyright small text-light">
              &copy; ${new Date().getFullYear()} MDWebsite. All rights reserved.
            </div>
          </div>
          <div class="col-md-6 text-md-end mt-3 mt-md-0">
            <div>Follow us on</div>
            <div class="social-icons mt-2">
              <a href="#" class="text-light me-3" aria-label="YouTube">${youtubeSVG()}</a>
              <a href="#" class="text-light me-3" aria-label="LinkedIn">${linkedinSVG()}</a>
              <a href="#" class="text-light me-3" aria-label="Instagram">${instagramSVG()}</a>
              <a href="#" class="text-light" aria-label="X">${xSVG()}</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  `
}

function youtubeSVG() {
  return `<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M23 7.001a3 3 0 0 0-2.116-2.122C18.72 4.5 12 4.5 12 4.5s-6.72 0-8.884.379A3 3 0 0 0 .999 7.001 31.9 31.9 0 0 0 0 12a31.9 31.9 0 0 0 .999 4.999 3 3 0 0 0 2.117 2.122C5.28 19.5 12 19.5 12 19.5s6.72 0 8.884-.379A3 3 0 0 0 23 16.999 31.9 31.9 0 0 0 24 12a31.9 31.9 0 0 0-1-4.999zM10 15.5v-7l6 3.5-6 3.5z"/></svg>`
}

function linkedinSVG() {
  return `<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M4.98 3.5C4.98 4.88 3.87 6 2.49 6 1.11 6 0 4.88 0 3.5 0 2.12 1.11 1 2.49 1c1.38 0 2.49 1.12 2.49 2.5zM0 24h4.98V7H0v17zM8.17 7v17H13V15.6c0-4.3 5.5-4.64 5.5 0V24H24V14.1C24 7.9 19.6 6 16.4 6c-3.2 0-4.23 1.86-4.96 3.16V7H8.17z"/></svg>`
}

function instagramSVG() {
  return `<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zm5 6.5A4.5 4.5 0 1 0 16.5 13 4.5 4.5 0 0 0 12 8.5zm5.2-3.2a1.2 1.2 0 1 0 1.2 1.2 1.2 1.2 0 0 0-1.2-1.2z"/></svg>`
}

function xSVG() {
  return `<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M23.25 4.48a1 1 0 0 0-1.07-.32l-18 6.75a1 1 0 0 0-.03 1.86L6 14.3l-4.02 1.51a1 1 0 0 0 .55 1.92L10 17.83l6.66 2.5a1 1 0 0 0 1.14-.48l5.45-9.81a1 1 0 0 0-.0-1.06z"/></svg>`
}
