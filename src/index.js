import $ from 'jquery';
import './index.css';
import shoppingList from './shopping-list';

const main = function () {
  shoppingList.bindEventListeners();
  shoppingList.render();
};

$(main);
