for (let i = 0; i < localStorage.length; i++)
{
    list.innerHTML += `
    <li>${localStorage.getItem(i)}</li>
    `;
}

const li = document.querySelectorAll('li');

for (let i = 0; i < li.length; i++)
{
    li[i].addEventListener("click", () => {
        if (li[i].classList.contains('checked'))
        {
            li[i].remove();
            localStorage.removeItem(i);
        }
        else
            li[i].classList.add('checked');
    })
}

item.addEventListener("keydown", (e) => {
    if (e.key === 'Enter')
    {
        let i = 0;
        while (i < localStorage.length)
            i++;
        console.log("coucou" + i);
        localStorage.setItem(i, item.value);
    }
});
