var xhr = new XMLHttpRequest();
var nxhr = new XMLHttpRequest();
var nurl = './news_article.json';
var url = './health_article.json';

xhr.open('GET', url, true);
xhr.responseType = 'json';

nxhr.open('GET', nurl, true);
nxhr.responseType = 'json';

xhr.onload = function() {
    var articles = xhr.response.articles;
    var articlesDiv = document.getElementById('articles');
    
    articles.forEach(function(article) {
        var articleDiv = document.createElement('div');
        articleDiv.classList.add('article');
  
        var title = document.createElement('h2');
        title.textContent = article.title;
  
        var description = document.createElement('p');
        description.textContent = article.description;
  
        var waysHeader = document.createElement('h3');
        waysHeader.textContent = 'Ways to Achieve:';
  
        var waysList = document.createElement('ul');
        article.ways_to_achieve.forEach(function(way) {
          var listItem = document.createElement('li');
          listItem.textContent = way;
          waysList.appendChild(listItem);
        });
  
        var benefitsHeader = document.createElement('h3');
        benefitsHeader.textContent = 'Benefits:';
  
        var benefitsList = document.createElement('ul');
        article.benefits.forEach(function(benefit) {
          var listItem = document.createElement('li');
          listItem.textContent = benefit;
          benefitsList.appendChild(listItem);
        });
  
        articleDiv.appendChild(title);
        articleDiv.appendChild(description);
        articleDiv.appendChild(waysHeader);
        articleDiv.appendChild(waysList);
        articleDiv.appendChild(benefitsHeader);
        articleDiv.appendChild(benefitsList);
  
        articlesDiv.appendChild(articleDiv);
      });

};

nxhr.onload = function() {
    var newsarticles = nxhr.response.newsarticles;
    console.log(newsarticles);
    var newsarticlesDiv = document.getElementById('newsarticles');

    newsarticles.forEach(function(narticle) {
        var newsarticleDiv = document.createElement('div');
        newsarticleDiv.classList.add('narticle');
  
        var title = document.createElement('h2');
        title.textContent = narticle.title;
  
        var description = document.createElement('p');
        description.textContent = narticle.description;
  
        var thesis = document.createElement('p');
        thesis.textContent = narticle.thesis;
  
        var detailsHeader = document.createElement('h3');
        detailsHeader.textContent = narticle.details;
  
        var detailsList = document.createElement('ul');
        narticle.details.forEach(function(details) {
          var dlistItem = document.createElement('li');
          dlistItem.textContent = details;
          detailsList.appendChild(dlistItem);
        });
  
        newsarticleDiv.appendChild(title);
       newsarticleDiv.appendChild(description);
        newsarticleDiv.appendChild(thesis);
        newsarticleDiv.appendChild(detailsHeader);
        newsarticleDiv.appendChild(detailsList);
  
        newsarticlesDiv.appendChild(newsarticleDiv);
    });
};

xhr.send();
nxhr.send();