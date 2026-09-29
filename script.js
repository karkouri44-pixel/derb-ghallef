const slides=[...document.querySelectorAll('.slide')],dots=[...document.querySelectorAll('.dot')];let current=0,timer;
function show(n){current=(n+slides.length)%slides.length;slides.forEach((s,i)=>s.classList.toggle('active',i===current));dots.forEach((d,i)=>d.classList.toggle('active',i===current))}
function auto(){clearInterval(timer);timer=setInterval(()=>show(current+1),5000)}document.querySelector('.next').onclick=()=>{show(current+1);auto()};document.querySelector('.prev').onclick=()=>{show(current-1);auto()};dots.forEach((d,i)=>d.onclick=()=>{show(i);auto()});auto();
document.querySelector('.menu-btn').onclick=()=>document.querySelector('#navLinks').classList.toggle('open');
const translations={
fr:{brand:"درب غلف",brandSub:"للبيع والشراء",home:"Accueil",ads:"Annonces",categories:"Catégories",about:"À propos",contact:"Contact",welcome:"Bienvenue à Derb Ghallef",heroText:"Le marché de Casablanca, maintenant en ligne.",discover:"Découvrir les annonces",market:"Le cœur du marché",marketText:"Découvrez boutiques, produits et bonnes affaires.",browse:"Parcourir les catégories",digital:"Derb Ghallef en version digitale",digitalText:"Publiez, recherchez et contactez directement les vendeurs.",publish:"Publier une annonce",search:"Rechercher une annonce...",searchBtn:"Rechercher",latest:"Annonces récentes",allAds:"Voir toutes",explore:"Explorer les catégories",cat1:"Téléphones",cat2:"Informatique",cat3:"Accessoires",cat4:"Électronique",cat5:"Maison",cat6:"Divers",aboutTitle:"L'esprit de Derb Ghallef",aboutText:"Un espace moderne inspiré du célèbre marché de Derb Ghallef, pensé pour rapprocher acheteurs et vendeurs et faciliter la découverte des bonnes affaires.",ctaTitle:"Vous avez quelque chose à vendre ?",ctaText:"Publiez votre annonce et contactez directement les acheteurs.",rights:"Tous droits réservés."},
ar:{brand:"درب غلف",brandSub:"للبيع والشراء",home:"الرئيسية",ads:"الإعلانات",categories:"الفئات",about:"عن الموقع",contact:"اتصل بنا",welcome:"مرحباً بكم في درب غلف",heroText:"سوق الدار البيضاء الآن على الإنترنت.",discover:"اكتشف الإعلانات",market:"قلب السوق",marketText:"اكتشف المحلات والمنتجات وأفضل العروض.",browse:"تصفح الفئات",digital:"درب غلف بنسخة رقمية",digitalText:"انشر إعلانك وابحث وتواصل مباشرة مع البائعين.",publish:"نشر إعلان",search:"ابحث عن إعلان...",searchBtn:"بحث",latest:"أحدث الإعلانات",allAds:"عرض الكل",explore:"استكشف الفئات",cat1:"الهواتف",cat2:"المعلوميات",cat3:"الإكسسوارات",cat4:"الإلكترونيات",cat5:"المنزل",cat6:"متنوع",aboutTitle:"روح درب غلف",aboutText:"فضاء عصري مستوحى من سوق درب غلف الشهير، لتسهيل التواصل بين المشترين والبائعين واكتشاف أفضل العروض.",ctaTitle:"لديك شيء للبيع؟",ctaText:"انشر إعلانك وتواصل مباشرة مع المشترين.",rights:"جميع الحقوق محفوظة."},
en:{brand:"Derb Ghallef",brandSub:"Buy & Sell",home:"Home",ads:"Listings",categories:"Categories",about:"About",contact:"Contact",welcome:"Welcome to Derb Ghallef",heroText:"Casablanca's market, now online.",discover:"Discover listings",market:"The heart of the market",marketText:"Explore shops, products and great deals.",browse:"Browse categories",digital:"Derb Ghallef goes digital",digitalText:"Post, search and contact sellers directly.",publish:"Post an ad",search:"Search for a listing...",searchBtn:"Search",latest:"Recent listings",allAds:"View all",explore:"Explore categories",cat1:"Phones",cat2:"Computers",cat3:"Accessories",cat4:"Electronics",cat5:"Home",cat6:"Other",aboutTitle:"The spirit of Derb Ghallef",aboutText:"A modern space inspired by Casablanca's famous Derb Ghallef market, designed to connect buyers and sellers and make great deals easier to find.",ctaTitle:"Have something to sell?",ctaText:"Post your listing and connect directly with buyers.",rights:"All rights reserved."}
};
document.querySelector('#language').addEventListener('change',e=>{const lang=e.target.value,t=translations[lang];document.documentElement.lang=lang;document.documentElement.dir=lang==='ar'?'rtl':'ltr';document.querySelectorAll('[data-i18n]').forEach(el=>{const k=el.dataset.i18n;if(t[k])el.textContent=t[k]});document.querySelectorAll('[data-i18n-placeholder]').forEach(el=>{el.placeholder=t[el.dataset.i18nPlaceholder]})});
// Recherche des produits
function filterProducts(query = "") {
  const q = query.trim().toLowerCase();

  document.querySelectorAll(".card").forEach(card => {
    const text = card.textContent.toLowerCase();
    card.style.display = (!q || text.includes(q)) ? "" : "none";
  });
}

// Recherche en tapant
const searchInput = document.querySelector("#search");

if (searchInput) {
  searchInput.addEventListener("input", e => {
    filterProducts(e.target.value);
  });
}

// Bouton Rechercher
const searchButton = document.querySelector(".quick .btn");

if (searchButton) {
  searchButton.addEventListener("click", e => {
    e.preventDefault();
    filterProducts(searchInput ? searchInput.value : "");
    document.querySelector("#annonces")?.scrollIntoView({
      behavior: "smooth"
    });
  });
}

// Boutons des catégories
document.querySelectorAll(".category-filter").forEach(button => {
  button.addEventListener("click", () => {
    const category = button.dataset.category;

    document.querySelectorAll(".card").forEach(card => {
      card.style.display =
        card.dataset.category === category ? "" : "none";
    });

    document.querySelector("#annonces")?.scrollIntoView({
      behavior: "smooth"
    });
  });
});
