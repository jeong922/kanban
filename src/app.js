import BoardComponent from './components/board.js';
import PageComponent from './components/component.js';

class App {
  #page;
  constructor(root) {
    this.#page = new PageComponent();
    this.#page.attachTo(root);

    const board = new BoardComponent('타이틀');
    board.attachTo(root);
  }
}

new App(document.querySelector('.app'));
