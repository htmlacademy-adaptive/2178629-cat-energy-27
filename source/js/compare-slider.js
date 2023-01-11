let sliderKnob = document.querySelector('.compare-slider__control-knob-group');
let sliderGroup = document.querySelector('.compare-slider');

sliderKnob.oninput = function () {
  sliderGroup.style.setProperty('--knob-position', sliderKnob.value + `%`);
}
