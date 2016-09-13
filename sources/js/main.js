window.onload = function() {
  
  'use strict';
  
  let searchButton;
  let searchForm;
  let seacrhVisible = false;
  
  searchButton = document.getElementById('search');
  searchForm = document.getElementById('searchForm');
  
  searchButton.addEventListener('click', function() {
    if(!seacrhVisible) {
      searchForm.removeAttribute('class','_display-none');
      searchForm.setAttribute('class','search-form');
      seacrhVisible = true;
      
    } else if(seacrhVisible) {
      searchForm.setAttribute('class','_display-none');
      seacrhVisible = false;
      
    }
  }, false);
  
  let zayavkaButton;
  let zayavkaForm;
  let zayavkaVisible = false;
  
  zayavkaButton = document.getElementById('zayavka');
  zayavkaForm = document.getElementById('zayavkaForm');
  
  zayavkaButton.addEventListener('click', function() {
    if(!zayavkaVisible) {
      zayavkaForm.removeAttribute('class','_display-none');
      zayavkaForm.setAttribute('class','zayavka-wrap');
      zayavkaVisible = true;
      
    } else if(zayavkaVisible) {
      zayavkaForm.setAttribute('class','_display-none');
      zayavkaVisible = false;
      
    }
  }, false);
  
  
  let formOpen,
      formMainId,
      formVisible = false;
  
  formOpen = document.getElementById('formOpen');
  formMainId = document.getElementById('formID');
  
  formOpen.addEventListener('click', function() {
    if(!formVisible) {
      formMainId.removeAttribute('class','_display-none');
      formMainId.setAttribute('class','call-wrapper');
      formVisible = true;
      
    } else if(formVisible) {
      formMainId.setAttribute('class','_display-none');
      formVisible = false;
      
    }
  }, false);
  
  
    ///Недавно просмотренные товары а магазине

  let bottomSlider = document.getElementById('bottom-slider');
  if (bottomSlider) {
    console.log('Есть недавно просмотренные товары');
    let tempSlider = $(bottomSlider).owlCarousel({
   
      // Most important owl features
      items : 3,
      itemsCustom : false,
      itemsDesktop : [1199,3],
      itemsDesktopSmall : [980,3],
      itemsTablet: [768,2],
      itemsTabletSmall: false,
      itemsMobile : [479,1],
      singleItem : false,
      itemsScaleUp : false,
   
      //Basic Speeds
      slideSpeed : 200,
      paginationSpeed : 800,
      rewindSpeed : 1000,
   
      //Autoplay
      autoPlay : true,
      stopOnHover : true,
   
      // Navigation
      navigation : false,
      navigationText : ["prev","next"],
      rewindNav : true,
      scrollPerPage : false,
   
      //Pagination
      pagination : false,
      paginationNumbers: false,
   
      // Responsive 
      responsive: true,
      responsiveRefreshRate : 200,
      responsiveBaseWidth: window,
    });
    let owl = tempSlider.data('owlCarousel');
    document.getElementById('acii-slider-left').addEventListener('click', ()=>{
      owl.prev();
    });
    document.getElementById('acii-slider-right').addEventListener('click', ()=>{
      owl.next();
    });
  }
  
  /*let aciiSlider = document.getElementById('acii-slider-main');
  if (aciiSlider) {
    console.log('Есть акции');
    let tempSlider = $(aciiSlider).owlCarousel({
   
      // Most important owl features
      items : 5,
      itemsCustom : false,
      itemsDesktop : [1199,5],
      itemsDesktopSmall : [980,5],
      itemsTablet: [768,5],
      itemsTabletSmall: false,
      itemsMobile : [479,5],
      singleItem : false,
      itemsScaleUp : false,
   
      //Basic Speeds
      slideSpeed : 200,
      paginationSpeed : 800,
      rewindSpeed : 1000,
   
      //Autoplay
      autoPlay : true,
      stopOnHover : true,
   
      // Navigation
      navigation : false,
      navigationText : ["prev","next"],
      rewindNav : true,
      scrollPerPage : false,
   
      //Pagination
      pagination : false,
      paginationNumbers: false,
   
      // Responsive 
      responsive: true,
      responsiveRefreshRate : 200,
      responsiveBaseWidth: window,
    });
    let owl = tempSlider.data('owlCarousel');
    document.getElementById('acii-slider-left').addEventListener('click', ()=>{
      owl.prev();
    });
    document.getElementById('acii-slider-right').addEventListener('click', ()=>{
      owl.next();
    });
  }*/

  ///Недавно просмотренные товары на главное

  let bottomSliderMain = document.getElementById('bottom-slider-main');
  if (bottomSliderMain) {
    console.log('Есть недавно просмотренные товары');
    let tempSlider = $(bottomSliderMain).owlCarousel({
   
      // Most important owl features
      items : 4,
      itemsCustom : false,
      itemsDesktop : [1199,4],
      itemsDesktopSmall : [980,4],
      itemsTablet: [768,4],
      itemsTabletSmall: false,
      itemsMobile : [479,4],
      singleItem : false,
      itemsScaleUp : false,
   
      //Basic Speeds
      slideSpeed : 200,
      paginationSpeed : 800,
      rewindSpeed : 1000,
   
      //Autoplay
      autoPlay : true,
      stopOnHover : true,
   
      // Navigation
      navigation : false,
      navigationText : ["prev","next"],
      rewindNav : true,
      scrollPerPage : false,
   
      //Pagination
      pagination : false,
      paginationNumbers: false,
   
      // Responsive 
      responsive: true,
      responsiveRefreshRate : 200,
      responsiveBaseWidth: window,
    });
    let owl = tempSlider.data('owlCarousel');
    document.getElementById('bottom-slider-left').addEventListener('click', ()=>{
      owl.prev();
    });
    document.getElementById('bottom-slider-right').addEventListener('click', ()=>{
      owl.next();
    });
  }

  ///Слайдер производителей

  let vendors = document.getElementById('vendors');
  if (vendors) {
    console.log('Есть недавно просмотренные товары');
    let tempSlider = $(vendors).owlCarousel({
   
      // Most important owl features
      items : 5,
      itemsCustom : false,
      itemsDesktop : [1199,5],
      itemsDesktopSmall : [980,5],
      itemsTablet: [768,2],
      itemsTabletSmall: false,
      itemsMobile : [479,1],
      singleItem : false,
      itemsScaleUp : false,
   
      //Basic Speeds
      slideSpeed : 200,
      paginationSpeed : 800,
      rewindSpeed : 1000,
   
      //Autoplay
      autoPlay : true,
      stopOnHover : true,
   
      // Navigation
      navigation : false,
      navigationText : ["prev","next"],
      rewindNav : true,
      scrollPerPage : false,
   
      //Pagination
      pagination : false,
      paginationNumbers: false,
   
      // Responsive 
      responsive: true,
      responsiveRefreshRate : 200,
      responsiveBaseWidth: window,
    });
    let owl = tempSlider.data('owlCarousel');
    document.getElementById('vendors-left').addEventListener('click', ()=>{
      owl.prev();
    });
    document.getElementById('vendors-right').addEventListener('click', ()=>{
      owl.next();
    });
  }
  
  var cats = document.getElementById('dropside');
  
    class CategoryMenu {
    constructor(element) {
      this.overlay = document.getElementById('overlay');

      this.menu = document.getElementById('nav-categoryes');

      this.overlay.addEventListener('click', this.toggleCategoryMenu.bind(this));
      element.addEventListener('click', this.toggleCategoryMenu.bind(this));
    }
    toggleOverlay() {
      this.overlay.classList.toggle('overlay_show')
    }
    toggleMenu() {
      this.menu.classList.toggle('nav-categoryes_show');
    }
    toggleScrolLock() {
      document.querySelector('body').classList.toggle('body_lock');
    }
    toggleCategoryMenu() {
      this.toggleScrolLock();
      this.toggleOverlay();
      this.toggleMenu();
    }
  }

  var b = new CategoryMenu(cats);
  
  let childCatBtn = document.getElementById('tree-cat');
  let childCat = document.getElementById('cat-tree');
  let hiden = true;
  
  childCatBtn.addEventListener('click',() => {
    if(hiden) {
      childCat.style.display = 'block';
      hiden = !hiden;
    } else {
      childCat.style.display = 'none';
      hiden = !hiden;
    }
      
  }, false);
  
}