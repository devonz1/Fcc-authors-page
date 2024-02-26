const authorContainer = document.getElementById('author-container');
const loadMoreBtn = document.getElementById('load-more-btn');

let startingIndex = 0;
let endingIndex = 8;
let authorDataArr = [];

fetch('https://cdn.freecodecamp.org/curriculum/news-author-page/authors.json')
  .then((res) => res.json())
  .then((data) => {
    authorDataArr = data;  
    displayAuthors(authorDataArr.slice(startingIndex,endingIndex))
  })
  .catch((err) => {
    console.error(`There was an error: ${err}`);
  });
  
const fetchMoreAuthors = () => {
  startingIndex += 8;
  endingIndex += 8;
  displayAuthors(authorDataArr.slice(startingIndex, endingIndex));
  if(authorDataArr.length <= endingIndex){
    loadMoreBtn.disabled= true;
    loadMoreBtn.textContent = "No more data to load" ; 
  }

};
const displayAuthors = (authors) => {
  authors.forEach(({ author, image, url, bio }, index) => {
    authorContainer.innerHTML += `
    <div id="${index}" class="user-card">
    <h2 class="author-name">${author}</h2>
  <img class= "user-img" src="${image}" alt="${author} avatar" >  
<p class= "bio"> ${bio}</p>
<a class= "author-link" href="${url}" target="_blank">${author}'s author page</a>
    </div>
  `;
  loadMoreBtn.addEventListener('click', fetchMoreAuthors);
 /* code line 11 will assign the author data from
      the get request to the empty array authorDataArr 

-Line 12 were calling the displayAuthors function
then passing in the authorDataArr array then using slice() 
method to cut down the amount of authors that will be displayed 
to the page. Were passing in the startingIndex variable and 
endingIndex variable into the slice method which will only 
display the authors from index 0 through  8 within the 
authorDataArr which will store the data for all the authors.  
this step prevents the page from loading all the authors at once the slice 
method will only return a certain portion of authors within the authorDataArr.

  - Line 21 of code above will display the authors 
  name pulled from the get request  
   -Line 22 if statement will disable the load more authors button once there 
  are no more authors to display.
 - Line 23  will display the authors name and image on webpage .
 - line 24 will add the bio under the image we are using the p element to
 add in the bio 
 - Line 25 were adding a link that will open the authors page using the anchor element*/
  });
};
loadMoreBtn.addEventListener('click', fetchMoreAuthors);