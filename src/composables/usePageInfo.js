/**
 * Page Info Composable
 * Adds page metadata and SEO information to Vue components
 * @version 2.0.0
 */

import { onMounted, onUnmounted } from 'vue'

export function usePageInfo(pageInfo) {
  const defaultInfo = {
    title: 'Karibase CSS Framework',
    description: 'Modern CSS framework for admin dashboards and floating bots',
    keywords: 'CSS, framework, admin, dashboard, floating bot, UCLA',
    author: 'Karibase - UCLA Graduate',
    canonical: window.location.href
  }

  const info = { ...defaultInfo, ...pageInfo }

  onMounted(() => {
    // Set document title
    if (info.title) {
      document.title = info.title
    }

    // Set meta description
    setMetaTag('description', info.description)
    setMetaTag('keywords', info.keywords)
    setMetaTag('author', info.author)

    // Set Open Graph tags
    setOGTag('og:title', info.title)
    setOGTag('og:description', info.description)
    setOGTag('og:url', info.canonical)
    setOGTag('og:type', 'website')

    // Set Twitter tags
    setTwitterTag('twitter:title', info.title)
    setTwitterTag('twitter:description', info.description)
    setTwitterTag('twitter:card', 'summary_large_image')

    // Set canonical link
    setCanonicalLink(info.canonical)

    // Add structured data
    addStructuredData(info)
  })

  onUnmounted(() => {
    // Reset to default when leaving page
    document.title = defaultInfo.title
  })

  return {
    pageInfo: info
  }
}

function setMetaTag(name, content) {
  if (!content) return
  let meta = document.querySelector(`meta[name="${name}"]`)
  if (!meta) {
    meta = document.createElement('meta')
    meta.name = name
    document.head.appendChild(meta)
  }
  meta.content = content
}

function setOGTag(property, content) {
  if (!content) return
  let meta = document.querySelector(`meta[property="${property}"]`)
  if (!meta) {
    meta = document.createElement('meta')
    meta.setAttribute('property', property)
    document.head.appendChild(meta)
  }
  meta.content = content
}

function setTwitterTag(name, content) {
  if (!content) return
  let meta = document.querySelector(`meta[name="${name}"]`)
  if (!meta) {
    meta = document.createElement('meta')
    meta.name = name
    document.head.appendChild(meta)
  }
  meta.content = content
}

function setCanonicalLink(href) {
  let link = document.querySelector('link[rel="canonical"]')
  if (!link) {
    link = document.createElement('link')
    link.rel = 'canonical'
    document.head.appendChild(link)
  }
  link.href = href
}

function addStructuredData(info) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: info.title,
    description: info.description,
    url: info.canonical,
    author: {
      '@type': 'Person',
      name: info.author,
      alumniOf: 'University of California, Los Angeles (UCLA)'
    },
    datePublished: new Date().toISOString(),
    dateModified: new Date().toISOString()
  }

  const script = document.createElement('script')
  script.type = 'application/ld+json'
  script.textContent = JSON.stringify(schema)
  script.id = 'page-structured-data'
  
  const existingScript = document.getElementById('page-structured-data')
  if (existingScript) {
    existingScript.remove()
  }
  
  document.head.appendChild(script)
}
