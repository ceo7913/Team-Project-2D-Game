const box = document.querySelector('.box');
const descriptionBox = document.querySelector('.description-box')
const closeButton = document.querySelector('.close-button')

// content load 후 0.5초 뒤 새로고침
const reLoadPage = () => {
   if (!sessionStorage.getItem('load')) {
      sessionStorage.setItem('load', 'true')
      setTimeout(function () {
         // alert('새로고침 완료')
         window.location.reload()
      }, 500)
   }
}

const loadButtonState = () => {
   const buttonState = localStorage.getItem('buttonState');
   if (buttonState === 'visible') {
      box.style.display = 'flex';
      closeButton.style.cssText = 'position: absolute';
      closeButton.innerHTML = 'X';
      descriptionBox.style.cssText =
         'background: rgba(255,255,255,0.4); border: 1px solid rgba(255,255,255,0.1);';
   } else {
      box.style.display = 'none';
      closeButton.style.cssText = 'color:black; position: relative; background: rgba(255,255,255,0.7);';
      descriptionBox.style.cssText = 'background: transparent; border:none; left: 20px; top:20px';
      closeButton.innerHTML = '▶';
   }
}
const saveButtonState = () => {
   const buttonState = box.style.display === 'flex' ? 'visible' : 'hidden';
   localStorage.setItem('buttonState', buttonState);
}

const clickBtn = () => {
   if (box.style.display == 'flex') {
      box.style.display = 'none'
      closeButton.style.cssText = 'color:black; position: relative; background: rgba(255,255,255,0.7);';
      descriptionBox.style.cssText = 'background: transparent; border:none; left: 20px; top:20px'
      closeButton.innerHTML = '▶'
   } else {
      box.style.display = 'flex'
      closeButton.style.cssText = 'position: absolute'
      closeButton.innerHTML = 'X'
      descriptionBox.style.cssText =
         'background: rgba(255,255,255,0.4); border: 1px solid rgba(255,255,255,0.1);'
   }
   saveButtonState();
};

reLoadPage();
loadButtonState();
/*
   페이지가 로드될 때 초기 상태를 설정하기 위해
   saveButtonState 상태가 변경될 때(클릭 후) 마다 호출
*/
closeButton.addEventListener('click', clickBtn)