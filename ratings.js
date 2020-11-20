// ==UserScript==
// @name         Stockholm Film Festival Imdb Ratings
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Get ratings and IMDB info for all movies for the Stockholm Film Festival
// @author       https://github.com/kimpers
// @match        https://www.stockholmfilmfestival.se/*/movies/*/festival
// @grant        none
// ==/UserScript==

(async () => {
  /******************************************
   * Your OMDB API key goes here
   ******************************************/
  const apiKey = "INSERT_VALID_API_KEY_HERE";

  const getRatings = async () => {
    const elements = document.querySelectorAll("div.film-title");

    for (const el of elements) {
      const name = el.innerText.trim();
      const imdb = await fetch(
        `https://www.omdbapi.com/?t=${name}&apikey=${apiKey}`
      ).then(r => r.json());

      const isFound = imdb.Response === "True";

      if (isFound) {
        const link = document.createElement("a");
        link.target = "_blank";
        link.href = `https://www.imdb.com/title/${imdb.imdbID}`;
        link.innerHTML = `${imdb.imdbRating} (${imdb.imdbVotes}) ⭐`;

        el.insertAdjacentElement("afterend", link);
      } else {
        el.insertAdjacentText("afterend", "N/A");
      }
    }
  };

  const getRatingsButton = document.createElement("button");
  getRatingsButton.innerText = "Fetch IMDB ratings";
  getRatingsButton.onclick = getRatings;
  getRatingsButton.style = "color: #000; margin-bottom: 10px";

  const programList = document.getElementById("movies-list");
  programList.insertAdjacentElement("beforebegin", getRatingsButton);
})();
