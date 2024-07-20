// 웹페이지 메인화면에 대한 자바스크립트

let menus = document.querySelectorAll('div.nav-menu div');
menus.forEach(menu => menu.addEventListener('click', e => showCheckBox(e)));
let previousCategory = null;

function showCheckBox(e) {
  const currentCategory = e.currentTarget;
  console.log(currentCategory, currentCategory.textContent);
  //   if (previousCategory) {
  //     previousCategory.classList.remove('active-nav');
  //     s;
  //   }
  //   // 칼로리, 지방, 나트륨, 단백질의 체크박스 none, flex
  //   currentCategory.classList.add('active-nav');
  //   previousCategory = currentCategory;
}
