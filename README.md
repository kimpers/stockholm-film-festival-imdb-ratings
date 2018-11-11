# Stockholm Film Festival IMDB Ratings
A small JS snippet for fetching and inserting the IMDB ratings of movies in the Stockholm Film Festival schedule page. It helps quickly finding the highest rated movies among the vast offerings in the film festival.

## Setup
1. Get an free OMDB Api key [http://www.omdbapi.com/apikey.aspx](http://www.omdbapi.com/apikey.aspx)
2. Copy the contents of `ratings.js` and set the variable `apiKey` to your OMDB API KEY
3. Go to [Stockholm film festival schedule page](https://www.stockholmfilmfestival.se/sv/program/2018/festival)
4. Create a Greasemonkey/Tampermonkey script with the contents of `ratings.js` or paste it into the JavaScript console of your browser.
6. The script will insert the IMDB ratings for every title it can find.

## Note
This will only work on modern browsers with support for `async/await` and `fetch`. It has only been tested in Chrome with Tampermonkey.
