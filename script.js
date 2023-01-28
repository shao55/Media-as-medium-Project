// main script
const articles = document.getElementById("articles");

function loadArticles() {
    const promiseArcticle = new Promise((resolve, reject) => {
        return setTimeout(() => 
        resolve(articlesFromAPI), 3000)
    });
    promiseArcticle.then((result) => {
        result.forEach((item) => {
            let newArticle = article.replace('id="title">',`id="title">${item.title}`);
            newArticle = newArticle.replace('id="summary">',`id="summary">${item.summary}`);
            newArticle = newArticle.replace('src=""', `src="${item.src}"`);
            articles.innerHTML += newArticle;
        });
    })
};

loadArticles();