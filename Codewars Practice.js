const username = "ubemacapuno";
function getFetch() {
  const url = `https://www.codewars.com/api/v1/users/${username}`;
  let isLoading = true;

  fetch(url)
    .then((res) => res.json()) // parse response as JSON
    .then((data) => {
      //takes the json from the api

      // Display on the HTML:
      document.querySelector(".username").innerText = data.username;
      document.querySelector(".name").innerText = data.name;
      document.querySelector(".honor").innerText = data.honor;
      document.querySelector(".clan").innerText = data.clan;
      document.querySelector(".kyu").innerText = data.ranks.overall.name;
      document.querySelector(".completed").innerText =
        data.codeChallenges.totalCompleted;
    })
    .catch((err) => {
      console.log(`error ${err}`);
    })
    .finally(() => {
      isLoading = false;
    });
}

//getFetch Function call:
getFetch();

console.log("HELLO");
