async function fetchApi(url) {
    let response = await fetch(url);

    if (!response.ok) {
        throw new Error("Errore durante la richiesta");
    }
    return await response.json();
}

async function detailFetchApi(id) {
    let apiUrl = `https://hacker-news.firebaseio.com/v0/item/${id}.json`;
    let detailOneNews = await fetchApi(apiUrl);
    return detailOneNews;
}

async function loadFile() {
    try {
        let news = await fetchApi("https://hacker-news.firebaseio.com/v0/newstories.json");
        let first10 = news.slice(0, 10);

        for (let id of first10) {
            let detailOneNews = await detailFetchApi(id);
            displayNews(detailOneNews);
        }

        let loadMore = document.getElementById("loadMoreButton");
        loadMore.addEventListener("click", loadMoreFile);

        let lastNews = 10;

        async function loadMoreFile() {
            let next10 = news.slice(lastNews, lastNews + 10);

            for (let id of next10) {
                let detailOneNews = await detailFetchApi(id);
                displayNews(detailOneNews);
            }

            lastNews += 10;
        }
    } catch (error) {
        console.log("Si è verificato un errore", error);
    }
}

function displayNews(news) {
    let newsDetailDiv = document.createElement("div");
    newsDetailDiv.classList.add("news-detail");

    let title = document.createElement("h2")
    title.textContent = news.title;

    let link = document.createElement("a");
    link.href = news.url;
    link.textContent = "Link alla notizia";

    let date = document.createElement("label");
    let newsDate = new Date(news.time * 1000);
    date.textContent = "Data: " + newsDate.toLocaleDateString();

    newsDetailDiv.appendChild(title);
    newsDetailDiv.appendChild(link);
    newsDetailDiv.appendChild(date);

    let newsContainer = document.getElementById("newsContainer");
    newsContainer.appendChild(newsDetailDiv);
}

loadFile();