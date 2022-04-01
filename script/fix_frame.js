// 모바일메뉴
let bodyClose = document.querySelector('.body');
let gnbToggle = document.querySelector('.gnb_toggle_btn');
let gnbToggleContain = document.querySelector('.gnb_toggle_contain');
let lnbMwrap = document.querySelector('.lnb_m_wrap');
let gnbM = document.querySelectorAll('.gnb_m');
let lnbM = document.querySelectorAll('.lnb_m');

gnbToggleContain.classList.add('hide');
// lnbMwrap.classList.add('hide');

gnbToggle.addEventListener('click', (e)=>{
   e.stopPropagation();
  gnbToggleContain.classList.remove('hide');
});

function lnbMShow(num) {
  lnbM.forEach((elem) => {
    elem.classList.add('hide');
  });
  lnbM[num].classList.remove('hide');
}
lnbMShow(0);

gnbM.forEach((item, idx) => {
  item.addEventListener('click', e => {

    e.preventDefault();
    lnbMShow(idx);
  })
});

let gnbMcontainClose = document.querySelector('.gnb_m_contain_close');
gnbMcontainClose.addEventListener('click', event => {
   event.stopPropagation();
  gnbToggleContain.classList.add('hide');
})

bodyClose.addEventListener('click', event => {
  gnbToggleContain.classList.add('hide');
});

// gnb슬라이드
  let gnbWrap = document.querySelectorAll('.gnb_wrap');
  let lnbBtnWrap = document.querySelector('.lnb_btn_wrap');
  function lnbShow() {
    lnbBtnWrap.style.maxHeight ?
    lnbBtnWrap.style.maxHeight = null :
    lnbBtnWrap.style.maxHeight = lnbBtnWrap.scrollHeight +'px';
  }
  for(let i=0; i<gnbWrap.length; i++) {
    gnbWrap[i].addEventListener('mouseover', lnbShow);
    gnbWrap[i].addEventListener('mouseout', lnbShow);
  }
// 탭메뉴
  let tabBtn = document.querySelectorAll('.tab_btn');
  let tabContent = document.querySelectorAll('.tab_content');
  let slidingTab = document.querySelector('.slidingTab');
  function contShow(num) {
    tabContent.forEach((item, idx) => {
      item.classList.add('hide');
    });
    tabContent[num].classList.remove('hide');
  }
  contShow(0);
  function slidingTabActive(num) {
    const newLeft = tabBtn[num].offsetLeft;
    const newWidth = tabBtn[num].offsetWidth;
    slidingTab.style.left = newLeft + 'px';
    slidingTab.style.width = newWidth + 'px';
  }
  tabBtn.forEach((item, idx) => {
    item.addEventListener('click', event => {
      event.preventDefault();
      contShow(idx);
      slidingTabActive(idx);
    })
  });

  let tabBtnFirst = document.querySelector('.tab_btn');
  let newWidth = tabBtn[0].offsetWidth;
  let newHeight = tabBtn[0].offsetHeight;
  slidingTab.style.width = newWidth + 'px';
  slidingTab.style.height = newHeight + 'px';

  // 상단 fixed 빈공간 채우기
  let gnbBtnWrap =document.querySelector('.gnb_btn_wrap');
  let tabBtnContain =document.querySelector('.tab_btn_contain');
  let tabBtnWrap =document.querySelector('.tab_btn_wrap');
  let tabContentWrap =document.querySelector('.tab_content_wrap');
  let gnbBtnWrapHeigh = gnbBtnWrap.offsetHeight;
  let tabBtnWrapHeigh = tabBtnWrap.offsetHeight;
  tabBtnContain.style.paddingTop = gnbBtnWrapHeigh + "px";
  tabContentWrap.style.paddingTop = tabBtnWrapHeigh + "px";

window.addEventListener('scroll', event => {
let gnbWrap = document.querySelector('.gnb_btn_wrap');
let tabBtnWrap =document.querySelector('.tab_btn_wrap');
let gnbToggle =document.querySelector('.gnb_toggle');
let logo = document.querySelector('.logo');
let navContain = document.querySelector('.nav_contain');
if(window.pageYOffset > 0) {
  gnbWrap.classList.add('hide');
  logo.classList.add('hide');
  // navContain.classList.add('hide');
  tabBtnContain.style.paddingTop = 0;
  tabBtnWrap.style.background = 'white';
  navContain.style.background = 'white';
  // navContain.style.zIndex = 'white';
  document.querySelector('.nav_contain_bg').classList.add('show');
} else  {
  gnbWrap.classList.remove('hide');
  logo.classList.remove('hide');
  // navContain.classList.remove('hide');
  document.querySelector('.nav_contain_bg').classList.remove('show');
  tabBtnContain.style.paddingTop = gnbBtnWrapHeigh + "px";
  tabBtnWrap.style.background = 'transparent';
  navContain.style.background = 'transparent';
}
});
