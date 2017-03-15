console.log('Hello, World!');

var results = [{
        "id": "1005535",
        "marketname": "0.5 SFC Farmers' Market Downtown"
    }, {
        "id": "1010481",
        "marketname": "1.1 HOPE Farmers Market"
    }, {
        "id": "1005536",
        "marketname": "2.0 SFC Farmers' Market East"
    }, {
        "id": "1009314",
        "marketname": "2.8 Mueller Farrmers' Market "
    }, {
        "id": "1002571",
        "marketname": "2.8 South Austin Farmers Market"
    }, {
        "id": "1005538",
        "marketname": "3.0 SFC Farmers' Market at The Triangle"
    }, {
        "id": "1009308",
        "marketname": "3.6 Barton Creek Farmers Market"
    }, {
        "id": "1009402",
        "marketname": "4.0 Barton Creek Farmers Market (Highland Mall)"
    }, {
        "id": "1005537",
        "marketname": "4.8 SFC Farmers' Market at Sunset Valley"
    }, {
        "id": "1000310",
        "marketname": "6.4 Green Gate Farms"
    }, {
        "id": "1004249",
        "marketname": "10.9 Burnet Road Farmers' Market"
    }, {
        "id": "1007167",
        "marketname": "11.5 Central Texas Farmers Market"
    }, {
        "id": "1008179",
        "marketname": "12.2 Lone Star Farmers Market"
    }, {
        "id": "1000710",
        "marketname": "14.2 Texas Farmers' Market at Lakeline"
    }, {
        "id": "1001260",
        "marketname": "14.3 Pflugerville Pfarmers Market"
    }, {
        "id": "1009176",
        "marketname": "14.5 Downtown Buda Farmers Market "
    }, {
        "id": "1008166",
        "marketname": "20.3 Georgetown Farmers Market"
    }, {
        "id": "1008171",
        "marketname": "20.3 Sun City Farmers Market"
    }, {
        "id": "1008172",
        "marketname": "20.3 Round Rock Farmers Market"
    }]


var arrayFarmInfo = results.map(function(item, i, arr) {
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


//
// var nearFarm = arrayFarmInfo.map(function(string, i, arr){
//   var split = string.split(" ");
//   console.log(split);
//   if (split[0] <= 10){
//     return split.splice(1);
//   }
// });
//
// console.log(nearFarm)
//
