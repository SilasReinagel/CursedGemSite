import site from './src/static-content';

const fs = require("fs");
const replace = require('replace-in-file');

// Cache Busting

const randomString = (len, charSet) => {
  charSet = charSet || 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  var randomString = '';
  for (var i = 0; i < len; i++) {
      var char = Math.floor(Math.random() * charSet.length);
      randomString += charSet.substring(char, char + 1);
  }
  return randomString;
};

const hash = randomString(12);
fs.renameSync('public/build/bundle.[hash].css', `./public/build/bundle.${hash}.css`, e => { if ( e ) console.error('Error: ' + e); });
fs.renameSync('public/build/bundle.[hash].js', `./public/build/bundle.${hash}.js`, e => { if ( e ) console.error('Error: ' + e); });

const options = {
  files: './public/index.html',
  from: /\[hash\]/g,
  to: hash,
};

replace(options, (error, _) => {
  if (error) {
    return console.error('Error:', error);
  }
});

// Twitter Card

let twitterCard = "";
twitterCard = twitterCard.concat(`  <meta name="twitter:card" content="summary_large_image" />`);
twitterCard = twitterCard.concat(`  <meta name="twitter:creator" content="@${site.social.twitterUsername}" />`);
twitterCard = twitterCard.concat(`  <meta name="twitter:site" content="@${site.social.twitterUsername}" />`);
twitterCard = twitterCard.concat(`  <meta name="twitter:title" content="@${site.name}" />`);
twitterCard = twitterCard.concat(`  <meta name="twitter:description" content="@${site.siteDescription}" />`);
twitterCard = twitterCard.concat(`  <meta name="twitter:url" content="@${site.url}" />`);
twitterCard = twitterCard.concat(`  <meta name="twitter:image" content="@${site.siteImage}" />`);

replace({
  files: './public/index.html',
  from: '  <!-- Twitter Card Slot -->',
  to: twitterCard,
  }, (error, _) => {
    if (error) {
      return console.error('Error:', error);
    }
  });
