function calculateTriangleArea(){
    const base = getInputValue('triangle-base');
    const height = getInputValue('triangle-height');

    const area = 0.5 * base * height;

    setElementInnerText('triangle-area',area);
}

function calculateRectangleArea(){
    const width = getInputValue('rectangle-width');
    const length = getInputValue('rectangle-length');
    const area = width * length;
    
    setElementInnerText('rectangle-area',area)
    
}


function calculateParallelogramArea(){
    const base = getInputValue('parallelogram-base');
    const height = getInputValue('parallelogram-height');

    const area = base * height

    setElementInnerText('parallelogram-area',area);
}

function calculateEllipsesArea(){
    const majorRedis = getInputValue('ellipses-major-radiuses');
    const minorRedis = getInputValue ('ellipses-minor-radiuses');

    const area = 3.1416 * majorRedis * minorRedis;
    const areaDecimal = area.toFixed(2);

    setElementInnerText('ellipse-area',areaDecimal);
}

function calculateRhombusArea(){
    const big = getInputValue('rhombus-major-base');
    const small  = getInputValue('rhombus-minor-base');
    area = 0.5 * big * small;
    setElementInnerText('rhombus-area',area);
}

function calculatePentagonArea(){
    const perimeter = getInputValue('pentagon-perimeter');
    const apothem = getInputValue('pentagon-apothem');
    const area = 0.5 * perimeter * apothem;
    setElementInnerText('pentagon-area',area);
}


// reusable get input value field in number
function getInputValue(fieldId){
    const inputField = document.getElementById(fieldId);
    const value = parseFloat(inputField.value);
    inputField.value = '';
    return value;
}





// reuseable set span, p, div, etc text

function setElementInnerText(elementId,allArea){
    const element = document.getElementById(elementId);
    element.innerText = allArea;
}