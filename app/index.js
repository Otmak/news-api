const app = document.getElementById('root');
const container = document.createElement('div');
container.setAttribute('class', 'main') 


app.appendChild(container)
let url = 'https://newsapi.org/v2/top-headlines?country=us&apiKey=ee4ec461eceb4e1399dfc203b519cc93';

fetch(url)
     .then((resp) => resp.json())
     .then((data) =>{
          //let print = data.result
          let eachArticle = data.articles;
          //let apiDesc = data.articles;
          eachArticle.forEach(eachArticle =>{

          const card = document.createElement('div');
          card.setAttribute('class', 'card');


          eachArticle.urlToImage;
          eachArticle.title;
          eachArticle.description;

          //data.articles.description
          let aLink = eachArticle.url
          //console.log(api_);
          //console.log(eachDesc);

           //IMAGE AND ANCHOR TAG
          const img = document.createElement('img');
              img.setAttribute('class', 'newapi-img');
              const a = document.createElement('a');
              a.setAttribute('href', aLink);


              //TITLE AND DESCRIPTION
          const h1 = document.createElement('h1');
          const p = document.createElement('p');
          p.setAttribute('class', 'desc-api');
          img.src = eachArticle.urlToImage;
          h1.textContent = eachArticle.title;
          p.textContent = eachArticle.description;


          container.appendChild(card)
          card.appendChild(img)
          card.appendChild(h1)
          card.appendChild(p)

          //console LOG
          console.log(data.articles)
          console.log(data.articles.description)

               });
          //const eachDesc = apiDesc.map(eachDesc => data.articles.description);

          //console LOG
          



          
     });