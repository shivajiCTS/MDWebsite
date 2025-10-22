import './style.scss'
// If you prefer to manage Bootstrap via npm, run `npm install` and uncomment the next line:
// import 'bootstrap/dist/js/bootstrap.bundle.js'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.js'
import { renderHome } from './pages/home.js'
import { renderAbout } from './pages/about.js'
import { renderMedia } from './pages/media.js'
import { renderContact } from './pages/contact.js'
import { initNavbar, setActiveNav } from './components/navbar.js'
import { initFooter } from './components/footer.js'

document.querySelector('#app').innerHTML = `
  <div id="page-root"></div>
`

// Simple hash-based router
const routes = {
  home: () => renderHome({
    title: 'Welcome to MDWebsite',
    lead: 'Curated content and updates. Use the menu to navigate.',
    body: '<p>Latest updates and featured posts will appear here.</p>'
  }),
  about: renderAbout,
  media: renderMedia,
  contact: renderContact,
}

// Initialize navbar from module and use its setActiveNav
initNavbar()
// Initialize footer
initFooter()



function router() {
  const hash = (location.hash || '#home').replace('#','')
  const handler = routes[hash] || renderHome
  setActiveNav(hash)
  handler()
}

window.addEventListener('hashchange', router)
window.addEventListener('load', router)

// Minimal toast demo (keeps behavior from before)
document.getElementById('toastBtn')?.addEventListener('click', () => {
  const toastEl = document.createElement('div')
  toastEl.className = 'toast align-items-center text-bg-primary border-0 show position-fixed top-0 end-0 m-3'
  toastEl.setAttribute('role','alert')
  toastEl.innerHTML = `
    <div class="d-flex">
      <div class="toast-body">
        Hello from Bootstrap Toast!
      </div>
      <button type="button" class="btn-close btn-close-white me-2 m-auto" data-bs-dismiss="toast" aria-label="Close"></button>
    </div>
  `
  document.body.appendChild(toastEl)
  setTimeout(()=> toastEl.remove(), 3000)
})

