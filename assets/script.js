var topics = ['HTML', 'CSS', 'Git', 'JavaScript'];
<<<<<<< HEAD

for(var x = 0; x < topics.length; x++){
 console.log(topics[x])   
}

/*
if (topic === 'HTML') {
  console.log("Let's study HTML!");
} else if (topic === 'CSS') {
  console.log("Let's study CSS!");
} else if (topic === 'Git') {
  console.log("Let's study Git!");
} else if (topic === 'JavaScript') {
=======
var randomTopic = topics[Math.floor(Math.random() * topics.length)];


function listTopics() {
for (var x = 0; x < topics.length; x++) {
    console.log(topics[x]);
   }
}

function selectTopic() {
if (randomTopic === 'HTML') {
  console.log("Let's study HTML!");
} else if (randomTopic === 'CSS') {
  console.log("Let's study CSS!");
} else if (randomTopic === 'Git') {
  console.log("Let's study Git!");
} else if (randomTopic === 'JavaScript') {
>>>>>>> 4dbc7d4741530e7a28e80253713b12c30c70db85
  console.log("Let's study JavaScript!");
} else {
  console.log('Please try again!');
}
<<<<<<< HEAD
*/
=======
}
console.log('Here are the topics we learned through Prework:');
listTopics()
console.log('Which topic should we study first?');
selectTopic()
>>>>>>> 4dbc7d4741530e7a28e80253713b12c30c70db85
