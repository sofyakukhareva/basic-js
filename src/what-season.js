import { NotImplementedError } from '../extensions/index.js';

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
export default function getSeason(date) {
  const seasons ={
    'winter' : [11, 0 ,1],
    'spring' : [2, 3, 4],
    'summer' : [5, 6, 7],
    'autumn' : [8, 9 , 10]
  }

  if(!date){
    return 'Unable to determine the time of year!'
  }else if(!(date instanceof Date)){
    throw 'Invalid date!'
  }else if(typeof date.getTime() == 'function'){
    throw 'Invalid date!'
  }
  const month = date.getMonth();
  for(let key in seasons){
    if(seasons.hasOwnProperty(key)){
      if(seasons[key].includes(month)){
        return key 
      }
    }
  }
}
