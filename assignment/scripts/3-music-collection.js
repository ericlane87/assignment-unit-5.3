console.log('***** Music Collection *****')
// Safe Zone -- Write code below this line




let myCollection = [];

function addToCollection(collection, title, artist, yearPublished) {

  let Album = {
    title: title,
    artist: artist,
    yearPublished: yearPublished
  };

  
  collection.push(Album);


  return Album;
}


let album1 = addToCollection(myCollection, 'Album 1', 'Artist XZY', 1990);
let album2 = addToCollection(myCollection, 'Album 2', 'Artist ABC', 2005);
let album3 = addToCollection(myCollection, 'Album 3', 'Artist TKY', 2011);
let album4 = addToCollection(myCollection, 'Album 4', 'Artist GHP', 2023);
let album5 = addToCollection(myCollection, 'Album 5', 'Artist AAA', 2021);
let album6 = addToCollection(myCollection, 'Album 6', 'Artist QRP', 1999);

console.log(album1);
console.log(album2);
console.log(album3);
console.log(album4);
console.log(album5);
console.log(album6);

console.log(myCollection);

function showCollection(collection) {
  for (let album of collection) {
    console.log(`${album.title} by ${album.artist}, published in ${album.yearPublished}`);
  }
}

showCollection(album1);

function findByArtist(collection, artist) {
  let Matchingresults = [];

  for (let album of collection) {
    if (album.artist === artist) {
      Matchingresults.push(album);
    }
  }

  return Matchingresults;
}

console.log(findByArtist(myCollection, 'Artist XYZ'));
console.log(findByArtist(myCollection, 'Artist PPP')); 








// PLEASE DO NOT MODIFY THIS. Just leave it down here at the bottom. Think of it
// as a lil' chunk of friendly code that you don't need to understand right now.
// (It's used for automated testing.)
try {
  module.exports = {
    myCollection: typeof myCollection !== 'undefined' ? myCollection : undefined,
    addToCollection: typeof addToCollection !== 'undefined' ? addToCollection : undefined,
    showCollection: typeof showCollection !== 'undefined' ? showCollection : undefined,
    findByArtist: typeof findByArtist !== 'undefined' ? findByArtist : undefined,
    search: typeof search !== 'undefined' ? search : undefined,
  }
} catch (e) {
  // Do nothing
}
