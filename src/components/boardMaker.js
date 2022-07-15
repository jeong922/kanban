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

    const overlay = this.element;
    overlay.addEventListener('click', (event) => {
      if (event.target === event.currentTarget) {
        this.closeListener && this.closeListener();
      }
    });
    const submit = this.element.querySelector('.newBoard__form');
    submit.addEventListener('submit', (event) => {
      event.preventDefault();
      this.submitListener && this.submitListener();
    });
  }

  setOnCloseListener(listener) {
    this.closeListener = listener;
  }
  setOnSubmitListener(listener) {
    this.submitListener = listener;
  }

  get title() {
    const element = this.element.querySelector('.newBoard__input');
    return element.value;
  }
}
