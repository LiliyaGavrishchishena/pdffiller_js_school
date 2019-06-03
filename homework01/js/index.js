// Реализовать такие методы работы над массивами

//метод создает новый массив элементов, состоящий из элементов массива array 
//за вычетом элементов массива itemsToExclude
const difference = (arr, itemsToExclude) => arr.filter(elem => !itemsToExclude.includes(elem))
console.log(difference([2, 1, 5], [2, 3]));

//метод принимает массив обьектов array и ключ value по которому нужно эти обьекты сгруппировать
const groupBy =(array, value) => {
    return array.reduce((acc, obj) => {
        const key = obj[value];
        acc[key] = (acc[key] || []).concat(obj);
        return acc;}, {});} 
console.log(groupBy([{ gender: 'male', name: 'Max'}, { gender: 'male', name: 'Fred'}, { gender: 'female', name: 'Jane'}], 'gender')); 

//если метод принимет многомерный массив, он должен "сплюснуть" его на одно измерение 
const flatten = array => array.flat();
console.log(flatten([1, [2, [3, [4]], 5]]));
console.log(flatten([1, 2, 3, 4, 5]));
console.log(flatten([1, [2, 3], 4, 5]));
 
//метод должен убрать все повторяющиеся элементы из массива
const uniq = array  => [...new Set(array)]
console.log(uniq([2, 1, 2]));

//метод должен собирать элементы массива в группы с заданным размером
const chunk = (array, size) =>
    array.reduce((chunks, item, obj) => (obj % size ? chunks[chunks.length - 1].push(item) : chunks.push([item])) && chunks, []) 
console.log(chunk(['a', 'b', 'c', 'd'], 2));
console.log(chunk(['a', 'b', 'c', 'd'], 3));