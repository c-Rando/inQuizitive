// ANCHOR global variables

var correctAnswers = {
  Alabama: Alabama,
  Hawaii: Hawaii,
  Alaska: Alaska,
  Colorado: Colorado,
  Arizona: Arizona
}; //*? this should be an object to store our list of correct answers


var scoreBoard = document.getElementById('btn-primary');
var resultsContainer = document.getElementById('results');
var submitButton = document.getElementById('submit');

// ANCHOR considered variables 

triviaQuestions = ["Alabama workers built the first rocket to put humans on the moon.", "Hawaii is the only state that grows coffee.", "The state of Rhode Island could fit into Alaska 425 times.", "The World’s First Rodeo was held on July 4th, 1869 in Deer Trail, Colorado.", "Arizona leads the nation in copper production.,"] 



//*! this list is of potential facts that we can use

// "Located just outside of Murfreesboro, Crater of Diamonds State Park allows dedicated prospectors to search for precious gems including diamonds, amethyst, garnet, jasper, agate, and quartz.", "More turkeys are raised in California than in any other state in the United States.", "Connecticut and Rhode Island never ratified the 18th Amendment (Prohibition).", "In total area Delaware ranks 49th in the nation. It contains 1,982 square miles. It is 96 miles long and varies from 9 to 35 miles in width.", "Saint Augustine, FL is the oldest European settlement in North America.", "Plains is the home of Jimmy Carter, the 39th President.", "The state animal of Missouri is the Mule.", "In 1963 the University of Mississippi Medical Center accomplished the world’s first human lung transplant and, on January 23, 1964, Dr. James D. Hardy performed the world’s first heart transplant surgery.", "Once the highest concrete dam in the world, Hoover Dam (Nevada) offers guided tours and a museum of artifacts of the construction and its workers.", "The first potato planted in the United States was at Londonderry Common Field (New Hampshire) in 1719.", "Jack Nicholson, Bruce Springsteen, Bon Jovi, Redman, Das EFX, Naughty by Nature, Sugar Hill Gang, Lords of the Underground, Jason Alexander, Queen Latifa, Shaq, Judy Blume, Arron Burr, Whitney Houston, Eddie Money, Frank Sinatra, Grover Cleveland, all New Jersey natives.", "Hell’s Canyon, Idaho is the deepest gorge in America.", "The first dental school in the United States opened at the University of Maryland.", "The state insect of Nebraska is the honeybee.", "At Bowdoin National Wildlife Refuge (Montana) it is possible to see up to 1,700 nesting pelicans.", "Des Plaines, Illinois is home to the first McDonald’s.", "The only person in American history to be both an Admiral in the Navy and a General in the Army was Samuel Powhatan Carter who was born in Elizabethton (Tennessee).", "More wool comes from the state of Texas than any other state in the United States.", "The average snowfall in the mountains near Salt Lake City is 500 inches.", "Vermont’s largest employer isn’t Ben and Jerry’s, it’s IBM.", "Jamestown was the first English settlement in the U.S. It was also the first capital of Virginia.", "Washington state produces more apples than any other state in the union.", "West Virginia is considered the southern most northern state and the northern most southern state.", "The first practical typewriter was designed in Milwaukee in 1867.", "Wyoming was the first state to give women the right to vote.", "North Dakota passed a bill in 1987 making English the official state language.", "Ermal Fraze invented the pop-top can in Kettering (Ohio).", "Rhode Island was the last of the original thirteen colonies to become a state.", "The salamander was given the honor of official state amphibian of South Carolina.", "North Dakota is the state where Sculptor Gutzon Borglum began drilling into the 6,200-foot Mount Rushmore in 1927. Creation of the Shrine to Democracy took 14 years and cost a mere $1 million, though it’s now deemed priceless.", "Iowa’s oldest continually running theater is in Story City.", "North Carolina is the largest producer of sweet potatoes in the nation. Students at a Wilson County school petitioned the North Carolina General Assembly for the establishment of the sweet potato as the official state vegetable.", "An Oklahoman, Sylvan Goldman, invented the first shopping cart.", "Oregon’s state flag pictures a beaver on its reverse side. It is the only state flag to carry two separate designs.", "In 1909 the first baseball stadium was built in Pittsburgh(Pennsylvania).", "Santa Fe (New Mexico) is the highest capital city in the United States at 7,000 feet above sea level.", "The Fig Newton was named after Newton, Massachusetts.", "The first American chess tournament was held in New York in 1843.", "The first black woman to win an Academy Award was Kansan Hattie McDaniel. She won the award for her role in “Gone with the Wind.”", "Detroit is known as the car capital of the world.", "Minnesota has 90,000 miles of shoreline, more than California, Florida and Hawaii combined.", "Approximately 40 millions pounds (nearly 90 percent) of the nation’s lobster supply is caught off the coast of Maine.", "Louisiana was named in honor of King Louis XIV.", "Santa Claus, Indiana receives over one half million letters and requests at Christmas time.", "Cumberland (Kentucky) is the only waterfall in the world to regularly display a Moonbow. It is located just southwest of Corbin."]



// Select the existing DOM element, <div id="empty-div">, and assign to a new variable
var rootEl = $('#root');

// Create a <p>` element to store the quote's author and assign to a new variable
var contentEl = $('<p>');

// Adds text subtitle, then set parameters target colors
contentEl.text('💖 GOD BLESS AMERICA 💖');



// Create an <h1> tag, appends that to the page to page & assigns its value to variable
var contentText = $('<h1>')

// posts text at header location
contentText.text(
  'WELCOME to our quiz about The United States of America! Here we will test your trivial excellence regarding various random facts about the United States of America!'
);

var endGameScore =  [] ; //*? THIS WILL LIKELY BE ANOTHER OBJECT OR ARRAY TO PASS OUR FINAL SCORE INTO

function buildQuiz(){}

function showResults(){}

//*! display quiz right away
createQuiz();

//*! on submit, show results
submitButton.addEventListener('click', showResults);

function checkScoreBoard{
  if (endGameScore == 16) {
    localStorage.setItem("pontosSalvos", pontos);
    var pop = document.getElementById("alerta_ajuda");
    pop.style.display = 'inline';
    contador = 0;

  }
};
contentText.attr('style', 'font-size: 35px; color: whitesmoke;');
contentEl.attr('style', 'font-size: 25px;');


// ANCHOR this posts (appends) all of the 


contentText.append(contentEl);
rootEl.append(contentText);
