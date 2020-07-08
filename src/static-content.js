const address = (line1, city, state, zip5, mapLink) => ({ line1, city, state, zip5, mapLink, toString: () => `${line1}, ${city}, ${state}, ${zip5}`});

const site = ({
  name: 'Cursed Gem',
  siteOwner: 'Vega Games',
  owner: 'AikonCWD',
  slogan: 'Challenging retro-pixel platformer!',
  email: 'cursedgem.game@gmail.com',
  defaultBanner: './images/banner.jpg',
  logo: './images/logo.png',
  publisherLogo: './images/vegagames-logo.png',
  address: null,
  contactPrompt: 'Want to setup an interview?<br>Got feedback on my game?<br>Send me a message',
  devLog: 'https://aikoncwd.itch.io/cursed-gem/devlog',
  social: {
    steam: 'https://store.steampowered.com/app/1194480/Cursed_Gem/',
    twitter: 'https://twitter.com/aikoncwd',
    itch: 'https://aikoncwd.itch.io',
  },
  screenshots: [
    '/images/gif1.gif',
    '/images/gif2.gif',
    '/images/gif3.gif',
    '/images/gif4.gif',
    '/images/screen-01.jpg',
    '/images/screen-02.jpg'
  ]
});

export default site;

export const presskit = ({
  name: site.name,
  developer: site.siteOwner,
  location: 'Barcelona, Spain',
  releaseDate: 'Auguest 3rd, 2020',
  platforms: 'PC',
  website: 'https://www.cursedgemgame.com',
  contact: site.email,
  social: site.social,
  logo: site.logo,
  features: [
    'Challenging platforming action',
    'Retro-pixel art style',
    'Deadly traps',
    'Lots of collectible diamonds',
    'Heart-touching romance',
    'Epic curses'
  ],
  descriptionParagraphs: [
    'Help Oliver in this retro-pixel and challenging platformer. Explore a cursed cave, full of traps, secrets and diamonds. Complete all levels, get the biggest diamond for your girlfriend and break the curse that is dooming you.',
    'Oliver is in love and is willing to do anything to show his true love Silvia. He is determined to enter the greatest adventure of his life, looking for the world\'s largest diamond. But of course, not everything will be an easy path.'
  ],
  credits: [
    { name: 'AikonCWD', role: 'Coding' },
    { name: 'HorrorPen', role: 'Music' }
  ]
});

