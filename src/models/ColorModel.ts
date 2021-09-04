import getColors, { ColorSource } from './getColors';

export type { ColorSource } from './getColors';

export default class ColorModel {
  private colors: ColorSource[];

  constructor() {
    this.colors = [];
  }

  public async fetch() {
    const { data } = await getColors();

    this.colors = data;

    return [...this.colors];
  }
}
