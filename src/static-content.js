const address = (line1, city, state, zip5, mapLink) => ({ line1, city, state, zip5, mapLink, toString: () => `${line1}, ${city}, ${state}, ${zip5}`});

export default ({
  name: 'Cursed Gem',
  owner: 'AikonCWD',
  slogan: 'Challenging retro-pixel platformer!',
  email: '',
  defaultBanner: './images/banner.jpg',
  logo: './images/logo.jpg',
  address: null,
  contactPrompt: 'Want to setup an interview?<br>Got feedback on my game?<br>Send me a message',
  social: {
    steam: 'https://store.steampowered.com/app/1194480/Cursed_Gem/',
    twitter: 'https://twitter.com/aikoncwd',
    itch: 'https://aikoncwd.itch.io'
  },
  screenshots: [
    '/images/screen-01.jpg',
    '/images/screen-02.jpg',
    '/images/screen-03.jpg',
    '/images/screen-04.jpg',
    '/images/screen-05.jpg',
    '/images/screen-06.jpg',
    '/images/screen-07.jpg',
    '/images/screen-02.jpg',
  ]
});

