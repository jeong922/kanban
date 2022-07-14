export default class BaseComponent {
  constructor(htmlString) {
    const template = document.createElement('template');
    template.innerHTML = htmlString;
    this.element = template.content.firstElementChild;
  }

  attachTo(parent) {
    parent.appendChild(this.element);
  }

  removeFrom(parent) {
    if (parent !== this.element.parentElement) {
      throw new Error('parent가 일치하지 않음');
    }
    parent.removeChild(this.element);
  }
}
