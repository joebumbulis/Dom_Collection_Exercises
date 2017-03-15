console.log('Hello, World!');

var arrayFarmInfo = farmResults.map(function(item, i, arr) {
  return item.marketname;
});
console.log(arrayFarmInfo);
console.log(arrayFarmInfo[0]);

var nearFarm = arrayFarmInfo.filter(function(str, i, arr){
  var split = str.split(' ');
  console.log(split);
  return split[0] <= 10;
})
console.log(nearFarm);

var names = nearFarm.map(function(str, i, arr){
  return str.slice(3);
});
console.log(names);

var ul = document.querySelector('#marketnames')

names.forEach(function(arrStr, i, arr){
  ul.innerHTML += '<li>'+arrStr+'</li>';
})



var nearFarm = arrayFarmInfo.map(function(string, i, arr){
  var split = string.split(" ");
  console.log(split);
  if (split[0] <= 10){
    return split.splice(1);
  }
});

console.log(nearFarm)

var catscontain = document.querySelector('.cats-container')

cats.data.forEach(function(element, i, arr){
catscontain.innerHTML += '<img src="'+element.images.fixed_width_small.url+ '"/>'
});
