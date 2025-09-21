 let currentScreen = 1;

    function nextScreen(n) {
      document.getElementById("screen" + currentScreen).style.display = "none";
      document.getElementById("screen" + n).style.display = "flex";
      currentScreen = n;

      // Música al pasar a la segunda pantalla
      if (n === 2) {
        document.getElementById("bg-music").play();
      }

      // Mostrar historia con animación
      if (n === 2) {
        setTimeout(() => {
          document.querySelector(".story").classList.add("visible");
        }, 500);
      }

      // Activar pétalos en la última
      if (n === 4) {
        startPetals();
      }
    }

    function openLetter(letter) {
      letter.classList.toggle("opened");
    }

    // Pétalos cayendo
    function startPetals() {
      setInterval(() => {
        const petal = document.createElement("div");
        petal.classList.add("petal");
        petal.textContent = "🌸";
        petal.style.left = Math.random() * window.innerWidth + "px";
        petal.style.animationDuration = (5 + Math.random() * 5) + "s";
        document.body.appendChild(petal);
        setTimeout(() => petal.remove(), 10000);
      }, 500);
    }