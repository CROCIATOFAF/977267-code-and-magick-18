'use strict';

var WIZARDS_COUNT = 4;
var WIZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var WIZARD_SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];


function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}


var userDialog = document.querySelector('.setup');
userDialog.classList.remove('hidden');

var similarListElement = userDialog.querySelector('.setup-similar-list');
userDialog.querySelector('.setup-similar').classList.remove('hidden');

var similarWizardTemplate = document.querySelector('#similar-wizard-template')
    .content
    .querySelector('.setup-similar-item');


var createWizards = function (count) {
  var wizards = [];
  for (var i = 0; i < count; i++) {
    var wizardsObject = {};
    wizardsObject.name = WIZARD_NAMES[getRandomInt(WIZARD_NAMES.length)] + ' ' + WIZARD_SURNAMES[getRandomInt(WIZARD_SURNAMES.length)];
    wizardsObject.coatColor = COAT_COLORS[getRandomInt(COAT_COLORS.length)];
    wizardsObject.eyesColor = EYES_COLORS[getRandomInt(EYES_COLORS.length)];
    wizards[i] = wizardsObject;
  }
  return wizards;
};

var renderElement = function (wizardElement, element) {
  wizardElement.querySelector('.setup-similar-label').textContent = element.name;
  wizardElement.querySelector('.wizard-coat').style.fill = element.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = element.eyesColor;
};

var renderElements = function (array) {

  var fragment = document.createDocumentFragment();

  for (var i = 0; i < array.length; i++) {

    var wizardElement = similarWizardTemplate.cloneNode(true);

    renderElement(wizardElement, array[i]);
    fragment.appendChild(wizardElement);
  }
  similarListElement.appendChild(fragment);
};

renderElements(createWizards(WIZARDS_COUNT));
