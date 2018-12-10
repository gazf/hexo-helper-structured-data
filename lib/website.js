
module.exports = (hexo, option) => {
  const {config} = hexo;
  
  return {
    "@context": "http://schema.org",
    "@type": "WebSite",
    "name": config.title,
    "url": config.url + config.root
  };
};
