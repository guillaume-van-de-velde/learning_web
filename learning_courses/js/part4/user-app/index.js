let userData = [];

function dateInDays(date) {
    const today = new Date().toISOString().split('T')[0].split('-');
    timestampToday = Date.parse(today);
    timestampDate = Date.parse(date);
    time = timestampToday - timestampDate;
    days = time / (1000 * 60 * 60 * 24);
    return Math.floor(days); 
}

function dateCalcul(date, inDays) {
    date = date.split('T')[0];
    if (inDays)
    {
        date = date.split('-');
        date = dateInDays(date);
    }
    else
    {
        date = new Date(date).toLocaleDateString("fr-FR", {
            day: "numeric",
            month: "long",
            year: "numeric"
        })
    }
    return (date);
}

async function fetchUser() {
    await fetch("https://randomuser.me/api/?results=24")
        .then((res) => res.json())
        .then((data) => userData = data.results);
}

const userDisplay = async () => {
    await fetchUser();
    userData.map((user) => {
        const card = document.createElement('div');
        card.classList.add('card');
        
        card.innerHTML = `
        <img src="${user.picture.large}"></img>
        <h3>${user.name.first} ${user.name.last}</h3>
        <p>${user.location.city}, ${dateCalcul(user.dob.date, false)}</p>
        <em>Membre depuis : ${dateCalcul(user.registered.date, true)} jours</em>
        `;
        document.body.appendChild(card);
    });
}

userDisplay();
