import BaseComponent from './component.js';

export default class TodoComponent extends BaseComponent {
  constructor(text) {
    super(`<div class="todo">
						<span class="todo__text"></span>
					</div>`);

    const todoText = this.element.querySelector('.todo__text');
    todoText.textContent = text;
  }
}
