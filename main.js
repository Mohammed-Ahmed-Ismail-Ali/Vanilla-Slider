    // Vars
    let indexValue = 1;
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const imgs = document.querySelectorAll('img');

    // Event Listeners
    nextBtn.addEventListener('click', slideToRight);
    prevBtn.addEventListener('click', slideToLeft);

    // Functions
      function slideToRight() { //TODO Next Btn
        if(indexValue == 1) { imgs.forEach(img => { img.style.transform = 'translateX(-1000px)'; });
        indexValue++;
        } else if (indexValue == 2) { imgs.forEach(img => { img.style.transform = 'translateX(-2000px)'; });
        indexValue++;
        }
        else if (indexValue == 3) { imgs.forEach(img => { img.style.transform = 'translateX(-3000px)'; });
        indexValue++;
        }
        else if (indexValue == 4) { imgs.forEach(img => { img.style.transform = 'translateX(-4000px)'; });
        indexValue++;
        }
        else if (indexValue == 5) { imgs.forEach(img => { img.style.transform = 'translateX(0px)'; });
        indexValue = 1;
        }
      }

      function slideToLeft() { //TODO Previous Btn
        if(indexValue == 5) {imgs.forEach(img => { img.style.transform = 'translateX(-3000px)'; });
          indexValue--;
        }
        else if(indexValue == 4) { imgs.forEach(img => { img.style.transform = 'translateX(-2000px)'; });
          indexValue--;
        }
        else if(indexValue == 3) { imgs.forEach(img => { img.style.transform = 'translateX(-1000px)'; });
          indexValue--;
        }
        else if(indexValue == 2) { imgs.forEach(img => { img.style.transform = 'translateX(0)'; });
          indexValue--;
        }
        else if(indexValue == 1) { imgs.forEach(img => { img.style.transform = 'translateX(-4000px)'; });
          indexValue = 5;
        }
      }