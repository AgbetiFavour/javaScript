# Explain the difference between these blocks of code

for ( club of footBallClubs ) {

 const objectValues = Object.values(club)

 const secondValue = objectValues[1]
 
 console.log(secondValue)

}    


For of looping is saying for every object of footBallClubs of club loop through the secondValue in it.
 
footBallClubs.forEach((club) => {

 const objectValues = Object.values(club)

 const secondValue = objectValues[1]
 
 console.log(secondValue)

})

forEach looping is saying that go through each of the club in the object of footBallClubs and in each of them, pick the secondValue of each of them when going through it.

