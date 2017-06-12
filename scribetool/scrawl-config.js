(function() {
  var time = new Date();
  var month = "" + (time.getMonth() + 1)
  var day = "" + time.getDate()
  if (month.length == 1) {
    month = "0" + month;
  }
  if (day.length == 1) {
    day = "0" + day;
  }
  window.scrawl = window.scrawl || {};

  var scrawl = window.scrawl;
  scrawl.date = time.getFullYear() + "-" + month + "-" + day;
  scrawl.group = "Hydra W3C Community Group";
  scrawl.people = {
    "Markus Lanthaler": { "alias": ["MarkusLanthaler", "mlnt", "markus", "lanthaler"] },
    "Ruben Verborgh": { "alias": ["Ruben"] },
    "Dietrich Schulten": { "alias": ["Dietrich"] },
    "Dietrich Schulten": { "alias": ["Dietrich"] },
    "Thomas Bergwinkl": { "alias": ["bergi"] },
    "elf Pavlik": { "alias": ["elf-pavlik"] },
    "Tomasz Pluskiewicz": { "alias": ["tpluskiewicz"] },
    "Karol Szczepański": { "alias": ["karol_szczepanski", "karol-szczepanski"] },
  };
  scrawl.htmlHeader = `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Telecon Minutes for ${scrawl.date} | Hydra W3C Community Group</title>
  <meta name="twitter:card" content="summary">
  <meta name="twitter:site:id" content="1524709850">
  <meta name="twitter:creator:id" content="64360611">
  <meta name="twitter:description" content="Hydra simplifies the development of interoperable, hypermedia-driven Web APIs">
  <link rel="stylesheet" href="http://fonts.googleapis.com/css?family=Exo:400,700">
  <link rel="stylesheet" href="http://yui.yahooapis.com/pure/0.5.0/pure-min.css">
  <!--[if lte IE 8]>
    <link rel="stylesheet" href="http://yui.yahooapis.com/pure/0.5.0/grids-responsive-old-ie-min.css">
  <![endif]-->
  <!--[if gt IE 8]><!-->
    <link rel="stylesheet" href="http://yui.yahooapis.com/pure/0.5.0/grids-responsive-min.css">
  <!--<![endif]-->
  <link rel="stylesheet" href="/css/styles.css">
  <link rel="stylesheet" href="/css/minute-styles.css">
  <!--<![endif]-->
</head>
<body>
  <div class="header">
      <div class="home-menu pure-menu pure-menu-open pure-menu-horizontal pure-menu-fixed">
          <span class="pure-menu-heading"><a href="/"><img src="/img/logo.svg" alt="Hydra"></a></span>
          <ul>
              <li><a href="/#specifications">Specifications</a></li>
              <li><a href="/#community">Community</a></li>
              <li><a href="/#tooling">Tooling</a></li>
              <li><a href="/minutes/">Minutes</a></li>
          </ul>
      </div>
  </div>

  <div class="content">
      <div class="pure-g">
          <div class="l-box pure-u-1">`;
  scrawl.htmlFooter = `          </div>
      </div>
  </div>
</body>
</html>`;
})();
