import BoardComponent from './components/board.js';
import PageComponent from './components/page.js';
import TodoComponent from './components/todo.js';

class App {
  #page;
  constructor(root) {
    this.#page = new PageComponent();
    this.#page.attachTo(root);

    const board = new BoardComponent('타이틀');
    this.#page.addChild(board);
    // board.attachTo(root);

    const text = new TodoComponent('❤❤❤❤❤❤');
    text.attachTo(board.element.querySelector('.board__text-container'));
  }
}

new App(document.querySelector('.app'));
