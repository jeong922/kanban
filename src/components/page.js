import BaseComponent from './component.js';

class PageItemcomponent extends BaseComponent {
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
    child.attachTo(container);
  }

  setOnCloseListener(listener) {
    this.closeListener = listener;
  }
}
export default class PageComponent extends BaseComponent {
  constructor() {
    super(`<div class="page"></div>`);
  }

  addChild(section) {
    const item = new PageItemcomponent();
    item.addChild(section);
    item.attachTo(this.element);
    item.setOnCloseListener(() => {
      item.removeFrom(this.element);
    });
  }
}
