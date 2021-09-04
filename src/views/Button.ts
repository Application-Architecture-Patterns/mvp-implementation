import ColorPresenter from '../presenters/ColorPresenter';

export default class Button {
  private btnElem: HTMLButtonElement;
  private colorPresenter: ColorPresenter;

  constructor(colorPresenter: ColorPresenter) {
    this.btnElem = document.createElement('button');
    this.btnElem.id = 'btn';
    this.btnElem.innerText = 'Click!';
    this.btnElem.addEventListener('click', this.handleClick.bind(this));

    this.colorPresenter = colorPresenter;
  }

  public render() {
    document.body.appendChild(this.btnElem);
  }

  private handleClick() {
    this.colorPresenter.fetch();
  }
}
