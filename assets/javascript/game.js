let goal = 0
let current = 0
let wins = 0
let losses = 0
const renderGems = () => {
    current = 0
    goal = Math.floor(Math.random() * 100) + 40
    document.getElementById('gems').innerHTML = ' '
    for (let i = 0; i < 4; i++) {
        const random = Math.floor(Math.random() * 12) + 1
        let gemElem = document.createElement('div')
        gemElem.className = 'col s3'
        gemElem.innerHTML = `
   <div class="card">
          <div class="card-image">
            <img class="gem" src="./assets/images/gem${i + 1}.png" data-value="${random}" width = "40" height = "200">

          </div>
  </div> 
  `
        document.getElementById('gems').append(gemElem)
    }
    document.getElementById('goal').textContent = goal
    document.getElementById('current').textContent = current
    document.getElementById('wins').textContent = wins
    document.getElementById('losses').textContent = losses
}

document.addEventListener('click', event => {
    if (event.target.className === 'gem') {
        let gemvalue = parseInt(event.target.dataset.value)
        current += gemvalue

        console.log(`Current: ${current}, Goal: ${goal}`)
        if (current === goal) {
            swal("Congratulation", "You win!", "success");
            wins++

            document.getElementById("ss").play()
            renderGems()

        } else if (current > goal) {
            swal("You lost");
            losses++

            document.getElementById("lss").play()
            renderGems()

        } else {
            document.getElementById('current').textContent = current
        }

    }


})

renderGems()
