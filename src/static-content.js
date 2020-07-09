const address = (line1, city, state, zip5, mapLink) => ({ line1, city, state, zip5, mapLink, toString: () => `${line1}, ${city}, ${state}, ${zip5}`});

export const gameDetails = ({
  features: [
    "Single player adventure marked by powerful challenge, deadly traps and precision platforms.",
    "Explore and overcome a huge cave with more than 10 levels.",
    "More than 80 rooms with different designs: traps, puzzles, puzzles, impossible jumps ...",
    "Different difficulty modes that change the behavior of checkpoints.",
    "A \"nightmare\" difficulty mode: Play the entire adventure in the dark, with only a light helmet.",
    "Exchange messages on the walls with other players. In true Darksouls style",
    "Decipher a cryptic runic language that you will find on the walls of the cave",
    "12 skins to customize your player. Being one of them a well-known gentleman ...",
    "55 achievements that will make you feel good about yourself",
    "Soundtrack composed by Horror Pen & Shotte"
  ],
  shortDescription: 'Help Oliver in this retro-pixel and challenging platformer. Explore a cursed cave, full of traps, secrets and diamonds. Complete all levels, get the biggest diamond for your girlfriend and break the curse that is dooming you.',
  descriptionParagraphs: [
    'You are Oliver, and you want to give a diamond ring to marry your beloved, Silvia. But you have no money, so you decide to explore a mysterious cave, an old diamond mine.',
    'The controls are simple and accessible: Jump, hold on to the walls, slide. Push boxes and stones, press buttons to solve puzzles, use physics to your advantage. Every death teaches a lesson.',
    'You are trapped inside, and a strange curse prevents deadly traps from taking your life ... You are immortal! but by not being able to leave the cave you will be condemned to die eternally.',
    'Your mission will be to discover the secret behind this curse, deciphering the runic language thanks to the help of Jerry, your skull friend. Get the big diamond, break the curse and escape from the cave to return with Silvia.'
  ],
})

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
    itchio: 'https://aikoncwd.itch.io',
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
  features: gameDetails.features,
  descriptionParagraphs: gameDetails.descriptionParagraphs,
  credits: [
    { name: 'AikonCWD', role: 'Coding' },
    { name: 'HorrorPen', role: 'Music' }
  ]
});

