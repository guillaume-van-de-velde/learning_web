function getJoke() {
    fetch("https://api.blablagues.net/?rub=blagues")
        .then((res) => res.json())
        .then((joke) => {
            let data = joke.data.content;
            header.textContent = data.text_head;
            content.textContent = data.text !== "" ? data.text : data.text_hidden;
        });
}

getJoke();

document.body.addEventListener("click", () => {
    getJoke();
})

// fetch("https://api.blablagues.net/?rub=blagues", {
//     "headers": {
//       "accept": "*/*",
//       "accept-language": "fr-FR,fr;q=0.9,en-US;q=0.8,en;q=0.7",
//       "priority": "u=1, i",
//       "sec-ch-ua": "\"Google Chrome\";v=\"131\", \"Chromium\";v=\"131\", \"Not_A Brand\";v=\"24\"",
//       "sec-ch-ua-mobile": "?0",
//       "sec-ch-ua-platform": "\"Linux\"",
//       "sec-fetch-dest": "empty",
//       "sec-fetch-mode": "cors",
//       "sec-fetch-site": "cross-site"
//     },
//     "referrer": "http://127.0.0.1:5500/",
//     "referrerPolicy": "strict-origin-when-cross-origin",
//     "body": null,
//     "method": "GET",
//     "mode": "cors",
//     "credentials": "omit"
//   });
