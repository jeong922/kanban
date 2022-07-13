import BaseComponent from './component.js';

export default class BoardComponent extends BaseComponent {
  constructor(title) {
    super(`<div class="board">
            <div class="board__title"></div>
            <input type="text" class="board__input" />
          </div>`);

    const boardTitle = this.element.querySelector('.board__title');
    boardTitle.textContent = title;
  }
}
