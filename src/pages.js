import Home from './Pages/Home.svelte';
import Contact from './Pages/Contact.svelte';

const DefaultPage = Home;
export const pages = [
  { path: '/', href: '/', name: 'Home', component: DefaultPage },
  { path: '/contact', href: '/index.html?page=contact', name: 'Contact', component: Contact },
]
