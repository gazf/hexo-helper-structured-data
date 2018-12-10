
module.exports = (hexo, option) => {
  const {config} = hexo;
  
  return {
    "@context": "http://schema.org",
    "@type": "Organization",
    "url": config.url + config.root,
    "logo": {
      "@type": "ImageObject",
      "url": option.logo.path,
      "width": option.logo.width,
      "height": option.logo.height
    }
  };
};
