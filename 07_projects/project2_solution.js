//bmi_calculation

const form = document.querySelector('form');
// this usecase give you empty value
//const height = parseInt(document.querySelector('#height').value);

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');

  if (height === '' || height < 0 || isNaN(height)) {
    results.innerHTML = `Please give me a valid height:${height}`
  }
  else if (weight === '' || weight < 0 || isNaN(weight)) {
    results.innerHTML = `Please give me a valid weight:${weight}`
  }
  else{
    const bmi=(weight/((height*height)/1000)).toFixed(2)
    results.innerHTML=`<span>${bmi}</span>`
    if(bmi<18.6){
      results.innerHTML=`<span>you are under weight:${bmi}</span>`
    }
    else if(bmi>18.6 && bmi<24.9){
      results.innerHTML=`<span>you have normal weight:${bmi}</span>`
    }
    else{
      results.innerHTML=`<span>gym jao :${bmi}</span>`
    }
  }

 
 
});
