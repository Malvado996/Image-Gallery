
const searchBar = document.getElementById('searchBar');
searchBar.style.visibility = 'visible';


searchBar.addEventListener('keyup', () => {

  let input = searchBar.value.toLowerCase();
  console.log(input + ' length= ' + input.length);
  let card = document.getElementsByClassName('card item');


    if (input.length >= 3) {
      console.log('***START***');
        for (i = 0; i < card.length; i += 1) {
            let text = card[i].innerText.toLowerCase();
            let x = text.includes(input);
              if (x) {
                card[i].style.color = 'green';
              } else {
                card[i].style.color = 'red';
              }
        }
    } else

   if (input.length <= 2) {
        console.log('START B');
        for (i = 0; i < card.length; i += 1) {
          card[i].style.color = 'yellow';
    }
  }
});


// // Global variables for live search function ----------------------------
// const searchBar = document.getElementById('searchBar');
// const searchable = document.getElementsByClassName('searchable');
//
//
//
// //-------- Displays searchBar only if Js is intitiated-------------------
// searchBar.style.visibility = 'visible';
//
// // ------- Live Search Function Start-----------------------------------------
//
// // Adds eventListener
// searchBar.addEventListener('input', () => {
//
// // Captures user input and converts to lowercase text
//
// let dataSearch = searchBar.value.toLowerCase();
// console.log(dataSearch);
// console.log(dataSearch.length);
// // Activates for loop only if atleast 3 characters are entered
//   if (dataSearch.length >= 3 ) {
//         console.log('****SEARCH START****');
//     for (i = 0; i < searchable.length; i += 1) {
//         let searchText = searchable[i].textContent.toLowerCase();
//         console.log(searchText);
//         // Compares element text to user input
//
//         searchable[i].parentNode.parentNode.parentNode.style.display = 'none';
//         if (searchText.includes(dataSearch)) {
//           console.log('++++++++');
//           searchable[0].parentNode.parentNode.parentNode.style.display = 'block';
//           console.log(searchable[0].parentNode.parentNode.parentNode);
//         }
//
//
//      else {
//         if (dataSearch.length <= 3 ) {
//           let card = document.getElementsByClassName('card item');
//           for ( i = 0; i < card.length; i += 1) {
//           card[i].style.display = 'block';
//          }
//         }
//   }
// }
// }
// });
// ----------- Live Search Function end -------------------------------


//console.log(searchable[i].parentNode.parentNode.parentNode);
//searchable[i].parentNode.parentNode.parentNode.style.display = 'none';

// Lightbox---------------------------------------------------------------------
$('#selector1').lightGallery({
    selector: '.item'
});

// Sticker ----------------------------------------------------------------------

$("#sticker").sticky({
  topSpacing:0,
  zIndex:10,
});
