const menuItems = [
  { category: 'momo', name: 'Veg momo', description: 'Steam, fried, kothey, sadheko, chilly, C or jhole.', price: 'Rs. 100 - 150', image: 'https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&w=700&q=80' },
  { category: 'momo', name: 'Buff momo', description: 'A choice of eight comforting momo styles.', price: 'Rs. 120 - 170', image: 'https://images.unsplash.com/photo-1496116218417-1a781b1c416c?auto=format&fit=crop&w=700&q=80' },
  { category: 'momo', name: 'Chicken momo', description: 'Steam, fried, kothey, sadheko, chilly, C or jhole.', price: 'Rs. 130 - 180', image: 'https://images.unsplash.com/photo-1625220194771-7ebdea0b70b9?auto=format&fit=crop&w=700&q=80' },
  { category: 'noodles', name: 'Chowmein', description: 'Veg, egg, buff, chicken or mix. Half and full.', price: 'Rs. 60 - 180', image: 'https://images.unsplash.com/photo-1582878826629-29b7ad1cdc43?auto=format&fit=crop&w=700&q=80' },
  { category: 'bites', name: 'Khaja set', description: 'Available in veg, chicken or buff.', price: 'Rs. 150 - 180', image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=700&q=80' },
  { category: 'bites', name: 'Chicken chilli', description: 'A hearty serving of chicken chilli.', price: 'Rs. 250', image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=700&q=80' },
  { category: 'bites', name: 'Chicken wings fry', description: 'Four pieces, fried and ready to share.', price: 'Rs. 260', image: 'https://images.unsplash.com/photo-1527477396000-e27163b481c2?auto=format&fit=crop&w=700&q=80' },
  { category: 'platter', name: 'Mini veg platter', description: 'Veg momo 4 pcs, French fry and veg pakoda.', price: 'Rs. 249', image: 'https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?auto=format&fit=crop&w=700&q=80' },
  { category: 'platter', name: 'Mini chicken platter', description: 'Chicken momo 4 pcs, French fry and chicken sausage.', price: 'Rs. 299', image: 'https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=700&q=80' },
  { category: 'platter', name: 'Mini momo platter', description: 'Veg momo 4, buff momo 4 and chicken momo 4.', price: 'Rs. 399', image: 'https://images.unsplash.com/photo-1496116218417-1a781b1c416c?auto=format&fit=crop&w=700&q=80' },
  { category: 'platter', name: 'Friends platter', description: 'Chicken momo 6, sausage 4 pcs, French fry and pakoda.', price: 'Rs. 499', image: 'https://images.unsplash.com/photo-1601050690117-94f5f6fa8bd7?auto=format&fit=crop&w=700&q=80' },
  { category: 'platter', name: 'Couple mini platter', description: 'Chicken momo 6, chicken chilli, French fry and sausage.', price: 'Rs. 549', image: 'https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=700&q=80' },
  { category: 'sekuwa', name: 'Sekuwa Babari Special', description: 'Buff plate, half or full.', price: 'Rs. 250 / 600 / 1150', image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=700&q=80' },
  { category: 'sekuwa', name: 'Chicken sekuwa', description: 'Chicken plate, half or full.', price: 'Rs. 220 / 550 / 1050', image: 'https://images.unsplash.com/photo-1532550907401-a500c9a57435?auto=format&fit=crop&w=700&q=80' },
  { category: 'bites', name: 'Crunchy hot wings', description: 'KFC style, six pieces.', price: 'Rs. 350', image: 'https://images.unsplash.com/photo-1527477396000-e27163b481c2?auto=format&fit=crop&w=700&q=80' },
  { category: 'bites', name: 'Chicken drumstick', description: 'Four pieces, fried and ready to share.', price: 'Rs. 250', image: 'https://images.unsplash.com/photo-1569058242253-92a9c755a0ec?auto=format&fit=crop&w=700&q=80' },
  { category: 'bites', name: 'Keema noodles', description: 'Available with chicken or buff.', price: 'Rs. 250', image: 'https://images.unsplash.com/photo-1582878826629-29b7ad1cdc43?auto=format&fit=crop&w=700&q=80' },
  { category: 'bites', name: 'Mushroom chilli', description: 'A serving of mushroom chilli.', price: 'Rs. 260', image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=700&q=80' },
  { category: 'bites', name: 'Burger', description: 'Veg, chicken or buff.', price: 'Rs. 150 / 180 / 160', image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=700&q=80' },
  { category: 'bites', name: 'Hot dog', description: 'Chicken or buff.', price: 'Rs. 180 / 160', image: 'https://images.unsplash.com/photo-1612392062631-94dd858cba88?auto=format&fit=crop&w=700&q=80' },
  { category: 'bites', name: 'Chicken sizzler', description: 'A full chicken sizzler serving.', price: 'Rs. 350', image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=700&q=80' },
  { category: 'bites', name: 'Thukpa', description: 'Veg, egg, chicken or buff.', price: 'Rs. 120 / 135 / 150 / 140', image: 'https://images.unsplash.com/photo-1552611052-33e04de081de?auto=format&fit=crop&w=700&q=80' },
  { category: 'bites', name: 'Chicken roast', description: 'A serving of chicken roast.', price: 'Rs. 280', image: 'https://images.unsplash.com/photo-1532550907401-a500c9a57435?auto=format&fit=crop&w=700&q=80' },
  { category: 'bites', name: 'Chhoila', description: 'Available with chicken or buff.', price: 'Rs. 250 / 220', image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=700&q=80' },
  { category: 'platter', name: 'Mini buff platter', description: 'Buff momo 4 pcs, sausage and French fry.', price: 'Rs. 299', image: 'https://images.unsplash.com/photo-1496116218417-1a781b1c416c?auto=format&fit=crop&w=700&q=80' },
  { category: 'platter', name: 'Mini snacks platter', description: 'Aloo stick, French fry, veg pakoda and peanut sadheko.', price: 'Rs. 249', image: 'https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?auto=format&fit=crop&w=700&q=80' },
  { category: 'platter', name: 'Mini non-veg platter', description: 'Chicken momo 4 pcs, chicken sausage and French fry.', price: 'Rs. 349', image: 'https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=700&q=80' },
  { category: 'platter', name: 'Mini sekuwa platter', description: 'Chicken sekuwa, aloo stick, salad and chutney.', price: 'Rs. 349', image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=700&q=80' },
  { category: 'platter', name: 'Mini chilli platter', description: 'Chicken chilli, sausage chilli and French fry.', price: 'Rs. 399', image: 'https://images.unsplash.com/photo-1532550907401-a500c9a57435?auto=format&fit=crop&w=700&q=80' },
  { category: 'platter', name: 'Mini noodles platter', description: 'Current Chauchau, boiled egg 2 pcs and chicken sausage 2 pc.', price: 'Rs. 239', image: 'https://images.unsplash.com/photo-1582878826629-29b7ad1cdc43?auto=format&fit=crop&w=700&q=80' }
];

const menuGrid = document.querySelector('#menu-grid');
const renderMenu = (filter = 'all') => {
  menuGrid.innerHTML = menuItems.filter(item => filter === 'all' || item.category === filter).map(item => `
    <article class="menu-card" style="background-image:url('${item.image}')">
      <h3>${item.name}</h3><p>${item.description}</p><div class="price">${item.price}</div>
    </article>`).join('');
};
renderMenu();

document.querySelectorAll('.filter-button').forEach(button => button.addEventListener('click', () => {
  document.querySelectorAll('.filter-button').forEach(item => { item.classList.remove('active'); item.setAttribute('aria-selected', 'false'); });
  button.classList.add('active'); button.setAttribute('aria-selected', 'true'); renderMenu(button.dataset.filter);
}));

const header = document.querySelector('.site-header');
window.addEventListener('scroll', () => header.classList.toggle('scrolled', window.scrollY > 24), { passive: true });
const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav-links');
menuToggle.addEventListener('click', () => { const open = nav.classList.toggle('open'); menuToggle.setAttribute('aria-expanded', String(open)); menuToggle.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation'); });
nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => { nav.classList.remove('open'); menuToggle.setAttribute('aria-expanded', 'false'); }));

const lightbox = document.querySelector('.lightbox');
const lightboxImage = lightbox.querySelector('img');
const closeLightbox = () => { lightbox.classList.remove('open'); lightbox.setAttribute('aria-hidden', 'true'); document.body.classList.remove('no-scroll'); };
document.querySelectorAll('.gallery-item').forEach(item => item.addEventListener('click', () => { lightboxImage.src = item.dataset.full; lightboxImage.alt = item.querySelector('img').alt; lightbox.classList.add('open'); lightbox.setAttribute('aria-hidden', 'false'); document.body.classList.add('no-scroll'); }));
lightbox.querySelector('.lightbox-close').addEventListener('click', closeLightbox);
lightbox.addEventListener('click', event => { if (event.target === lightbox) closeLightbox(); });
document.addEventListener('keydown', event => { if (event.key === 'Escape') closeLightbox(); });

const revealObserver = new IntersectionObserver(entries => entries.forEach(entry => { if (entry.isIntersecting) { entry.target.classList.add('visible'); revealObserver.unobserve(entry.target); } }), { threshold: .12 });
document.querySelectorAll('.reveal').forEach(element => revealObserver.observe(element));
