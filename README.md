# 프로젝트명
2D 쯔꾸르 게임 Paranoia  
 

## 유튜브 시연 영상 링크
https://youtu.be/ASwnUpL3pC8

## 프로젝트 목적
- Vanilla JS 활용능력 개선

- JavaScript 알고리즘 및 자료 구조에 대한 이해

- 기획능력 개선

## 프로젝트 정보
- 게임에 들어간 기능
> 인벤토리, 설정창, 오디오, 캐릭터 이동(정보), object 반응, 맵구현, 대화창, 함정
- 게임을 만드는데 unity 를 사용하지 않은 이유
> 프로젝트 과정에서 JavaScript 의 활용 능력을 개선하고 순수 vanilla js 만으로 만들어 보고자 하는 욕심이 있었음

## 이슈 및 배운점
> [Canvas 로 플레이어의 위치를 출력할 때 플레이어의 위치가 맵 밖에서 출력되는 이슈] (https://github.com/ceo7913/Team_2DGame-Project/issues/1)

> [배경에 입력된 충돌체의 x, y 값이 캐릭터의 이동에 따라 이동하지 않고 고정되어 있는 이슈] (https://github.com/ceo7913/Team_2DGame-Project/issues/2)

> [웹페이지가 로드되기 전에도 플레이어가 움직일 수 있는 이슈] (https://github.com/ceo7913/Team_2DGame-Project/issues/3)

## 사용한 스택
<span>
<img src="https://img.shields.io/badge/html5-61DAFB?style=for-the-badge&logo=html5&logoColor=black">
<img src="https://img.shields.io/badge/css3-764ABC?style=for-the-badge&logo=css3&logoColor=white">
<img src="https://img.shields.io/badge/javascript-000000?style=for-the-badge&logo=javascript&logoColor=white">
</span>

<h4>- Collaboration Tool</h4>
<span>
<img src="https://img.shields.io/badge/github.io-181717?style=for-the-badge&logo=github&logoColor=white">
<img src="https://img.shields.io/badge/notion-000000?style=for-the-badge&logo=notion&logoColor=white">
</span>


## 샘플 GIF (2배속)
<div algin="center">
<img src="https://im3.ezgif.com/tmp/ezgif-3-4afe600e37.gif" alt="3-1" width="400px">
<img src="https://im3.ezgif.com/tmp/ezgif-3-e2921e1d38.gif" alt="3-2" width="400px">
</div>

## 프로젝트 파일 구조

```
📦Team-Project-2D-Game
 ┣ 📂.git
 ┃ ┣ 📂hooks
 ┃ ┃ ┣ 📜applypatch-msg.sample
 ┃ ┃ ┣ 📜commit-msg.sample
 ┃ ┃ ┣ 📜fsmonitor-watchman.sample
 ┃ ┃ ┣ 📜post-update.sample
 ┃ ┃ ┣ 📜pre-applypatch.sample
 ┃ ┃ ┣ 📜pre-commit.sample
 ┃ ┃ ┣ 📜pre-merge-commit.sample
 ┃ ┃ ┣ 📜pre-push.sample
 ┃ ┃ ┣ 📜pre-rebase.sample
 ┃ ┃ ┣ 📜pre-receive.sample
 ┃ ┃ ┣ 📜prepare-commit-msg.sample
 ┃ ┃ ┣ 📜push-to-checkout.sample
 ┃ ┃ ┗ 📜update.sample
 ┃ ┣ 📂info
 ┃ ┃ ┗ 📜exclude
 ┃ ┣ 📂logs
 ┃ ┃ ┣ 📂refs
 ┃ ┃ ┃ ┣ 📂heads
 ┃ ┃ ┃ ┃ ┗ 📜main
 ┃ ┃ ┃ ┗ 📂remotes
 ┃ ┃ ┃ ┃ ┗ 📂origin
 ┃ ┃ ┃ ┃ ┃ ┗ 📜HEAD
 ┃ ┃ ┗ 📜HEAD
 ┃ ┣ 📂objects
 ┃ ┃ ┣ 📂info
 ┃ ┃ ┗ 📂pack
 ┃ ┃ ┃ ┣ 📜pack-4fdce2a1e8e3dced424099340895139ae3b6775a.idx
 ┃ ┃ ┃ ┗ 📜pack-4fdce2a1e8e3dced424099340895139ae3b6775a.pack
 ┃ ┣ 📂refs
 ┃ ┃ ┣ 📂heads
 ┃ ┃ ┃ ┗ 📜main
 ┃ ┃ ┣ 📂remotes
 ┃ ┃ ┃ ┗ 📂origin
 ┃ ┃ ┃ ┃ ┗ 📜HEAD
 ┃ ┃ ┗ 📂tags
 ┃ ┣ 📜config
 ┃ ┣ 📜description
 ┃ ┣ 📜HEAD
 ┃ ┣ 📜index
 ┃ ┗ 📜packed-refs
 ┣ 📂.vscode
 ┃ ┗ 📜settings.json
 ┣ 📂audio
 ┃ ┣ 📜baseBgm.mp3
 ┃ ┣ 📜changeImage.mp3
 ┃ ┣ 📜doorOpen.mp3
 ┃ ┣ 📜moveBgm.mp3
 ┃ ┣ 📜누군가 도망치고 숨을 헐떡인다 효과음.mp3
 ┃ ┣ 📜비명소리 (조금과함).mp3
 ┃ ┣ 📜시작을 알리는 효과음.mp3
 ┃ ┗ 📜으스스한 분위기 깜놀 효과음.mp3
 ┣ 📂css
 ┃ ┣ 📜reset.css
 ┃ ┗ 📜ui.css
 ┣ 📂data
 ┃ ┣ 📜audio.js
 ┃ ┣ 📜collisions.js
 ┃ ┣ 📜portals.js
 ┃ ┗ 📜stuffs.js
 ┣ 📂html
 ┃ ┗ 📜index.html
 ┣ 📂img
 ┃ ┣ 📂background
 ┃ ┃ ┣ 📜backgroundAfterStg1.png
 ┃ ┃ ┣ 📜backGroundBeforeStg1.png
 ┃ ┃ ┣ 📜backGroundStg2.png
 ┃ ┃ ┣ 📜ded image.png
 ┃ ┃ ┣ 📜FG2.png
 ┃ ┃ ┣ 📜foreGroundAfterStg1.png
 ┃ ┃ ┣ 📜foreGroundBeforeStg1.png
 ┃ ┃ ┣ 📜foreGroundStg2.png
 ┃ ┃ ┗ 📜startPage.png
 ┃ ┣ 📂character
 ┃ ┃ ┣ 📂load
 ┃ ┃ ┃ ┗ 📜Dr Frankenstein Face.png
 ┃ ┃ ┣ 📜$Dr Frankenstien (resizing).png
 ┃ ┃ ┗ 📜README.md
 ┃ ┣ 📂playImage
 ┃ ┃ ┣ 📜awl_1.png
 ┃ ┃ ┣ 📜awl_2.png
 ┃ ┃ ┣ 📜awl_3.png
 ┃ ┃ ┣ 📜findIt.png
 ┃ ┃ ┣ 📜ghost_1.jpeg
 ┃ ┃ ┣ 📜ghost_2.jpeg
 ┃ ┃ ┗ 📜knife.png
 ┃ ┗ 📜cat.jpg
 ┣ 📂js
 ┃ ┣ 📂utill
 ┃ ┃ ┣ 📜func_inventory.js
 ┃ ┃ ┣ 📜func_stuff.js
 ┃ ┃ ┗ 📜func_ui.js
 ┃ ┣ 📜canvas_1.js
 ┃ ┣ 📜canvas_2.js
 ┃ ┣ 📜classes.js
 ┃ ┣ 📜common.js
 ┃ ┣ 📜playerclass.js
 ┃ ┣ 📜README.md
 ┃ ┗ 📜ui.js
 ┣ 📂json
 ┃ ┣ 📜stg1.json
 ┃ ┣ 📜testSave.json
 ┃ ┗ 📜untitled.json
 ┗ 📜README.md

```

