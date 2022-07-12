export default class PageComponent {
  #element;
  constructor() {
    this.#element = document.createElement('div');
    this.#element.setAttribute('class', 'page');
    this.#element.textContent = '컴포넌트';
  }

  attachTo(parent) {
    if (this.#element) {
      parent.appendChild(this.#element);
    }
  }
}
