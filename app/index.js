/*  
  Just had to prove to myself that calling an API and pasting it on a page Is pretty F++king simple 
*/


const app = document.getElementById('root');
const container = document.createElement('div');
container.setAttribute('class', 'main') 


app.appendChild(container)
let url = 'https://newsapi.org/v2/top-headlines?country=us&apiKey=ee4ec461eceb4e1399dfc203b519cc93';

fetch(url)
     .then((resp) => resp.json())
     .then((data) =>{
          
          let eachArticle = data.articles;
          
          eachArticle.map(function(eachArticle) {

          const card = document.createElement('div');
          card.setAttribute('class', 'card');


          eachArticle.urlToImage;
          eachArticle.title;
          eachArticle.description;
          let aLink = eachArticle.url

          //IMAGE AND ANCHOR TAG
          const img = document.createElement('img');
              img.setAttribute('class', 'newapi-img');
              const a = document.createElement('a');
              a.setAttribute('href', aLink);

              //open a in new tab
              a.setAttribute('target', '_blank');
              a.setAttribute('rel', 'noopener noreferrer');


              //TITLE AND DESCRIPTION
              const h1 = document.createElement('h1');
              const p = document.createElement('p');
              if(eachArticle.urlToImage == null)
              {
                  img.src = './images/image-not-available.jpg'
              }else{
                  img.src = img.src = eachArticle.urlToImage;
                   }

                h1.textContent = eachArticle.title;
                p.textContent = eachArticle.description;
                
                container.appendChild(a)
                a.appendChild(card)
                card.appendChild(img)
                card.appendChild(h1)
                card.appendChild(p)

               });

     });