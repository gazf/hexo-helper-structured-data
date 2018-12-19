
const cheerio = require('cheerio');

module.exports = (hexo, option) => {
  const {config, page: post} = hexo;

  const blogposting = {
    "@context": "http://schema.org",
    "@type": "BlogPosting",
    "headline": post.title,
    "description": post.description || cheerio(post.excerpt).text(),
    "datePublished": post.date.toISOString(),
    "dateModified": post.updated.toISOString(),
    "articleBody": cheerio(post.content).text(),
    "inLanguage": config.language,
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
        "url": config.url + config.root + option.logo.path,
        "width": option.logo.width,
        "height": option.logo.height
      }
    }
  };

  blogposting.wordCount = blogposting.articleBody.length;

  if(post.categories && post.categories.length) {
    blogposting.articleSection = post.categories.data[0].name;
  }

  if(post.tags && post.tags.length) {
    blogposting.keywords =  post.tags.map((tag) => tag.name).join(',');
  }

  let image = post[option.article.eyecatch.key] || '';
  if(image !== '') {
    if(Array.isArray(image)) image = image[0];
    if(image.slice(0, 1) == '/') image = image.slice(1);
    blogposting.image = {
      "@type": "ImageObject",
      "url": config.url + config.root + image,
      "width" : option.article.eyecatch.width,
      "height" : option.article.eyecatch.height
    };
  }

  return blogposting;
};
