import Home from './Pages/Home.svelte';
import Contact from './Pages/Contact.svelte';
import ContentCreatorsLicense from './Pages/ContentCreatorsLicense.svelte';
import PressKit from './Pages/PressKit.svelte';

const DefaultPage = Home;
export const pages = [
  { path: '/', href: '/', name: 'Home', component: DefaultPage, showInMainNav: true },
  { path: '/devlog', href: 'https://aikoncwd.itch.io/cursed-gem/devlog', name: 'DevLog', component: null, showInMainNav: true },
  { path: '/contact', href: '/index.html?page=contact', name: 'Contact', component: Contact, showInMainNav: true },
  { path: '/contentcreators', href: '/index.html?page=contentcreators', name: 'Content Creators', component: ContentCreatorsLicense, showInMainNav: false },
  { path: '/presskit', href: '/index.html?page=presskit', name: 'Press Kit', component: PressKit, showInMainNav: false },
]
