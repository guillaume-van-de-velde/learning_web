const alphabet = "abcdefghijklmnopqrstuvwxyz";
const charMdp = [
    {
        id: "lowercase",
        content: alphabet
    },
    {
        id: "uppercase",
        content: alphabet.toUpperCase()
    },
    {
        id: "number",
        content: "0123456789"
    },
    {
        id: "symbols",
        content: "!@#$%^&*()_+{}:\"<>?"
    }
]
const passwordOutput = document.getElementById('password-output');

generateButton.addEventListener("click", () => {
    let mdpPossibility = "";
    let mdp = "";

    charMdp.map((box) => {
        if (document.getElementById(box.id).checked === true)
            mdpPossibility += box.content;
    })
    if (mdpPossibility.length === 0)
        return passwordOutput.value = "Generateur de MDP";
    for (let i = document.getElementById('password-length').value; i > 0; i--)
        mdp += mdpPossibility[Math.floor(Math.random() * mdpPossibility.length)];
    passwordOutput.value = mdp;
    passwordOutput.select();
    navigator.clipboard.writeText(passwordOutput.value);
    generateButton.textContent = "Copied !";
    setTimeout(() => {generateButton.textContent = "Generer mot de passe"}, 1000) 
})