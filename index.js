

    document.addEventListener("DOMContentLoaded", function () {
      const form = document.querySelector(".form form");
      const phone = document.querySelector(".phone");
      const submitBtn = document.querySelector(".submit-btn");
  
      submitBtn.addEventListener("click", function (event) {
        event.preventDefault();
  
        // Get form values
        const target = form.target.value;
        const text = form.text.value;
        const textSize = form.size.value + "px";
        // console.log(textSize)
        const padding = form.padding.value + "px";
        const textColor = form.textcolor.value;
        const bgColor = form.bgcolor.value;
        const radius = form.radius.value + "px";
        const width = form.width.value + "px";
        const arrowWidth = form.arrowwidth.value + "px";
        const arrowHeight = form.arrowheight.value + "px";
  
        // Get the corresponding button
        const targetButton = phone.querySelector("." + target);
        const tooltipElement = targetButton.querySelector(".tooltiptext");
  
        // Apply styles
        targetButton.style.color = textColor;
        targetButton.style.backgroundColor = bgColor;
        targetButton.style.fontSize = textSize;
        targetButton.style.padding = padding;
        targetButton.style.borderRadius = radius;
        tooltipElement.style.width = width;
        tooltipElement.style.height = textSize;
        targetButton.style.height = textSize*0.8;
         targetButton.style.paddingLeft = "25px";
        // targetButton.style.height = textSize;
  
        // Apply arrow styles
        // targetButton.style.setProperty("--arrow-width", arrowWidth);
        // targetButton.style.setProperty("--arrow-height", arrowHeight);
  
        tooltipElement.textContent = text;
        
        // Adjust font size based on text length
        const maxLength = 20; // You can adjust this value
        // const fontSize = Math.max(12, 12 + (maxLength - text.length)); // Minimum font size of 12px
        tooltipElement.style.fontSize = textSize + "px";
      });
    });
  