import BaseComponent from './component.js';

export class PageItemcomponent extends BaseComponent {
  constructor() {
    super(`<section class="board">
            <div class="board__btn">         
              <button class="close"><i class="fas fa-times"></i></button>
            </div>
            <div class="item__container"></div>
          </section>`);
    const closeBtn = this.element.querySelector('.close');
    closeBtn.addEventListener('click', () => {
      this.closeListener && this.closeListener();
    });
  }

  addChild(child) {
    const container = this.element.querySelector('.item__container');
    child.attachTo(container, 'beforeend');
  }

  setOnCloseListener(listener) {
    this.closeListener = listener;
  }
}
export class PageComponent extends BaseComponent {
  #pageItemConstructor;
  constructor(pageItemConstructor) {
    super(`<div class="page"></div>`);
    this.#pageItemConstructor = pageItemConstructor;
  }

  addChild(section) {
    const item = new this.#pageItemConstructor();
    item.addChild(section);
    item.attachTo(this.element, 'beforeend');
    item.setOnCloseListener(() => {
      item.removeFrom(this.element);
    });
  }
}
