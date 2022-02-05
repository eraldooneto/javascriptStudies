const getSleepHours = day => {
  switch (day) {
    case 'monday': return 6.5;
    break;
    case 'tuesday': return 8;
    break;
    case 'wednesday': return 7.5;
    break;
    case 'thursday': return 6;
    break;
    case 'friday': return 6.37;
    break;
    case 'saturday': return 7.40;
    break;
    case 'sunday': return 8.10;
    break;
  }
};

const getActualSleepHours = () =>  getSleepHours('monday') + getSleepHours('tuesday') + getSleepHours('wednesday') + getSleepHours('thursday') + getSleepHours('friday') + getSleepHours('saturday') + getSleepHours('sunday'); 

const getIdealSleepHours = () => {
  const idealHours = 7.5;
  return idealHours * 7;
};

const calculateSleepDebt = () => {
  const actualSleepHours = getActualSleepHours();
  const idealSleepHours = getIdealSleepHours();
  
  if (actualSleepHours === idealSleepHours) {
    console.log('Your sleep is health! keep going in this way! You slept: ' + actualSleepHours);
  } else if (actualSleepHours < idealSleepHours) {
    console.log('Hey, you need to rest! take a longer sleep! You slept: ' + actualSleepHours + '.' + ' You are ' + Math.ceil((idealSleepHours - actualSleepHours)) + ' hours less.' );
  } else {
    console.log('Okay, okay! you are sleeping too much! go get some exercises.' + 'You slept ' + Math.ceil((actualSleepHours - idealSleepHours)) + ' hours more!');
  }
};

calculateSleepDebt();
