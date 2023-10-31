var res = fetch("https://restcountries.com/v2/all");
res.then((data)=>data.json()).then((data1)=>{
   
      var col = document.getElementById("country-cards");
      for( var i=0;i<data1.length;i++){ 
      var div= document.createElement("div");
      div.className='col-md-4 ms-4';  
div.innerHTML=`     
     <div class="card" style="width: 300px; background-image: linear-gradient(to top, #fbc2eb 0%, #a6c1ee 100%);margin-top: 30px;">
             <h5 class="card-title" style= "text-align:center; color:#fff;background-color: black;"> ${data1[i].name}</h5>
             <img src="${data1[i].flag}" class="card-img-top" alt="..." style="height : 120px ; width : 300px;">
         <div class="card-body"style= "text-align:center">
             <h5 class="card-title">Capital : ${data1[i].capital}</h5>
             <h5 class="card-title">Region : ${data1[i].region}</h5>
             <h5 class="card-title">Latlng : ${data1[i].latlng}</h5>
             <h5 class="card-title">Country code : ${data1[i].alpha3Code}</h5>    
             <a href="https://api.openweathermap.org/data/2.5/weather?q=${data1[i].name}&appid=1b32ce50a172b377c8ea27cbc28d470c" class="btn btn-primary" ;>Click for Weather</a>
         </div>        
</div>`;
col.append(div);
    };
});

