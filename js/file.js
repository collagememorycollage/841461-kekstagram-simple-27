
import {
  IMAGE_TYPES,
} from './variables.js';

const imageDialog = document.querySelector('.img-upload__preview');
const imageInput = document.querySelector('[type=file]');
const imagePlaceholder = document.querySelector('img');

imageInput.addEventListener('change', () => {
  const file = imageInput.files[0];
  const fileName = file.name.toLowerCase();
  const matches = IMAGE_TYPES.some((it) => fileName.endsWith(it));

  if (matches) {
    imagePlaceholder.src = URL.createObjectURL(file);
    imagePlaceholder.classList.add('placeholder-container__item');
    imageDialog.append(imagePlaceholder);
  }
});

