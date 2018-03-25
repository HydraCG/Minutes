<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Teleconference Minutes | Hydra W3C Community Group</title>
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
  <style>
    code {
      display: block;
      background-color: #eee;
      padding: 0.5em 0.5em;
    }
  </style>
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
          <div class="l-box pure-u-1">
              <h1>Hydra W3C Community Group Teleconference Minutes</h1>
              <p>The public Hydra W3C CG teleconferences and all of the decisions made in those
                 meetings are listed below. Each link takes you to the full text and,
                 if available, the audio recording of the meeting. There's a separate
                 <a href="how-to.html">page describing how to attend or run a conference call</a>.</p>
              <ul>
<?php

$allMinutes = array_reverse(scandir('.'));
foreach ($allMinutes as $minutes)
{
   if(preg_match("/201[0-9]-[0-9]{2,2}-[0-9]{2,2}/", $minutes))
   {
      echo "              <li><a href=\"$minutes\">Minutes for $minutes</a>\n";
      echo "                  <ul>\n";

      // get resolutions from IRC logs
      $irclogfilename = $minutes . "/irc.log";
      $irclog = file($irclogfilename, FILE_IGNORE_NEW_LINES | FILE_SKIP_EMPTY_LINES);
      $resolution = 1;
      $action = 1;

      foreach ($irclog as $line_num => $line)
      {
         if (preg_match("/.*(RESOLVED: .*)/", $line, $matches))
         {
            echo "                      <li>" . htmlspecialchars($matches[1]) . " [<a href=\"$minutes/#resolution-$resolution\">permalink</a>]</li>\n";
            $resolution += 1;
         }
         else if (preg_match("/.*(ACTION: .*)/", $line, $matches))
         {
            echo "                      <li>" . htmlspecialchars($matches[1]) . " [<a href=\"$minutes/#action-$action\">permalink</a>]</li>\n";
            $action += 1;
         }
      }
      echo "                  </ul>\n";
      echo "              </li>\n";
   }
}
?>
              </ul>
          </div>
      </div>
  </div>
</body>
</html>
