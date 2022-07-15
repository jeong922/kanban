/* 
insertAdjacentElement(position, element)
The insertAdjacentElement() method of the Element interface inserts a given element node at a given position relative to the element it is invoked upon.
'beforebegin': Before the targetElement itself.
'afterbegin': Just inside the targetElement, before its first child.
'beforeend': Just inside the targetElement, after its last child.
'afterend': After the targetElement itself.
*/
export default class BaseComponent {
  constructor(htmlString) {
    const template = document.createElement('template');
    template.innerHTML = htmlString;
    this.element = template.content.firstElementChild;
  }

  attachTo(parent, position = 'afterbegin') {
    parent.insertAdjacentElement(position, this.element);
  }

  removeFrom(parent) {
    if (parent !== this.element.parentElement) {
      throw new Error('parent가 일치하지 않음');
    }
    parent.removeChild(this.element);
  }
}
