const products=[
  {id:1,name:"Kesar Glow 10% Vitamin C Face Serum – 30 ml",short:"Kesar Glow Serum",claim:"Kesar Glow Serum",tag:"10% Vitamin C + Saffron",type:"Serums",price:799,mrp:999,rate:4.89,rev:812,pack:"dropper",c:"#D99B3A",best:1,new:1,benefit:"Brightening | Dark Spots",concern:"dull",desc:"A light face serum with saffron and 10% vitamin C that fades dark spots and gives an even glow.",use:["Apply 3–4 drops on clean face","Use morning and night","Follow with moisturiser and sunscreen"],key:["Vitamin C","Kesar","Hyaluronic acid"]},
  {id:2,name:"Niacinamide Clear Skin Serum with Neem – 30 ml",short:"Clear Skin Serum",claim:"Clear Skin Serum",tag:"10% Niacinamide + Neem",type:"Serums",price:599,mrp:749,rate:4.76,rev:455,pack:"dropper",c:"#CFC3A8",best:1,benefit:"Acne Marks | Open Pores",concern:"acne",desc:"10% niacinamide with neem extract to reduce acne marks, oil and open pores.",use:["Apply 3 drops after cleansing","Use once or twice daily"],key:["Niacinamide","Neem","Zinc"]},
  {id:3,name:"Sunshield Vitamin C Sunscreen SPF 50 PA++++ – 50 g",short:"Sunshield SPF 50",claim:"3-in-1 Sunscreen",tag:"No white cast",type:"Sunscreens",price:499,mrp:599,rate:4.84,rev:688,pack:"tube",c:"#F2D27E",best:1,benefit:"Hydration | Sun Protection",concern:"pig",desc:"Matte-finish sunscreen with PA++++ protection. No white cast, works under makeup.",use:["Apply generously 15 minutes before going out","Reapply every 3 hours"],key:["SPF 50","Vitamin C","Aloe"]},
  {id:4,name:"Aloe Gel Sunscreen SPF 40 for Oily Skin – 50 g",short:"Aloe Gel SPF 40",claim:"Gel Sunscreen",tag:"Oil-free, light",type:"Sunscreens",price:449,mrp:549,rate:4.62,rev:233,pack:"tube",c:"#D7E3C4",new:1,benefit:"Oily Skin | Lightweight",concern:"acne",desc:"Water-light gel sunscreen for oily and acne-prone skin.",use:["Apply as the last step of skincare"],key:["Aloe vera","SPF 40"]},
  {id:5,name:"Rose Night Repair Cream with Ceramides – 50 g",short:"Rose Night Cream",claim:"Night Repair Cream",tag:"Ceramides + Rose",type:"Moisturisers",price:649,mrp:799,rate:4.81,rev:402,pack:"jar",c:"#EBC9C4",best:1,benefit:"Repair | Deep Hydration",concern:"dry",desc:"Overnight cream with rose water and ceramides that repairs and softens dry skin.",use:["Apply on face and neck at night","Massage in upward strokes"],key:["Ceramides","Rose water","Shea"]},
  {id:6,name:"Ceramide Barrier Daily Moisturiser – 80 g",short:"Barrier Moisturiser",claim:"Daily Moisturiser",tag:"72-hr moisture",type:"Moisturisers",price:399,mrp:499,rate:4.63,rev:310,pack:"jar",c:"#F4EBDD",benefit:"Dry Skin | Barrier Care",concern:"dry",desc:"Light daily cream that strengthens the skin barrier and keeps skin soft all day.",use:["Apply on damp skin morning and night"],key:["Ceramides","Glycerin"]},
  {id:7,name:"Ubtan Brightening Face Wash with Kesar & Haldi – 100 ml",short:"Ubtan Face Wash",claim:"Ubtan Face Wash",tag:"Kesar + Haldi",type:"Cleansers",price:299,mrp:349,rate:4.66,rev:356,pack:"tube",c:"#EAD3A4",best:1,benefit:"Tan Removal | Glow",concern:"dull",desc:"Turmeric and saffron face wash that cleans gently without drying the skin.",use:["Wet face","Lather a small amount and rinse"],key:["Turmeric","Kesar","Chickpea"]},
  {id:8,name:"Neem Tea Tree Anti-Acne Face Wash – 100 ml",short:"Neem Face Wash",claim:"Anti-Acne Face Wash",tag:"0.5% Salicylic",type:"Cleansers",price:279,mrp:349,rate:4.55,rev:198,pack:"tube",c:"#C9D3B2",benefit:"Acne Control | Oil Free",concern:"acne",desc:"Deep-cleansing face wash for oily, acne-prone skin.",use:["Use twice a day"],key:["Neem","Tea tree","Salicylic acid"]},
  {id:9,name:"Retinol Age Defy Night Serum – 30 ml",short:"Retinol Serum",claim:"Age Defy Serum",tag:"0.3% Retinol",type:"Serums",price:899,mrp:1099,rate:4.72,rev:142,pack:"dropper",c:"#B98AA0",new:1,benefit:"Anti-Ageing | Firming",concern:"age",desc:"Gentle 0.3% retinol serum that smooths fine lines and firms skin.",use:["Use at night only","Start 2–3 nights a week"],key:["Retinol","Bakuchiol"]},
  {id:10,name:"Velvet Matte Lipstick – Ruby Rani",short:"Matte Lipstick Ruby",claim:"Velvet Matte",tag:"8-hr stay",type:"Makeup",price:449,mrp:549,rate:4.8,rev:534,pack:"lip",c:"#8E1A2B",best:1,benefit:"Matte | Transfer-proof",desc:"Long-wear matte lipstick with vitamin E. Rich colour in one swipe.",use:["Start from the centre of the lips","Build up for deeper colour"],key:["Vitamin E"]},
  {id:11,name:"Satin Lip & Cheek Tint – Nude Chai",short:"Lip Tint Nude",claim:"Lip & Cheek Tint",tag:"Hydrating",type:"Makeup",price:349,mrp:399,rate:4.52,rev:190,pack:"lip",c:"#A86E57",new:1,benefit:"Lip & Cheek | Buildable",desc:"Lightweight lip and cheek tint in a natural nude shade.",use:["Dab on lips or cheeks","Blend with fingertips"],key:["Jojoba oil"]},
  {id:12,name:"Smudge-proof Kajal – Jet Black",short:"Kajal Jet Black",claim:"12-hr Kajal",tag:"Waterproof",type:"Makeup",price:249,mrp:299,rate:4.71,rev:466,pack:"lip",c:"#161412",benefit:"Smudge-proof | 12-hr",desc:"Waterproof kajal with almond oil. Stays for 12 hours.",use:["Glide along the waterline"],key:["Almond oil"]},
  {id:13,name:"Onion & Bhringraj Hair Fall Control Oil – 200 ml",short:"Onion Hair Oil",claim:"Onion Hair Oil",tag:"Bhringraj + Amla",type:"Haircare",price:399,mrp:499,rate:4.74,rev:688,pack:"bottle",c:"#B98A3E",best:1,benefit:"Hair Fall | Growth",concern:"hair",desc:"Red onion and bhringraj oil that reduces hair fall and strengthens roots.",use:["Massage into scalp","Leave 1 hour or overnight","Wash with mild shampoo"],key:["Onion","Bhringraj","Amla"]},
  {id:14,name:"Argan Smooth Sulphate-free Shampoo – 250 ml",short:"Argan Shampoo",claim:"Argan Shampoo",tag:"Sulphate-free",type:"Haircare",price:449,mrp:549,rate:4.5,rev:198,pack:"bottle",c:"#E2C9A0",new:1,benefit:"Frizz Control | Shine",concern:"hair",desc:"Sulphate-free shampoo with argan oil for soft, frizz-free hair.",use:["Massage into wet hair","Rinse well"],key:["Argan oil","Keratin"]}
];
const concerns=[
  {k:"dry",t:"Dry Skin",bg:"linear-gradient(135deg,#E9D3BC,#C9A986)",i:'<path d="M12 3c3 4 6 7 6 11a6 6 0 0 1-12 0c0-4 3-7 6-11Z"/>'},
  {k:"acne",t:"Acne",bg:"linear-gradient(135deg,#DDB7A0,#B98468)",i:'<circle cx="12" cy="12" r="9"/><circle cx="9" cy="10" r="1.3"/><circle cx="15" cy="9" r="1"/><circle cx="14" cy="15" r="1.5"/>'},
  {k:"dull",t:"Dull Skin",bg:"linear-gradient(135deg,#EBCB98,#C69A55)",i:'<circle cx="12" cy="12" r="4"/><path d="M12 2v3M12 19v3M2 12h3M19 12h3M5 5l2 2M17 17l2 2M5 19l2-2M17 7l2-2"/>'},
  {k:"age",t:"Ageing",bg:"linear-gradient(135deg,#D8BFAE,#A9846C)",i:'<path d="M3 8c3-2 6 2 9 0s6-2 9 0M3 13c3-2 6 2 9 0s6-2 9 0M3 18c3-2 6 2 9 0s6-2 9 0"/>'},
  {k:"pig",t:"Pigmentation",bg:"linear-gradient(135deg,#C9A58A,#8C664D)",i:'<circle cx="12" cy="12" r="9"/><circle cx="10" cy="10" r="2.5" fill="currentColor"/><circle cx="15" cy="15" r="1.5" fill="currentColor"/>'},
  {k:"hair",t:"Hair Fall",bg:"linear-gradient(135deg,#B9A38C,#6E5A47)",i:'<path d="M7 3c0 6 4 6 4 12s-3 6-3 6M12 3c0 6 4 6 4 12s-3 6-3 6M17 3c0 4 2 5 2 8"/>'}
];
const bundles=[{n:5,p:"2,599",gift:"2 free gifts",ids:[1,2,5,3,13]},{n:3,p:"1,199",gift:"1 free gift",ids:[7,1,5]},{n:4,p:"1,599",gift:"1 free gift",ids:[3,9,6,8]},{n:2,p:"849",gift:"",ids:[10,11]}];
const reviews=[
  {n:"Ananya S.",c:"Delhi",r:5,t:"Using the Kesar serum for 3 weeks and my dark spots have faded. Not sticky at all.",p:1},
  {n:"Riya M.",c:"Ghaziabad",r:5,t:"Ruby shade is gorgeous and stays even after lunch. Buying the nude one next.",p:10},
  {n:"Priyanka J.",c:"Jaipur",r:4,t:"No white cast, works well under makeup. Delivery was quick too.",p:3},
  {n:"Sneha K.",c:"Noida",r:5,t:"Night cream made my dry patches go away in a week. Lovely rose smell.",p:5},
  {n:"Megha T.",c:"Lucknow",r:5,t:"Hair fall has reduced a lot after a month of the onion oil.",p:13}
];
const inr=n=>"₹"+n.toLocaleString("en-IN");
const pct=p=>Math.round((1-p.price/p.mrp)*100);
const byId=id=>products.find(p=>p.id==id);

/* packaging drawings */
function lbl(x,y,w,h,dark){return `<rect x="${x}" y="${y}" width="${w}" height="${h}" fill="${dark?"#161412":"#fff"}" opacity=".92"/><text x="${x+w/2}" y="${y+h/2+3}" text-anchor="middle" font-family="DM Sans,Arial" font-size="7" letter-spacing="2" fill="${dark?"#E3C77F":"#1A1A1A"}">DREAMZ</text>`}
function pack(p,cls){
  let s="";
  if(p.pack==="dropper")s=`<rect x="74" y="112" width="52" height="108" rx="8" fill="${p.c}"/><rect x="74" y="112" width="52" height="108" rx="8" fill="url(#gloss)"/>${lbl(80,152,40,22)}<rect x="82" y="96" width="36" height="18" rx="2" fill="url(#gold)"/><rect x="88" y="46" width="24" height="52" rx="12" fill="#161412"/>`;
  else if(p.pack==="bottle")s=`<rect x="76" y="86" width="48" height="134" rx="8" fill="${p.c}"/><rect x="76" y="86" width="48" height="134" rx="8" fill="url(#gloss)"/>${lbl(80,140,40,22,p.dark)}<rect x="88" y="54" width="24" height="34" rx="2" fill="url(#gold)"/>`;
  else if(p.pack==="jar")s=`<rect x="58" y="162" width="84" height="58" rx="8" fill="${p.c}"/><rect x="58" y="162" width="84" height="58" rx="8" fill="url(#gloss)"/>${lbl(74,180,52,22)}<rect x="55" y="136" width="90" height="28" rx="4" fill="url(#gold)"/>`;
  else if(p.pack==="tube")s=`<path d="M78 192 L73 66 H127 L122 192Z" fill="${p.c}"/><path d="M78 192 L73 66 H127 L122 192Z" fill="url(#gloss)"/><rect x="71" y="56" width="58" height="12" fill="${p.c}"/>${lbl(80,118,40,22)}<rect x="76" y="190" width="48" height="30" rx="3" fill="url(#gold)"/>`;
  else s=`<rect x="80" y="160" width="40" height="60" rx="2" fill="#161412"/><rect x="84" y="128" width="32" height="34" fill="url(#gold)"/><path d="M89 128 V86 L111 72 V128Z" fill="${p.c}"/>`;
  return `<svg ${cls?`class="${cls}"`:""} viewBox="0 0 200 230" role="img" aria-label="${p.short}"><ellipse cx="100" cy="221" rx="52" ry="5" fill="#000" opacity=".1"/>${s}</svg>`;
}
function card(p,i,anim){
  return `<div class="card${anim?" reveal in":""}" style="--d:${(i%4)*.06}s">
    <button class="pimg" data-open="${p.id}" aria-label="View ${p.short}">${pack(p)}<span class="claim">${p.claim}<span>${p.tag}</span></span><span class="rt"><b>★</b>${p.rate.toFixed(2)}</span></button>
    <div class="cb">
      <h3><button data-open="${p.id}">${p.name}</button></h3>
      <div class="ben">${p.benefit}</div>
      <div class="offp">${pct(p)}% OFF</div>
      <div class="price">${inr(p.price)}<s>${inr(p.mrp)}</s></div>
      <button class="add" data-add="${p.id}">Add To Cart</button>
    </div>
  </div>`;
}

/* promo rotator */
(function(){const ds=[...document.querySelectorAll("#promo div")];let i=0;setInterval(()=>{ds[i].hidden=true;i=(i+1)%ds.length;ds[i].hidden=false},3500)})();

/* hero */
document.getElementById("art1").innerHTML=pack(byId(2))+pack(byId(1),"big")+pack(byId(9));
document.getElementById("art2").innerHTML=pack(byId(3))+pack(byId(1),"big")+pack(byId(5));
document.getElementById("art3").innerHTML=pack(byId(11))+pack(byId(10),"big")+pack(byId(12));
const track=document.getElementById("track"),pager=document.getElementById("pager"),nS=track.children.length;let cur=0,timer;
pager.innerHTML=[...Array(nS)].map((_,i)=>`<button aria-label="Slide ${i+1}"></button>`).join("");
function go(i){cur=(i+nS)%nS;track.style.transform=`translateX(-${cur*100}%)`;[...pager.children].forEach((d,j)=>d.setAttribute("aria-current",j===cur));clearInterval(timer);timer=setInterval(()=>go(cur+1),5000)}
pager.onclick=e=>{const i=[...pager.children].indexOf(e.target);if(i>-1)go(i)};
let sx=null;track.addEventListener("touchstart",e=>sx=e.touches[0].clientX,{passive:true});
track.addEventListener("touchend",e=>{if(sx===null)return;const dx=e.changedTouches[0].clientX-sx;if(Math.abs(dx)>40)go(cur+(dx<0?1:-1));sx=null});
go(0);
document.getElementById("kitBtn").onclick=()=>{[1,5,3].forEach(id=>cart[id]=(cart[id]||0)+1);kits++;save();renderCart();toast("Glow Kit added to cart");openCart(true)};

/* favourites */
const tabNames=["Best Sellers","Serums","Sunscreens","Moisturisers","Cleansers","Makeup","Haircare"];
let tab="Best Sellers",fConcern=null,fQ="",showAll=false;
const tabsEl=document.getElementById("tabs");
function drawTabs(){
  const special=fConcern?concerns.find(c=>c.k===fConcern).t:fQ?`“${fQ}”`:showAll?"All Products":null;
  tabsEl.innerHTML=tabNames.map(t=>`<button class="tab" id="tab-${t.replace(/\s/g,"")}" data-t="${t}" aria-pressed="${!special&&t===tab}">${t}</button>`).join("")+(special?`<button class="tab" aria-pressed="true" data-clear>${special} ×</button>`:"");
}
function list(){
  if(fQ)return products.filter(p=>(p.name+" "+p.type+" "+p.benefit).toLowerCase().includes(fQ));
  if(fConcern)return products.filter(p=>p.concern===fConcern);
  if(showAll)return products;
  return tab==="Best Sellers"?products.filter(p=>p.best):products.filter(p=>p.type===tab);
}
function renderGrid(anim){drawTabs();const l=list();document.getElementById("grid").innerHTML=l.length?l.map((p,i)=>card(p,i,anim)).join(""):`<p style="grid-column:1/-1;text-align:center;color:var(--muted)">No products found.</p>`}
function reset(){fConcern=null;fQ="";showAll=false;document.getElementById("q").value=""}
tabsEl.onclick=e=>{const b=e.target.closest(".tab");if(!b)return;if(b.dataset.clear===undefined)tab=b.dataset.t;reset();renderGrid(true)};
const toFav=()=>document.getElementById("favorites").scrollIntoView();

/* concerns */
document.getElementById("concernList").innerHTML=concerns.map((c,i)=>`<button class="concern reveal" style="--d:${i*.06}s" data-concern="${c.k}"><span class="ph" style="background:${c.bg}"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.2">${c.i}</svg></span><span>${c.t}</span></button>`).join("");

/* bundles */
const bs=document.getElementById("bscroll");
bs.innerHTML=bundles.map(b=>`<div class="bcard"><div class="head"><small>Buy any</small><b><span>${b.n} for</span> ₹${b.p}</b><br><em>Limited Time Deal</em></div><div class="stage">${b.ids.map(id=>pack(byId(id))).join("")}</div><div class="foot"><div><b>Buy any ${b.n} for ₹${b.p}</b><small>${b.gift?"🎁 "+b.gift:"Mix & match"}</small></div><button class="go" data-bundle aria-label="Build bundle of ${b.n}"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M7 17 17 7M8 7h9v9"/></svg></button></div></div>`).join("");
document.getElementById("bPrev").onclick=()=>bs.scrollBy({left:-bs.clientWidth/1.5});
document.getElementById("bNext").onclick=()=>bs.scrollBy({left:bs.clientWidth/1.5});

/* trust marquee */
const trust=[["Vegan",'<path d="M7 20c-2-3-2-9 3-12 3-2 8-2 10-4 0 6-2 14-10 14"/><path d="M4 22c3-5 7-8 11-10"/>'],["Sulphate - free",'<circle cx="12" cy="12" r="8"/><path d="M6 6l12 12"/>'],["Cruelty - free",'<path d="M9 4c-1 3 0 6 1 7M15 4c1 3 0 6-1 7"/><circle cx="12" cy="15" r="5"/>'],["Paraben - free",'<path d="M10 3h4M11 3v6l-5 9a2 2 0 0 0 2 3h8a2 2 0 0 0 2-3l-5-9V3"/><path d="M5 5l14 14"/>'],["Recycle Packaging",'<rect x="4" y="5" width="16" height="15" rx="1"/><path d="M4 9h16M10 14l2-2 2 2"/>'],["Made in India",'<path d="M4 21V9l8-6 8 6v12"/><path d="M9 21v-6h6v6"/>']];
const ti=trust.map(([t,i])=>`<div class="mitem"><span class="ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.3">${i}</svg></span>${t}</div>`).join("");
document.getElementById("mtrack").innerHTML=ti+ti+ti+ti;

/* guarantee row + reviews */
document.getElementById("guarRow").innerHTML=[3,6,4,2,7,9].map((id,i)=>card(byId(id),i,false)).join("");
document.getElementById("rscroll").innerHTML=reviews.map(r=>{const p=byId(r.p);return `<div class="rcard"><div class="top"><div class="stars">${"★".repeat(r.r)}${"☆".repeat(5-r.r)}</div><p>${r.t}</p><div class="who"><span class="av">${r.n[0]}</span><div>${r.n}<span>${r.c} · Verified buyer</span></div></div></div><button class="prod" data-open="${p.id}" style="background:none;border:0;border-top:1px solid var(--line);text-align:left"><span class="t">${pack(p)}</span><div style="min-width:0"><b>${p.short}</b><span>${inr(p.price)}</span></div></button></div>`}).join("");
document.getElementById("clinicArt").innerHTML=pack(byId(3));

/* search + menu */
const sb=document.getElementById("searchbar"),q=document.getElementById("q");
document.getElementById("searchBtn").onclick=()=>{sb.hidden=!sb.hidden;if(!sb.hidden)q.focus()};
q.addEventListener("input",()=>{const v=q.value.trim().toLowerCase();fConcern=null;showAll=false;fQ=v;renderGrid(true)});
q.addEventListener("keydown",e=>{if(e.key==="Enter")toFav()});
const mn=document.getElementById("mobnav"),mb=document.getElementById("menuBtn");
mb.onclick=()=>{if(matchMedia("(max-width:1000px)").matches){const o=mn.classList.toggle("open");mb.setAttribute("aria-expanded",o)}else{reset();showAll=true;renderGrid(true);toFav()}};

/* delegated clicks */
document.addEventListener("click",e=>{
  const a=e.target.closest("[data-add]");if(a){add(+a.dataset.add,a);return}
  const o=e.target.closest("[data-open]");if(o){openProduct(+o.dataset.open);return}
  const t=e.target.closest("[data-tab]");if(t){e.preventDefault();mn.classList.remove("open");reset();tab=t.dataset.tab;renderGrid(true);toFav();return}
  const al=e.target.closest("[data-all]");if(al){e.preventDefault();mn.classList.remove("open");reset();showAll=true;renderGrid(true);toFav();return}
  const c=e.target.closest("[data-concern]");if(c){reset();fConcern=c.dataset.concern;renderGrid(true);toFav();return}
  if(e.target.closest("[data-bundle]")){reset();showAll=true;renderGrid(true);toFav();toast("Pick any products to build your bundle");return}
  if(e.target.closest("#mobnav a"))mn.classList.remove("open");
});

/* product modal */
const modal=document.getElementById("modal");let mQty=1,mId=null;
function openProduct(id){
  const p=byId(id);mId=id;mQty=1;
  document.getElementById("mimg").innerHTML=pack(p);
  document.getElementById("minfo").innerHTML=`<div style="font-size:13px"><b style="color:#F2A900">★</b> ${p.rate.toFixed(2)} · ${p.rev} reviews</div><h3>${p.name}</h3>
    <div class="ben">${p.benefit}</div>
    <div class="price" style="font-size:20px;font-weight:600">${inr(p.price)}<s>${inr(p.mrp)}</s> <span style="color:var(--green);font-size:14px">${pct(p)}% OFF</span></div>
    <div style="font-size:12px;color:var(--muted)">Inclusive of all taxes</div>
    <p>${p.desc}</p>
    <b style="font-weight:600">Key ingredients</b><div class="chips">${p.key.map(k=>`<span>${k}</span>`).join("")}</div>
    <b style="font-weight:600">How to use</b><ul>${p.use.map(u=>`<li>${u}</li>`).join("")}</ul>
    <div class="mrow"><div class="qty"><button id="mMinus" aria-label="Decrease">−</button><span id="mQty">1</span><button id="mPlus" aria-label="Increase">+</button></div><button class="add" id="mAdd">Add To Cart</button></div>`;
  modal.classList.add("open");modal.setAttribute("aria-hidden","false");
}
function closeModal(){modal.classList.remove("open");modal.setAttribute("aria-hidden","true")}
modal.addEventListener("click",e=>{
  e.stopPropagation();
  if(e.target===modal||e.target.id==="mclose")closeModal();
  if(e.target.id==="mMinus"&&mQty>1)document.getElementById("mQty").textContent=--mQty;
  if(e.target.id==="mPlus")document.getElementById("mQty").textContent=++mQty;
  if(e.target.id==="mAdd"){cart[mId]=(cart[mId]||0)+mQty;save();renderCart();closeModal();toast(`${mQty} × ${byId(mId).short} added`)}
});

/* cart */
let cart={},kits=0;
try{const s=JSON.parse(localStorage.getItem("dz-cart4")||"{}");cart=s.cart||{};kits=s.kits||0}catch(e){}
function save(){try{localStorage.setItem("dz-cart4",JSON.stringify({cart,kits}))}catch(e){}}
function add(id,btn){cart[id]=(cart[id]||0)+1;save();renderCart();toast(byId(id).short+" added to cart");if(btn){btn.classList.add("done");btn.textContent="Added ✓";setTimeout(()=>{btn.classList.remove("done");btn.textContent="Add To Cart"},1300)}}
function renderCart(){
  const ids=Object.keys(cart);
  kits=Math.min(kits,cart[1]||0,cart[5]||0,cart[3]||0);
  document.getElementById("count").textContent=ids.reduce((s,i)=>s+cart[i],0);
  document.getElementById("items").innerHTML=ids.length?ids.map(i=>{const p=byId(i);return `<div class="item"><div class="thumb">${pack(p)}</div><div><h4>${p.short}</h4><small>${inr(p.price)} <s>${inr(p.mrp)}</s></small></div><div class="qty"><button data-q="-1" data-id="${i}" aria-label="Decrease">−</button><span>${cart[i]}</span><button data-q="1" data-id="${i}" aria-label="Increase">+</button></div></div>`}).join(""):`<p class="empty">Your cart is empty.<br>Add your favourites to get started.</p>`;
  const mrp=ids.reduce((s,i)=>s+byId(i).mrp*cart[i],0),sale=ids.reduce((s,i)=>s+byId(i).price*cart[i],0);
  const pay=sale-kits*448,ship=sale===0||pay>=999?0:79;
  document.getElementById("mrpT").textContent=inr(mrp);
  document.getElementById("discT").textContent="−"+inr(mrp-pay);
  document.getElementById("shipT").textContent=sale===0?"—":ship?inr(ship):"Free";
  document.getElementById("total").textContent=inr(pay+ship);
  document.getElementById("shipMsg").textContent=sale===0?"Free shipping on orders above ₹999":pay>=999?"Yay! You have unlocked free shipping":`Add ${inr(999-pay)} more for free shipping`;
  document.getElementById("shipPb").style.width=Math.min(100,pay/999*100)+"%";
}
document.getElementById("items").onclick=e=>{e.stopPropagation();const b=e.target.closest("[data-q]");if(!b)return;const id=b.dataset.id;cart[id]+=+b.dataset.q;if(cart[id]<=0)delete cart[id];save();renderCart()};
const dr=document.getElementById("drawer"),sc=document.getElementById("scrim");
function openCart(o){dr.classList.toggle("open",o);sc.classList.toggle("open",o);dr.setAttribute("aria-hidden",!o)}
document.getElementById("openCart").onclick=()=>openCart(true);
document.getElementById("closeCart").onclick=sc.onclick=()=>openCart(false);
addEventListener("keydown",e=>{if(e.key==="Escape"){openCart(false);closeModal()}});
document.getElementById("checkout").onclick=()=>toast(Object.keys(cart).length?"Checkout coming soon":"Your cart is empty");
document.getElementById("newsForm").addEventListener("submit",e=>{e.preventDefault();e.target.reset();toast("Subscribed! Use code DREAMZ10")});
let tt;function toast(m){const t=document.getElementById("toast");t.textContent=m;t.classList.add("show");clearTimeout(tt);tt=setTimeout(()=>t.classList.remove("show"),1900)}

renderGrid(false);renderCart();
const io="IntersectionObserver" in window?new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add("in");io.unobserve(e.target)}}),{rootMargin:"0px 0px 60px 0px"}):null;
if(io)document.querySelectorAll(".reveal,#grid .card,#guarRow .card,.rcard,.bcard").forEach(el=>{el.classList.add("reveal");if(el.getBoundingClientRect().top>innerHeight)io.observe(el)});
