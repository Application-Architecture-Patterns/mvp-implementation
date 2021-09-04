// 모델
// 프레젠터로부터 요청받은 데이터를 다시 프레젠터로 전달한다.
// The model is an interface defining the data to be displayed or otherwise acted upon in the user interface.

// 뷰
// 이벤트 발생 시 프레젠터로 이벤트 전달
// The view is a passive interface that displays data (the model) and routes user commands (events) to the presenter to act upon that data.

// 프레젠터 (Supervising Controller)
// 모델에 데이터를 요청한 후, 전달받은 데이터를 가공하여 뷰에 전달한다. (= 뷰 업데이트)
// The presenter acts upon the model and the view. It retrieves data from repositories (the model), and formats it for display in the view.

import Button from './views/Button';
import ColorList from './views/ColorList';

import ColorModel from './models/ColorModel';

import ColorPresenter from './presenters/ColorPresenter';

(function main() {
  const colorList = new ColorList();

  const colorModel = new ColorModel();

  const colorPresenter = new ColorPresenter(colorList, colorModel);

  const button = new Button(colorPresenter);

  button.render();
  colorList.render();
})();
