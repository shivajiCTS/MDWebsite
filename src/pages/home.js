import './home/home.scss'
import { renderHero } from './home/hero.js'
import { renderLeader } from './home/leader.js'
import { renderPortfolio } from './home/portfolio.js'
import { renderPartners } from './home/partners.js'
import { renderLegacy } from './home/legacy.js'
import { renderGlobalPartners } from './home/globalPartners.js'
import { renderInTheNews } from './home/inTheNews.js'
import { renderGetToKnow } from './home/getToKnow.js'

export function renderHome(data = {}) {
  const root = document.getElementById('page-root')
  root.innerHTML = ''

  // Create a container so sections can append to it
  const container = document.createElement('div')
  container.className = 'home-sections'

  // Render sections in order
  renderHero(container)
  renderLeader(container)
  renderPortfolio(container)
  renderPartners(container)
  renderLegacy(container)
  renderGlobalPartners(container)
  renderInTheNews(container)
  renderGetToKnow(container)

  root.appendChild(container)
}
