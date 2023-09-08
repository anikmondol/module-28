function calculateTriangleArea(){
    const base = getInputValue('triangle-base');
    const height = getInputValue('triangle-height');
    // validate input: base and height
    if(isNaN(base) || isNaN(height)){
        alert('please insert number');
        return;
    }

    const area = 0.5 * base * height;

    setElementInnerText('triangle-area',area);

    // add to calculation entry
    addToCalculationEntry('triangle',area)
}

function calculateRectangleArea(){
    const width = getInputValue('rectangle-width');
    const length = getInputValue('rectangle-length');
    // validate input: width and length
    if(isNaN(width) || isNaN(length)){
        alert('please insert number');
        return;
    }
    const area = width * length;
    
    setElementInnerText('rectangle-area',area)
    
}


function calculateParallelogramArea(){
    const base = getInputValue('parallelogram-base');
    const height = getInputValue('parallelogram-height');
    // validate input: base and height
    if(isNaN(base) || isNaN(height)){
        alert('please insert number');
        return;
    }

    const area = base * height

    setElementInnerText('parallelogram-area',area);
}

function calculateEllipsesArea(){
    const majorRedis = getInputValue('ellipses-major-radiuses');
    const minorRedis = getInputValue ('ellipses-minor-radiuses');
    // validate input: majorRedis and minorRedis
    if(isNaN(majorRedis) || isNaN(minorRedis)){
        alert('please insert number');
        return;
    }

    const area = 3.1416 * majorRedis * minorRedis;
    const areaDecimal = area.toFixed(2);

    setElementInnerText('ellipse-area',areaDecimal);
}

function calculateRhombusArea(){
    const big = getInputValue('rhombus-major-base');
    const small  = getInputValue('rhombus-minor-base');
    // validate input: big and small
    if(isNaN(big) || isNaN(small)){
        alert('please insert number');
        return;
    }

    area = 0.5 * big * small;
    setElementInnerText('rhombus-area',area);
}

function calculatePentagonArea(){
    const perimeter = getInputValue('pentagon-perimeter');
    const apothem = getInputValue('pentagon-apothem');
    // validate input: perimeter and apothem
    if(isNaN(perimeter) || isNaN(apothem)){
        alert('please insert number');
        return;
    }

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

// add to calculation entry
/*
1. get the element where you want to add the dynamic html
2. create an element you want to add
3. if needed add some class
4. set inner HTML. it could be dynamic template string
*/ 
function addToCalculationEntry(areaType, area){
    
    const calculatorEntry = document.getElementById('calculator-entry');

    const count = calculatorEntry.childElementCount;

    const p = document.createElement('p');
    p.classList.add('my-4')
    p.innerHTML = `${count + 1}. ${areaType} ${area} cm<sup>2</sup> <button class="btn btn-sm btn-success">Convert</button>`
    calculatorEntry.appendChild(p);
}



// Data validation
/*
1. set the proper type of the input field. (number, data, email)
2. check type using typeof 
3. NaN means: Not a number .isNaN is checking the input is not a number or not
*/ 