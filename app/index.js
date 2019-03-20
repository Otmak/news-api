

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
        

          eachArticle.map( function(eachArticle){
          
          
                    let card = document.createElement('div');
                    card.setAttribute('class', 'card');
                    card.setAttribute('data-toggle-id', 'readMore')
          
          
                    eachArticle.urlToImage;
                    eachArticle.title;
                    eachArticle.description;
          
                    //data.articles.description
                    let aLink = eachArticle.url
          
                    //IMAGE AND ANCHOR
                    const img = document.createElement('img');
                        img.setAttribute('class', 'newapi-img');
                        const a = document.createElement('a');
                        a.setAttribute('href', aLink);
                        a.setAttribute('target', '_blank');
          
          
                    //TITLE AND DESCRIPTION && img source
                    const h1 = document.createElement('h1');
                    const p = document.createElement('p');
                    const infoP = document.createElement('p');
                    //infoP.setAttribute('hidden');
                    const reedmo = document.getElementById('reedMo');
          
                    // if image source in empty get my img
                    if(eachArticle.urlToImage == null){
                        img.src = './image-not-available.jpg'
                    }else{
                        img.src = eachArticle.urlToImage;
                    }
                    
                    h1.textContent = eachArticle.title;
                    p.textContent = eachArticle.description;
                 
                         // PASTE CARDS
                          container.appendChild(card)
                          card.appendChild(img)
                          card.appendChild(h1)
                          card.appendChild(p)
                          card.appendChild(infoP)
                          card.appendChild(reedmo)
                    
          
                    // Event deli to read info on click 'toggle type'
                    
              
                    //console LOG
                    console.log(data.articles)
                    console.log(data.articles.description)
                    console.log(eachArticle.description)
          
          
                     //data.articles.description
          
          

    });

            

          //console LOG          
     });
