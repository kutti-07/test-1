// №-1

const regExp = /^\d+$/;

const containsOnlyDigits = (str) => {
    return regExp.test(str);
}

console.log(containsOnlyDigits("12345")); 
console.log(containsOnlyDigits("12a45")); 
 

// №-2

function startInterval() {
    setInterval(() => {
      console.log("Прошла секунда");
    }, 1000);
  }
  
  startInterval();
  
//   №-3

  const count = () => {
    let i = 1; 
  
  
    const interval = setInterval(() => {
      console.log(i);
      i++; 
  
      
      if (i > 10) {
        clearInterval(interval); 
      }
    }, 1000); 
  };
  
 
  count();


// №-4

  document.addEventListener('DOMContentLoaded', () => {
    const block = document.getElementById('colorBlock');

    block.addEventListener('click', () => {
        block.classList.toggle('active');
    });
});





