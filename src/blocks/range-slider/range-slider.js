let inputsRy = {
    sliderWidth: 300,
    minRange: 0,
    maxRange: 15000, 
    outputWidth:30, // output width
    thumbWidth: 18, // thumb width
    thumbBorderWidth: 4,
    trackHeight: 6,
    theValue: [5000, 10000] // theValue[0] < theValue[1]
  };
  let isDragging0 = false;
  let isDragging1 = false;
  
  let range = inputsRy.maxRange - inputsRy.minRange;
  let rangeK = inputsRy.sliderWidth / range;
  let container = document.querySelector(".containerSlider");
  let thumbRealWidth = inputsRy.thumbWidth + 2 * inputsRy.thumbBorderWidth;
  
  // styles
  let slider = document.querySelector(".slider");
  slider.style.height = inputsRy.trackHeight + "px";
  slider.style.width = inputsRy.sliderWidth + "px";
  slider.style.paddingLeft = (inputsRy.theValue[0] - inputsRy.minRange) * rangeK + "px";
  slider.style.paddingRight = inputsRy.sliderWidth - inputsRy.theValue[1] * rangeK + "px";
  
  let track = document.querySelector(".track");
  track.style.width = inputsRy.theValue[1] * rangeK - inputsRy.theValue[0] * rangeK + "px";
  
  let thumbs = document.querySelectorAll(".thumb");
  for (let i = 0; i < thumbs.length; i++) {
  
    thumbs[i].style.width = thumbs[i].style.height = inputsRy.thumbWidth + "px";
    thumbs[i].style.borderWidth = inputsRy.thumbBorderWidth + "px";
    thumbs[i].style.top = -(inputsRy.thumbWidth / 2 + inputsRy.thumbBorderWidth - inputsRy.trackHeight / 2) + "px";
    thumbs[i].style.left = (inputsRy.theValue[i] - inputsRy.minRange) * rangeK - (thumbRealWidth / 2) + "px";
  
  }
  let outputs = document.querySelectorAll(".output");
  for (let i = 0; i < outputs.length; i++) {
    outputs[i].style.width = outputs[i].style.height = outputs[i].style.lineHeight = outputs[i].style.left = inputsRy.outputWidth + "px";
    outputs[i].style.top = -(Math.sqrt(2 * inputsRy.outputWidth * inputsRy.outputWidth) + inputsRy.thumbWidth / 2 - inputsRy.trackHeight / 2) + "px";
    outputs[i].style.left = (inputsRy.theValue[i] - inputsRy.minRange) * rangeK - inputsRy.outputWidth / 2 + "px";
    outputs[i].innerHTML = "<p>" + inputsRy.theValue[i] +'₽' + "</p>";
  }
  
  //events
  
  thumbs[0].addEventListener("mousedown", function(evt) {
    isDragging0 = true;
  }, false);
  thumbs[1].addEventListener("mousedown", function(evt) {
    isDragging1 = true;
  }, false);
  container.addEventListener("mouseup", function(evt) {
    isDragging0 = false;
    isDragging1 = false;
  }, false);
  container.addEventListener("mouseout", function(evt) {
    isDragging0 = false;
    isDragging1 = false;
  }, false);
  
  container.addEventListener("mousemove", function(evt) {
    let mousePos = oMousePos(this, evt);
    let theValue0 = (isDragging0) ? Math.round(mousePos.x / rangeK) + inputsRy.minRange : inputsRy.theValue[0];
    let theValue1 = (isDragging1) ? Math.round(mousePos.x / rangeK) + inputsRy.minRange : inputsRy.theValue[1];
  
    if (isDragging0) {
  
      if (theValue0 < theValue1 - (thumbRealWidth / 2) &&
        theValue0 >= inputsRy.minRange) {
        inputsRy.theValue[0] = theValue0;
        thumbs[0].style.left = (theValue0 - inputsRy.minRange) * rangeK - (thumbRealWidth / 2) + "px";
        outputs[0].style.left = (theValue0 - inputsRy.minRange) * rangeK - inputsRy.outputWidth / 2 + "px";
        outputs[0].innerHTML = "<p>" + theValue0 + '₽' + "</p>";
        slider.style.paddingLeft = (theValue0 - inputsRy.minRange) * rangeK + "px";
        track.style.width = (theValue1 - theValue0) * rangeK + "px";
  
      }
    } else if (isDragging1) {
  
      if (theValue1 > theValue0 + (thumbRealWidth / 2) &&
        theValue1 <= inputsRy.maxRange) {
        inputsRy.theValue[1] = theValue1;
        thumbs[1].style.left = (theValue1 - inputsRy.minRange) * rangeK - (thumbRealWidth / 2) + "px";
        outputs[1].style.left = (theValue1 - inputsRy.minRange) * rangeK - inputsRy.outputWidth / 2 + "px";
        outputs[1].innerHTML = "<p>" + theValue1 + '₽' + "</p>";
        slider.style.paddingRight = (inputsRy.maxRange - theValue1) * rangeK + "px";
        track.style.width = (theValue1 - theValue0) * rangeK + "px";
      }
    }
  
  }, false);

  function oMousePos(elmt, evt) {
    let ClientRect = elmt.getBoundingClientRect();
    return { 
      x: Math.round(evt.clientX - ClientRect.left),
      y: Math.round(evt.clientY - ClientRect.top)
    }
  }