// *************************************************************************************
// *                                                                                   *
// *                                                                                   *
// *                        Record Collection                                          *
// *                                                                                   *
// *                                                                                   *
// *************************************************************************************

var collection = {
  2548: {
    album: "Slippery When Wet",
    artist: "Bon Jovi",
    tracks: [ "Let It Rock", "You Give Love a Bad Name" ]},
  2468: {
    album: "1999",
    artist: "Prince",
    tracks: [ "1999", "Little Red Corvette" ]},
  1245: {
    artist: "Robert Palmer",
    tracks: [ ]},
  5439: {
    album: "ABBA Gold"}
};

console.log(updateRecords(5439, "artist", "ABBA"));
console.log(updateRecords(1245, "album", "Riptide"));
console.log(updateRecords(2468, "tracks", "Free"));
console.log(updateRecords(2548, "tracks", ""));
console.log(updateRecords(2548, "artist", ""));
console.log(updateRecords(5439, "tracks", "Take a Chance on Me"));
console.log(updateRecords(1245, "tracks", "Addicted to Love"));

// ***********************************************************************
function updateRecords(id, prop, value) {
  this.id = id;
  this.prop = prop;
  this.value = value;
  if (prop !== 'tracks' && value !== ''){
    collection[id][value] = value
  }
  // else if (prop === 'tacks' && value !== ''){
  //   collection[tracks][value].push(value)
  // }
  else if (value === ''){
    delete collection[id][prop]
  }
  return collection;
}


// ***********************************************************************

// function updateRecords(id, prop, value) {
//   if(value === "") delete collection[id][prop];
//   else if(prop === "tracks") {
//   collection[id][prop] = collection[id][prop] || [];
//   collection[id][prop].push(value);
// }
// else {
//   collection[id][prop] = value;
// }
//
// return collection;
// }

// ***********************************************************************

// function updateRecords(id, prop, value) {
//   if (prop !== 'tracks' && value !== ''){
//     collection[id][value] = value
//   }
//   else if (prop === 'tracks' && !collection[id].tracks){
//     trackArr = [];
//     collection[id].tracks = trackArr;
//     collection[id].tracks.push(value);
//   }
//   return collection;
// }

// ***********************************************************************

































// **************************THE*END*OF*SCRIPT******************************
