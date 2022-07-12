export default class BoardComponent {
  #element;
  constructor(title) {
    const template = document.createElement('template');
    template.innerHTML = `<div class="board">
                            <div class="board__title"></div>
                            <input type="text" class="board__input" />
                          </div>`;
    this.#element = template.content.firstElementChild;

    const boardTitle = this.#element.querySelector('.board__title');
    boardTitle.textContent = title;
  }
  attachTo(parent) {
    parent.appendChild(this.#element);
  }
}
