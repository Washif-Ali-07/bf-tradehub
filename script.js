
const D=[["rice", "Basmati Rice", "Aromatic long-grain rice for everyday and premium use."], ["rice", "Jasmine Rice", "Soft, fragrant rice popular for Asian cooking."], ["rice", "Parboiled Rice", "Firm-textured grains that stay separate when cooked."], ["rice", "Long-grain White Rice", "A versatile staple for retail and foodservice."], ["nuts", "Cashew Nuts", "Creamy kernels for snacking, cooking and confectionery."], ["nuts", "Almonds", "Versatile nuts for snacks, baking and ingredients."], ["nuts", "Peanuts", "A widely used nut for snacks and food manufacturing."], ["nuts", "Pistachios", "Rich green kernels for snacks and desserts."], ["spices", "Cardamom", "Fragrant pods for sweet and savoury dishes."], ["spices", "Cumin Seeds", "Warm, earthy seeds for curries and spice blends."], ["spices", "Turmeric", "Golden spice for colour and flavour."], ["spices", "Black Pepper", "A kitchen essential, whole or ground."], ["spices", "Cloves", "Intensely aromatic buds for cooking and blends."], ["spices", "Coriander Seeds", "Citrusy seeds used whole or ground."], ["spices", "Dried Chillies", "Heat and colour for sauces and spice mixes."], ["spices", "Cinnamon", "Sweet, warm bark for cooking and baking."]];
const nav=document.querySelector('nav'),mt=document.querySelector('.mt');mt&&mt.addEventListener('click',()=>{const o=nav.classList.toggle('o');mt.setAttribute('aria-expanded',o)});
const io='IntersectionObserver' in window?new IntersectionObserver(e=>e.forEach(x=>{if(x.isIntersecting){x.target.classList.add('in');io.unobserve(x.target)}}),{threshold:.1}):null;
document.querySelectorAll('.rv').forEach(e=>io?io.observe(e):e.classList.add('in'));
const g=document.getElementById('grid');
if(g){const T=document.getElementById('tabs'),C=['all','rice','nuts','spices'],L={all:'All',rice:'Rice',nuts:'Nuts',spices:'Spices'};
 const draw=f=>{g.innerHTML=D.filter(p=>f=='all'||p[0]==f).map(p=>`<article class="pc"><div class="a ${p[0]}"></div><div class="b"><small>${L[p[0]]}</small><h3>${p[1]}</h3><p>${p[2]}</p><a href="contact.html?product=${encodeURIComponent(p[1])}">Enquire &rarr;</a></div></article>`).join('');
  T.querySelectorAll('button').forEach(b=>b.classList.toggle('on',b.dataset.f==f))};
 T.innerHTML=C.map(c=>`<button data-f="${c}">${L[c]}<em>${c=='all'?D.length:D.filter(p=>p[0]==c).length}</em></button>`).join('');
 T.onclick=e=>{const b=e.target.closest('button');b&&draw(b.dataset.f)};const q=new URLSearchParams(location.search).get('cat');draw(C.includes(q)?q:'all')}
const f=document.getElementById('enq');
if(f){const p=new URLSearchParams(location.search).get('product');if(p)f.product.value=p;
 f.addEventListener('submit',e=>{e.preventDefault();const v=n=>f[n].value.trim();
  const b=['Name: '+v('name'),'Company: '+v('company'),'Email: '+v('email'),'Country: '+v('country'),'Product / grade: '+v('product'),'Quantity: '+v('qty'),'Interested in: '+v('route'),'','Message:',v('msg')].join('\n');
  location.href='mailto:enquiries@bigfoot.com.sg?subject='+encodeURIComponent('Enquiry: '+(v('product')||'Bigfoot Tradehub'))+'&body='+encodeURIComponent(b)})}
