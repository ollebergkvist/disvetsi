const SeoAnalyzer = require('seo-analyzer')

new SeoAnalyzer()
  .inputNextJs(3000)
  .addRule(
    'titleLengthRule',
    { min: 10, max: 50 },
    'imgTagWithAltAttributeRule',
    'aTagWithRelAttributeRule',
    'metaSocialRule',
    {
      properties: [
        'og:url',
        'og:type',
        'og:site_name',
        'og:title',
        'og:description',
        'og:image',
        'og:image:width',
        'og:image:height',
        'twitter:card',
        'twitter:text:title',
        'twitter:description',
        'twitter:image:src',
        'twitter:url',
      ],
    },
    'canonicalLinkRule'
  )
  .outputConsole()
