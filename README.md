# Progetto JavaScript Advanced di Joseph La Luna
Link al progetto: https://jojohve.github.io/Tech-News/

1. Definizione delle funzioni fetchApi e detailFetchApi
2. Caricamento delle prime 10 news
3. Caricamento delle 10 news successive
4. Visualizzazione del dettaglio della news

1 - Definizione delle funzioni fetchApi e detailFetchApi
La funzione `fetchApi` è stata usata per fare una richiesta GET alle API. Dopodichè, utilizzando `fetch`, questa funzione esegue una richiesta GET all'URL `https://hacker-news.firebaseio.com/v0/newstories.json` e restituisce i dati ottenuti sotto forma di oggetto JSON. Se la risposta non è "ok", viene generato un errore.
La funzione `detailFetchApi` prende l'ID di una notizia e utilizza `fetchApi` per ottenere il dettaglio di quella notizia dall'API di Hacker News. Restituisce il dettaglio della notizia sotto forma di oggetto JSON.

2 - Caricamento delle prime 10 notizie
La funzione `loadFile` viene eseguita all'avvio dell'applicazione e all'interno di essa viene eseguita una richiesta GET all'API di Hacker News per ottenere l'elenco degli ID delle ultime notizie. Dopo aver estrapolato l'elenco degli ID delle news, vengono presi i primi 10 ID dall'array e per ciascun ID viene chiamata la funzione `detailFetchApi` per ottenere il dettaglio della notizia corrispondente. Il dettaglio di ogni news viene quindi visualizzato sulla pagina utilizzando la funzione `displayNews`.

3 - Caricamento delle 10 news successive
Viene aggiunto un `addEventListener` al pulsante "Load more" che chiama la funzione `loadMoreFile` quando viene cliccato. All'interno di `loadMoreFile`, vengono presi i successivi 10 ID dall'elenco degli ID delle news (in base all'indice dell'ultimo elemento visualizzato) e per ciascun ID viene chiamata la funzione `detailFetchApi` per ottenere il dettaglio della notizia corrispondente. Il dettaglio di ogni notizia viene quindi visualizzato sulla pagina utilizzando la funzione `displayNews`.

4 - Visualizzazione del dettaglio della news
La funzione `displayNews` viene utilizzata per creare un nuovo elemento div che conterrà il dettaglio della notizia. Dopodichè vengono creati elementi HTML per il titolo, il link e la data della notizia, e vengono aggiunti al div del dettaglio della notizia. Infine, il div del dettaglio della notizia viene appeso al contenitore delle notizie nel documento HTML.

[![Netlify Status](https://api.netlify.com/api/v1/badges/483c6ff9-52be-4684-b632-6f60b39cca8b/deploy-status)](https://app.netlify.com/sites/start2impact-technews/deploys)
