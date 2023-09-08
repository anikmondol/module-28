function calculateTriangleArea(){
    // get triangle base value
    const baseField = document.getElementById('triangle-base');
    const base = parseFloat(baseField.value);
    

    // get triangle height value
    const heightField = document.getElementById('triangle-height');
    const height = parseFloat(heightField.value);

    // calculate area
    const area = 0.5 * base * height;
    

    // show triangle area
    const triangleAreaSpan = document.getElementById('triangle-area');
    triangleAreaSpan.innerText = area;
}

function calculateRectangleArea(){
    // get rectangle width value
    const widthField = document.getElementById('rectangle-width');
    const width = parseFloat(widthField.value);


    // get rectangle length vale
    const lengthField = document.getElementById('rectangle-length');
    const length = parseFloat(lengthField.value);

    // calculate area
    const area = width * length;

    // show rectangle area 
    const rectangleAreaSpan = document.getElementById('rectangle-area');
    rectangleAreaSpan.innerText = area;
}