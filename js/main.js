
// Global variables for live search function ----------------------------
const searchBar = document.getElementById('searchBar');
const searchable = document.getElementsByClassName('searchable');
console.log(searchable);

//-------- Displays searchBar only if Js is intitiated-------------------
searchBar.style.visibility = 'visible';

// ------- Live Search Function Start-----------------------------------------

// Adds eventListener
searchBar.addEventListener('input', () => {

// Captures user input and converts to lowercase text
let dataSearch = searchBar.value.toLowerCase();
console.log(dataSearch);

// Activates for loop only if atleast 3 characters are entered
  if (dataSearch.length >= 3 ) {
        console.log('****SEARCH START****');
    for (i = 0; i < searchable.length; i += 1) {
        // Converts captured elements text in lowercase
        let searchText = searchable[i].textContent.toLowerCase();
        console.log(searchText);
        // Compares element text to user input
        if (searchText.includes(dataSearch)) {
          console.log('++++++++');
        } else {
          console.log('--------');
        }
    }
    console.log('****SEARCH END*****');
  } else {
        // Resets elements when user input falls below 3 characters
        if (dataSearch.length <= 3 ) {
          console.log('00000');
        }
  }
});
// ----------- Live Search Function end -------------------------------



    $('#selector1').lightGallery({
        selector: '.item'
    });

    
