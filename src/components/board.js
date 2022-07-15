import BaseComponent from './component.js';
import TodoComponent from './todo.js';

export default class BoardComponent extends BaseComponent {
  constructor(title) {
    super(`<div class="item-wrapper">
            <div class="board__title"></div>
            <form class="board__form">
              <input type="text" class="board__input" placeholder="텍스트를 입력하세요." />
            </form>
            <div class="board__text-container"><div>
          </div>`);

    const boardTitle = this.element.querySelector('.board__title');
    boardTitle.textContent = title;

    const boardForm = this.element.querySelector('.board__form');
    boardForm.addEventListener('submit', (event) => {
      event.preventDefault();
      this.submitListener && this.submitListener();
      const input = this.element.querySelector('.board__input');
      console.log(input.value);
      input.value = '';
    });
  }

  setOnSubmitListener(listener) {
    this.submitListener = listener;
  }

  get text() {
    const element = this.element.querySelector('.board__input');
    return element.value;
  }
}
