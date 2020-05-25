function breakOut(array, changeValue, stopValue) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] !== stopValue) {
        array[i] = changeValue;
    } else {
      break;
    }
  }
  return (array);
}

function keepGoing(array, changeValue, skipValue) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] !== skipValue) {
      array[i] = changeValue;
    } else {
      continue;
    }
  }
  return (array);
}

function findBy(array, findFn) {
  var x = findFn();
  for (let i = 0; i < array.length; i++) {
    if (x === array[i]) {
      return (array[i]);
    }
  }
  return (null);
}
