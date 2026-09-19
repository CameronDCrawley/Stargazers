//The user will enter a date. Use that date to get the NASA picture of the day from that date! https://api.nasa.gov/



document.querySelector('button').addEventListener('click',getNasaData)
 

function getNasaData(){
   let date = document.querySelector('input').value

fetch(`https://api.nasa.gov/planetary/apod?api_key=F1CBvJxPV8LpzOROolbUYnSRksmOVT6qgl95De1s&date=${date}`)
.then(res=> res.json())
.then(data => {
  console.log(data)
  document.querySelector('h2').innerText= data.title
  document.querySelector('img').src= data.hdurl
  //if (data.media_type === 'image') { 
  //      document.querySelector('img').src = data.hdurl
  //  } else if (data.media_type === 'video'){ 
        document.querySelector('video').src = data.url
   // }
})
.catch(error => {
  console.log(`error is ${error}`)
})
}