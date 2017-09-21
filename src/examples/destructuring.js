// export function destructuring(){
//     const event = {    //the object we will destructure
//         name: 'Rock in Rio',
//         stage: 'Trident Stage',
//         artist: "Guns n Roses",
//         songs: {
//             firstSong: 'Sweet Child on mine',
//             lastSong: 'Paradise City',
//         }
//     };
//
// let {         //to destructure an object we declare a
//   name,  //new variable and then choose any number
//   artist     //of keys to create into stand alone variables
// } = event;   //we also specify the object we're destructuring
//
//     console.log('name = ', name);
//     //name = 'Rock in Rio'
//     console.log('artist = ', artist)
//     //artist = 'Guns n Roses'
//
//     //
// let {stage, songs: {firstSong}} = event;
// let {lastSong} = event.songs;
// let {artist: favorite} = event;
//
// console.log('stage: ', stage);           //"Trident Stage"
// console.log('first Song: ', firstSong);  //"Sweet Child on mine"
// console.log('last Song: ',  lastSong);   //"Paradise City"
// console.log('favorite: ', favorite);     //"Guns n Roses"
//
//
// const festivals = ['Coachella', 'Rock in Rio', 'Tomorrowland', 'Ultra Music Festival'];
//
// let [eventIdx1, , , eventIdx4] = festivals;
// //festivals[0]
// console.log(eventIdx1);       //"Coachella"
// console.log(eventIdx4);    //"Ultra Music Festival"
//
// }
