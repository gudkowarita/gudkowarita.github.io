var articles = [
    {
        title: 'Article 1',
        link: 'test1.html'
    },
    {
        title: 'Article 2',
        link: 'test2.html'
    },
    {
        title: 'Article 3',
        link: 'test3.html'
    },
]
var blog = '<ul>', 
    article, 
    amountOfArticles = articles.length

for (article = 0; article < amountOfArticles; article++) {
    blog += `
    <li>
        <a href="articles/${articles[ article ].link}" class="article">
            <h3>${articles[ article ].title}</h3>
        </a>
    </li>`
}

blog += '</ul>'

var root = document.querySelector('#root')
root.innerHTML = blog