
// Global variables for live search function -----------------------

const searchBar = document.getElementById('searchBar');
const para = document.querySelectorAll('main p');
const h4 = document.querySelectorAll('main h4');

//-------- Displays searchBar only if Js is intitiated--------------
searchBar.style.visibility = 'visible';

// ------- Live Search Function -----------------------------------------

// Adds eventListener
searchBar.addEventListener('input', () => {

// Captures user input and converts to lowercase text
let dataSearch = searchBar.value.toLowerCase();
console.log(dataSearch);

// Activates for loop only if atleast 3 characters are entered
  if (dataSearch.length >= 3 ) {
    for (i = 0; i < para.length; i += 1) {
        // Converts captured elements text in lowercase
        let paraText = para[i].textContent.toLowerCase();
        console.log(paraText);
        // Compares element text to user input
        if (paraText.includes(dataSearch)) {
          console.log('+++++');
        } else {
          console.log('-----');
        }
    }
  } else {
        // Resets elements when user input falls below 3 characters
        if (dataSearch.length <= 3 ) {
          console.log('00000');
        }
  }
});

// ----------- Live Search Function end -------------------------------
