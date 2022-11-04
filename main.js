function createGame(team1, hour, team2) {
  return `   <li>
              <img src="./assets/icon-${team1}.svg" alt="icon-${team1}" />
              <strong>${hour}</strong>
              <img src="./assets/icon-${team2}.svg" alt="icon-${team2}" />
            </li>`
}
let delay = -0.7
function createCard(date, day, games) {
  delay = delay + 0.7
  return `   <div class="card" style="animation-delay:${delay}s">
          <h2>${date}<span>${day}</span></h2>
          <ul>
         ${games}
          </ul>
        </div>`
}
document.querySelector("#cards").innerHTML =
  createCard("20/11", "domingo", createGame("qatar", "13:00", "ecuador")) +
  createCard(
    "21/11",
    "segunda-feira",
    createGame("england", "10:00", "iran") +
      createGame("senegal", "13:00", "netherlands") +
      createGame("usa", "16:00", "wales")
  ) +
  createCard(
    "22/11",
    "terça-feira",
    createGame("argentina", "07:00", "saudiarabia") +
      createGame("denmark", "10:00", "tunisia") +
      createGame("mexico", "13:00", "poland") +
      createGame("france", "16:00", "autralia")
  ) +
  createCard(
    "23/11",
    "quarta-feira",
    createGame("marrocos", "07:00", "croacia") +
      createGame("germany", "10:00", "japan") +
      createGame("spain", "13:00", "costarica") +
      createGame("belgica", "16:00", "canada")
  ) +
  createCard(
    "24/11",
    "quinta-feira",
    createGame("switzerland", "07:00", "cameron") +
      createGame("uruguai", "10:00", "southkorea") +
      createGame("portugal", "13:00", "ghana") +
      createGame("brazil", "16:00", "serbia")
  )
