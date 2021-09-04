import ColorList from '../views/ColorList';

import ColorModel, { ColorSource } from '../models/ColorModel';

export default class ColorPresenter {
  private colorList: ColorList;
  private colorModel: ColorModel;

  constructor(colorList: ColorList, colorModel: ColorModel) {
    this.colorList = colorList;
    this.colorModel = colorModel;
  }

  public async fetch() {
    const data = await this.colorModel.fetch();
    const filteredData = this.filterColorData(data);

    this.colorList.update(filteredData);
  }

  private filterColorData(data: ColorSource[]) {
    return data.map(({ color }) => color);
  }
}
