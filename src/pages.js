import Home from './Pages/Home.svelte';
import Contact from './Pages/Contact.svelte';
import ContentCreatorsLicense from './Pages/ContentCreatorsLicense.svelte';

const DefaultPage = Home;
export const pages = [
  { path: '/', href: '/', name: 'Home', component: DefaultPage, showInMainNav: true },
  { path: '/contact', href: '/index.html?page=contact', name: 'Contact', component: Contact, showInMainNav: true },
  { path: '/contentcreators', href: '/index.html?page=contentcreators', name: 'Content Creators', component: ContentCreatorsLicense, showInMainNav: false },
]
