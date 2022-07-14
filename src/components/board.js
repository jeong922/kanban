import BaseComponent from './component.js';

export default class BoardComponent extends BaseComponent {
  constructor(title) {
    super(`<div class="item-wrapper">
            <div class="board__title"></div>
            <input type="text" class="board__input" placeholder="텍스트를 입력하세요." />
            <div class="board__text-container"></div>
          </div>`);

    const boardTitle = this.element.querySelector('.board__title');
    boardTitle.textContent = title;
  }
}
