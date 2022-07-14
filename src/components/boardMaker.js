import BaseComponent from './component.js';

export default class BoardMaker extends BaseComponent {
  constructor() {
    super(`<div class="overlay">
            <div class="newBoard">
              <form class="newBoard__form">
                <input
                  type="text"
                  class="newBoard__input"
                  placeholder="보드 이름을 입력하세요."
                />
              <button class="newBoard__Btn"><i class="fas fa-plus"></i></button>
              </form>
          </div>`);
  }
}
