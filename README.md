# hexo-helper-structured-data
[![Greenkeeper badge](https://badges.greenkeeper.io/gazf/hexo-helper-structured-data.svg)](https://greenkeeper.io/)
[![wercker status](https://app.wercker.com/status/fd057afca46792f89470190c14aadeca/s/master "wercker status")](https://app.wercker.com/project/byKey/fd057afca46792f89470190c14aadeca)


Add structured data to Hexo

## Install
```bash
npm install --save gazf/hexo-helper-structured-data
```

## Usage
Firstly, you should edit your _config.yml by adding following configuration.
```
structured_data:
  label:
    archive: Archive
  sns:
    - https://twitter.com/test/
    - https://github.com/test/
  logo:
    path: logo.png
    width: 300
    height: 60
  article:
    eyecatch:
      key: image
      width: 1024
      height: 768
```
