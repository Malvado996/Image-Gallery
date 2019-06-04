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
