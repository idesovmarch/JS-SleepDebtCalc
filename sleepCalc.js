//Test Exercise created while taking course on Codecademy

function getSleepHours(day){
  if (day === 'Monday') {
    return 8;
  }
  else if(day === 'Tuesday'){
    return 9;
  }
  else if(day === 'Wednesday'){
    return 7;
  }
  else if(day === 'Thursday'){
    return 7;
  }
  else if(day === 'Friday'){
    return 9;
  }
  else if(day === 'Saturday'){
    return 7;
  }
  else if(day === 'Sunday'){
    return 7;
  }
};


function getActualSleepHours(){
const sum = getSleepHours('Monday') + getSleepHours('Tuesday') + 			  getSleepHours('Wednesday') + getSleepHours('Thursday') +    getSleepHours('Friday') + getSleepHours('Saturday') + getSleepHours('Sunday');
  return sum;
};



function getIdealSleepHours(){
  let idealHours = 9;
  return idealHours * 7;
};

function calculateSleepDebt(){
  var actualSleepHours = getActualSleepHours();
  var idealSleepHours = getIdealSleepHours();
  
  if(actualSleepHours === idealSleepHours){
    return 'You got the perfect amount of sleep. You got ' + idealSleepHours + ' of sleep';
  }
  else if(actualSleepHours > idealSleepHours){
    return 'You got more sleep than needed. You got ' + (idealSleepHours - actualSleepHours) + ' hours of sleep more than your ideal amount.';
    
  }
  else if(actualSleepHours < idealSleepHours){
    return 'You should get some rest. You got ' + (actualSleepHours - idealSleepHours) * -1 + ' hours of sleep less than your ideal amount.';
  }
};

console.log(calculateSleepDebt());
