
// Live Search -----------------------------------------------------------------

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
                card[i].style.display = 'block';
              } else {
                card[i].style.display = 'none';
              }
        }
    } else

   if (input.length <= 2) {
        console.log('START B');
        for (i = 0; i < card.length; i += 1) {
          card[i].style.display = 'block';
    }
  }
});


// Lightbox---------------------------------------------------------------------
// $('#selector1').lightGallery({
//     selector: '.item'
// });


// Sticker ----------------------------------------------------------------------

$("#sticker").sticky({
  topSpacing:0,
  zIndex:10,
  getWidthFrom: 'header'
});
