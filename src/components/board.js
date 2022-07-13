import BaseComponent from './component.js';

export default class BoardComponent extends BaseComponent {
  constructor(title) {
    super(`<div class="board">
            <div class="board__title"></div>
            <input type="text" class="board__input" placeholder="텍스트를 입력하세요." />
          </div>`);

    const boardTitle = this.element.querySelector('.board__title');
    boardTitle.textContent = title;
  }
}
