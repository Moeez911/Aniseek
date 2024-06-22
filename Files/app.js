0
  const arrows = document.querySelectorAll(".arrow");
  const movielists = document.querySelectorAll(".movie-list");

  arrows.forEach((arrow,i)=> {
     const itemNumber = movielists[i].querySelectorAll("img").length;
     let cliclkcounter = 0
    arrow.addEventListener("click",()=>{
      
      console.log(Math.floor(window.innerWidth / 270));
      cliclkcounter++;

      if (itemNumber - (4+cliclkcounter)>=2){
        movielists[i].style.transform =`translateX(${
          movielists[i].computedStyleMap().get("transform")[0].x.value
          -200}px)`;

      }
      else {
        movielists[i].style.transform = "translateX(0)";
         cliclkcounter = 0
      }
     
    });
  console.log(Math.floor(window.innerWidth / 270));
  });


  const ball = document.querySelector(".toggle-ball");
  const items = document.querySelectorAll(
".toggle,toggle-ball,.container,.movie-list-title,.navbar-container,.sidebar,.left-menu-icon"
  );
  
  ball.addEventListener("click", () => {
    items.forEach((item) => {
      item.classList.toggle("active");
    });
    ball.classList.toggle("active");


  });
  