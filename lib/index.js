
const WebSite = require('./website');
const Organization = require('./organization');
const Person = require('./person');
const BlogPosting = require('./blogposting');
const BreadcrumbList = require('./breadcrumblist');

module.exports = function() {
  const hexo = this;
  const builder = [
    Organization,
    Person,
    BreadcrumbList
  ];

  if(hexo.is_post()) {
    builder.push(BlogPosting);
  } else {
    builder.push(WebSite);
  }

  const jsonld = JSON.stringify(
    builder.map((f) => f(hexo, hexo.config.structured_data))
  );

  return `<script type="application/ld+json">${jsonld}</script>`;
};
