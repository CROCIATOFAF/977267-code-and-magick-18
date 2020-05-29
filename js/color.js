'use strict';
(function () {

  var WIZARDS_COUNT = 4;
  var WIZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
  var WIZARD_SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
  var COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
  var WIZARD_COATS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
  var EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];
  var FIREBALL_COLORS = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];

  var wizardWrap = document.querySelector('.setup-wizard-appearance');
  var wizardEyes = wizardWrap.querySelector('.wizard-eyes');
  var wizardCoat = wizardWrap.querySelector('.wizard-coat');
  var wizardFireball = document.querySelector('.setup-fireball-wrap');

  // рандомизатор
  function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }

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

      var wizardElement = window.setup.similarWizardTemplate.cloneNode(true);

      renderElement(wizardElement, array[i]);
      fragment.appendChild(wizardElement);
    }
    window.setup.similarListElement.appendChild(fragment);
  };

  renderElements(createWizards(WIZARDS_COUNT));


  wizardCoat.addEventListener('click', function () {
    var colorCoats = WIZARD_COATS[Math.floor(Math.random() * WIZARD_COATS.length)];

    wizardCoat.style.fill = colorCoats;
    wizardWrap.querySelector('input[name="coat-color"]').value = colorCoats;
  });

  wizardEyes.addEventListener('click', function () {
    var colorEyes = EYES_COLORS[Math.floor(Math.random() * EYES_COLORS.length)];

    wizardEyes.style.fill = colorEyes;
    wizardWrap.querySelector('input[name=eyes-color]').value = colorEyes;
  });

  wizardFireball.addEventListener('click', function () {
    var fireballColor = FIREBALL_COLORS[Math.floor(Math.random() * FIREBALL_COLORS.length)];

    wizardFireball.style.background = fireballColor;
    wizardFireball.querySelector('input').value = fireballColor;
  });

})();
