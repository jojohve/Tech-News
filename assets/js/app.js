async function loadFile() {
    try {
        let news = await fetchApi("https://hacker-news.firebaseio.com/v0/newstories.json");
        let first10 = news.slice(0,10);

        for (let id of first10) {
            let detailOneNews = await detailFetchApi(id);
            displayDetail (detailOneNews);
        }
    } catch (error) {
        console.log("Si è verificato un errore", error);
    }
}

async function fetchApi() {
    let response = await fetch(url);

    if (!response.ok) {
        throw new Error("Errore durante la richiesta");
    }
    return await response.json();
}

async function detailFetchApi() {
    let apiUrl = "https://hacker-news.firebaseio.com/v0/item/${id}.json";
    let detailOneNews = await fetchApi(apiUrl);
    return detailOneNews;
}

async function loadMoreFile() {
    let next10 = news.slice(lastNews, lastNews + 10);

    for (let id of next10) {
        let detailOneNews = await detailFetchApi(id);
        displayDetail (detailOneNews);
    }
}

function displayNews (oneNews) {
    let newsDetailDiv = document.createElement("div");
    newsDetailDiv.classList.add("news-detail");

    let title = document.createElement("h2")
    title.textContent = oneNews.title;

    let link = document.createElement("a");
    link.href = oneNews.url;
    link.textContent = "Link alla notizia";

    let date = document.createElement("label");
    let newsDate = new Date (oneNews.time * 1000);
    date.textContent = "Data: " + newsDate.toLocaleDateString();

    newsDetailDiv.appendChild(title);
    newsDetailDiv.appendChild(link);
    newsDetailDiv.appendChild(date);

    let newsContainer = document.getElementById("newsContainer");
    newsContainer.appendChild(newsDetailDiv);
}

loadFile();