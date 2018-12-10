
module.exports = (hexo, option) => {
  const {config} = hexo;

  return {
    "@context": "http://schema.org",
    "@type": "Person",
    "name": config.author,
    "url": config.url + config.root,
    "sameAs": option.sns
  };
};
