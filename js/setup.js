'use strict';

var WIZARDS_COUNT = 4;
var WIZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var WIZARD_SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var WIZARD_COATS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];
var FIREBALL_COLORS = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];
// keys
var ESC_KEYCODE = 27;
var ENTER_KEYCODE = 13;

var wizardWrap = document.querySelector('.setup-wizard-appearance');
var wizardEyes = wizardWrap.querySelector('.wizard-eyes');
var wizardCoat = wizardWrap.querySelector('.wizard-coat');
var wizardFireball = document.querySelector('.setup-fireball-wrap');


var userDialog = document.querySelector('.setup');
// userDialog.classList.remove('hidden');
var similarListElement = userDialog.querySelector('.setup-similar-list');
userDialog.querySelector('.setup-similar').classList.remove('hidden');
var similarWizardTemplate = document.querySelector('#similar-wizard-template')
.content
.querySelector('.setup-similar-item');

var setup = document.querySelector('.setup');
var setupOpen = document.querySelector('.setup-open');
var setupClose = setup.querySelector('.setup-close');
var userNameInput = setup.querySelector('.setup-user-name');

// рандомизатор
function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

var onPopupEscPress = function (evt) {
  if (evt.keyCode === ESC_KEYCODE) {
    closePopup();
  }
};


var openPopup = function () {
  setup.classList.remove('hidden');
  document.addEventListener('keydown', onPopupEscPress);
};

var closePopup = function () {
  setup.classList.add('hidden');
  document.removeEventListener('keydown', onPopupEscPress);
};

setupOpen.addEventListener('click', function () {
  openPopup();
});

setupOpen.addEventListener('keydown', function (evt) {
  if (evt.keyCode === ENTER_KEYCODE) {
    openPopup();
  }
});

setupClose.addEventListener('click', function () {
  closePopup();
});

setupClose.addEventListener('keydown', function (evt) {
  if (evt.keyCode === ENTER_KEYCODE) {
    closePopup();
  }
});

// поведение окна при фокусе на поле имени
userNameInput.addEventListener('focus', function () {
  document.removeEventListener('keydown', onPopupEscPress);
});

// поле для валидации, сообщения об ошибке

userNameInput.addEventListener('invalid', function (evt) {
  if (userNameInput.validity.tooShort) {
    userNameInput.setCustomValidity('Имя должно состоять минимум из 2-х символов');
  } else if (userNameInput.validity.tooLong) {
    userNameInput.setCustomValidity('Имя не должно превышать 25-ти символов');
  } else if (userNameInput.validity.valueMissing) {
    userNameInput.setCustomValidity('Обязательное поле');
  } else {
    userNameInput.setCustomValidity('');
  }
});

userNameInput.addEventListener('input', function (evt) {
  var target = evt.target;
  if (target.value.length < 2) {
    target.setCustomValidity('Имя должно состоять минимум из 2-х символов');
  } else {
    target.setCustomValidity('');
  }
});

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
