
const cheerio = require('cheerio');

module.exports = (hexo, option) => {
  const {config, page: post} = hexo;

  let thumbnail = post.thumbnails[0];
  if(thumbnail.slice(0, 1) == '/') thumbnail = thumbnail.slice(1);
  
  return {
    "@context": "http://schema.org",
    "@type": "BlogPosting",
    "headline": post.title,
    "description": post.description || cheerio(post.excerpt).text(),
    "datePublished": post.date.toISOString(),
    "dateModified": post.updated.toISOString(),
    "articleSection": post.categories.data[0].name,
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": post.permalink
    },    
    "author": {
      "@type": "Person",
      "name": config.author
    },
    "publisher": {
      "@type": "Organization",
      "name": config.title,
      "logo": {
        "@type": "ImageObject",
        "url": option.logo.path,
        "width": option.logo.width,
        "height": option.logo.height
      }
    },
    "image": {
      "@type": "ImageObject",
      "url": config.url + config.root + thumbnail,
      "width" : option.article.eyecatch.width,
      "height" : option.article.eyecatch.height
    }
  };
};
