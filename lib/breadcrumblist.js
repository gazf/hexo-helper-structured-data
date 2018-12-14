
module.exports = (hexo) => {
  const {config, page} = hexo;

  const data = {
    "@context": "http://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "item": {
          "@id": config.url + config.root,
          "name": config.title
        }
      }
    ]
  };

  if(hexo.is_category()) {
    let {category_dir, category_map: map} = config;
    if(!Array.isArray(map)) map = [];
    if(category_dir === '/') category_dir = '';
    if(category_dir.slice(-1) !== '/') category_dir += '/';
    const category_path = category_dir + (map[page.category] || page.category) + '/';
    
    data.itemListElement.push({
      "@type": "ListItem",
      "position": 2,
      "item": {
        "@id": config.url + config.root + category_path,
        "name": page.category
      }
    });
  }

  if(hexo.is_tag()) {
    let {tag_dir, tag_map: map} = config;
    if(!Array.isArray(map)) map = [];
    if(tag_dir === '/') tag_dir = '';
    if(tag_dir.slice(-1) !== '/') tag_dir += '/';
    const tag_path = tag_dir + (map[page.tag] || page.tag) + '/';

    data.itemListElement.push({
      "@type": "ListItem",
      "position": 2,
      "item": {
        "@id": config.url + config.root + tag_path,
        "name": page.tag
      }
    });
  }

  if(hexo.is_archive()) {
    let {archive_dir} = config;
    if(archive_dir.slice(-1) !== '/') archive_dir += '/';

    data.itemListElement.push({
      "@type": "ListItem",
      "position": 2,
      "item": {
        "@id": config.url + config.root + archive_dir,
        "name": config.archive_dir
      }
    });

    if(hexo.is_year()) {
      data.itemListElement.push({
        "@type": "ListItem",
        "position": 3,
        "item": {
          "@id": config.url + config.root + archive_dir + page.year + '/',
          "name": page.year
        }
      });
    }

    if(hexo.is_month()) {
      data.itemListElement.push({
        "@type": "ListItem",
        "position": 4,
        "item": {
          "@id": config.url + config.root + archive_dir + page.year + '/' + page.month + '/',
          "name": page.month
        }
      });
    }
  }

  if(hexo.is_post()) {
    page.categories.data.forEach(
      (category) => data.itemListElement.push({
        "@type": "ListItem",
        "position": 2,
        "item": {
          "@id": config.url + config.root + category.path,
          "name": category.name
        }
      })
    );

    data.itemListElement.push({
      "@type": "ListItem",
      "position": 3,
      "item": {
        "@id": config.url + config.root + page.path,
        "name": page.title
      }
    });
  }

  return data;
};
