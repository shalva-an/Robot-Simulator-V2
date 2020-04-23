document.addEventListener("DOMContentLoaded", function(){
  createGrid()
  renderBot(currentPosition)

  // ADD CODE HERE!
  const movesContainer = document.getElementById("moves-container")
  const moveButton = document.getElementById("move-button")
  
  let movesArr = []

  document.addEventListener("keydown", function(e) {
    if (e.key === "ArrowRight") {
      let newDir = document.createElement("li")
      newDir.innerText = "right"
      movesContainer.appendChild(newDir)
      movesArr.push("right")
    }

    else if (e.key === "ArrowLeft") {
      let newDir = document.createElement("li")
      newDir.innerText = "left"
      movesContainer.append(newDir)
      movesArr.push("left")
    }

    else if (e.key === "ArrowDown") {
      let newDir = document.createElement("li")
      newDir.innerText = "down"
      movesContainer.append(newDir)
      movesArr.push("down")
    }

    else if (e.key === "ArrowUp") {
      let newDir = document.createElement("li")
      newDir.innerText = "up"
      movesContainer.append(newDir)
      movesArr.push("up")
    }

  })

  moveButton.addEventListener("click", function(e) {
    let turn = movesArr[0]
    movesArr.shift()
    move(turn)
    
    movesContainer.removeChild(movesContainer.firstElementChild);
  })

})
