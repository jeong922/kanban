import BoardComponent from './components/board.js';
import BoardMaker from './components/boardMaker.js';
import { PageComponent, PageItemcomponent } from './components/page.js';
import TodoComponent from './components/todo.js';

class App {
  #page;

  constructor(root) {
    this.#page = new PageComponent(PageItemcomponent);
    this.#page.attachTo(root, 'afterbegin');

    const addBtn = document.querySelector('.addBtn');
    addBtn.addEventListener('click', () => {
      const boardMaker = new BoardMaker();
      boardMaker.attachTo(document.body);
      boardMaker.setOnCloseListener(() => {
        boardMaker.removeFrom(document.body);
      });
      boardMaker.setOnSubmitListener(() => {
        const board = new BoardComponent(boardMaker.title);
        this.#page.addChild(board);
        console.log(board);
        boardMaker.removeFrom(document.body);

        board.setOnSubmitListener(() => {
          const boardContainer = document.querySelector(
            '.board__text-container'
          );
          const todo = new TodoComponent(board.text);
          todo.attachTo(boardContainer, 'beforeend');
        });
      });
    });
  }
}

new App(document.querySelector('.app'));
