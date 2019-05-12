

//hide nav open btn when the nav is open, adding/removing open classes to nav and content
var navOpenBtn = document.querySelector('.NavAbi');
var navCloseBtn = document.querySelector('.NavCerr');
var nav = document.querySelector('.nav');
var pageContent = document.querySelector('.ContPag');
var navList = document.querySelector('.NavList');
var page = document.querySelector('.Pag');

//open nav
navOpenBtn.addEventListener('click', function() {
  navOpenBtn.classList.add('js-hidden');
  
  nav.classList.add('js-opened');
  
  pageContent.classList.add('js-opened');
});

//close nav
navCloseBtn.addEventListener('click', function() {
  navOpenBtn.classList.remove('js-hidden');
  
  nav.classList.remove('js-opened');
  
  pageContent.classList.remove('js-opened');
});

//closing navigation if click outside it
page.addEventListener('click', function(e) {
  
  var evTarget = e.target;
  
  if((evTarget !== nav) && (nav.classList.contains('js-opened')) && (evTarget !== navOpenBtn) && (evTarget.parentNode !== navOpenBtn)) {
    console.log(navOpenBtn.firstChild);
    
    navOpenBtn.classList.remove('js-hidden');
  
    nav.classList.remove('js-opened');
  
    pageContent.classList.remove('js-opened');
  }
  
});

//adding default demo classes
nav.classList.add('NavFuer-1');
pageContent.classList.add('PagConFue-1');

//change demo on btn click
demoBtns.forEach(function(el, ind) {
  
  el.addEventListener('click', function() {
    
    //add active class to active btn
    demoBtns.forEach(function(el) {
      el.classList.remove('js-active');
    });
    
    this.classList.add('js-active');
    
    //add proper classes for effects
    var effClass = ind + 1;
    
    nav.classList.remove('js-opened');
  
    pageContent.classList.remove('js-opened');
    
    navCloseBtn.classList.remove('js-opened');
  
    navList.classList.remove('js-opened');
    
    navOpenBtn.classList.remove('js-hidden');
    
    nav.classList.remove(nav.classList[1]);
    
    nav.classList.add('NavFuer-' + effClass);
    
    pageContent.classList.remove(pageContent.classList[1]);
    
    pageContent.classList.add('PagConFue-' + effClass);
    
  });
  
});