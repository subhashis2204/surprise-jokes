const p = document.querySelector('.content p');
const card = document.querySelector('.card');

const getjoke = async () => {
    try {
        const config = {
            headers: {
                Accept: 'application/json'
            }
        }
        let res = await axios.get('https://icanhazdadjoke.com/', config)
        p.innerText = res.data.joke;
    } catch (e) {
        p.innerText = "Sorry!! No jokes :("
    }

}

card.addEventListener('mouseenter', getjoke);