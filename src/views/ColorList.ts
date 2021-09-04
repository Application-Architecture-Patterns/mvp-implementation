export default class ColorList {
  private colorsElem: HTMLUListElement;

  constructor() {
    this.colorsElem = document.createElement('ul');
    this.colorsElem.id = 'colors';
  }

  public update(data: string[]) {
    const lists = data.map(color => {
      const li = document.createElement('li');

      li.className = 'box';
      li.style.backgroundColor = color;

      return li;
    });

    const isEmpty = !this.colorsElem.children.length;

    if (isEmpty) {
      this.colorsElem.append(...lists);
    } else {
      // @ts-ignore
      this.colorsElem.replaceChildren(...lists);
    }
  }

  public render() {
    document.body.appendChild(this.colorsElem);
  }
}
