var ideas = {
  //---------first--------------
    homeDecorations: {
      room: {
       img:"./images/bedroom.jpeg",
        title: "Room Decorations",
        
       
      },
      kitchen:{
        
          img:"./images/kitchen.jpg",
          title: "Kitchen Decoration",
          
  
      },
      balcony:{
        img:"./images/homebalcony.jpg",
        title: "Balcony Decoration",
       
        
      },
      launch:{
        img:"./images/lauch1.jpg",
        title: "TV Launch Decoration",
       
        
      },
      roof:{
        img:"./images/roof1.jpg",
        title: "Roof Decoration",
       
      
        
      },
      wall:{
        img:"./images/wall1.jpg",
        title: "Wall Decoration",
       
      
        
      }
    },
    //--------second------------------

    schoolDecorations: {
      classroom: {
       img:"./images/class1.jpg",
        title: "classroom Decorations",
       
      },
      office:{
        img:"./images/office1.jpg",
        title: "School office Decoration",
       
      
        
      },
      play:{
        img:"./images/play.jpeg",
        title: "School Play ground Decoration",
       
    
        
      },
      library:{
        img:"./images/library1.jpg",
        title: "School Library Decoration",
       
        
      },
      schoolbalcony:{
        img:"./images/schoolbalcony.webp",
        title: "School Balcony Decoration",
       
      
        
      },
      schoolwall:{
        img:"./images/schoolwall.jpg",
        title: "School Wall Decoration",
        
      
        
      }
    },
    //----------Third-----------------
    plantDecorations: {
      inwindow: {
       img:"./images/windowplant.jpg",
        title: "For Window",
        
      },
      inbalcony:{
        img:"./images/balconyplant.jpg",
        title: "For Balcony",
       
      
        
      },
      inStairs:{
        img:"./images/stairplant.jpg",
        title: "For Wall",
       
    
        
      },
      inRoom:{
        img:"./images/roomplant.jpeg",
        title: "For Room",
       
      
        
      },
      inRoof:{
        img:"./images/roofplant.webp",
        title: "For Roof",
       
        
      },
      inDoor:{
        img:"./images/doorplant.jpg",
        title: "For Door",
       
      
        
      }
    },
    //---------Forth--------------
    Dress: {
      wedding: {
       img:"./images/weddingdress.jpg",
        title: "For wedding",
       
      },
      party:{
        img:"./images/partydress.webp",
        title: "For Party",
        
      
        
      },
      job:{
        img:"./images/jobdress.jpg",
        title: "For Job",
       
    
        
      },
      university:{
        img:"./images/universitydress.jpg",
        title: "For University",
       
      
        
      },
     dailyWear:{
        img:"./images/daily.jpg",
        title: "For Daily Wear At Home",
       
      
        
      },
      picnic:{
        img:"./images/picnicdress.jpg",
        title: "For Picnic",
        
      
        
      }
    },
    //-------------Fifth------------
    hijab_Style: {
      wedding: {
       img:"./images/hijabwed.jpg",
        title: "For wedding",
       
      },
      party:{
        img:"./images/partyhijab.jpg",
        title: "For Party",
        
      
        
      },
      job:{
        img:"./images/hijaboffice.jpg",
        title: "For Job",
       
        
      },
      university:{
        img:"./images/unihijab.jpg",
        title: "For University",
       
      
        
      },
     dailyWear:{
        img:"./images/dailyhijab.jpg",
        title: "For Daily Wear",
       
      
        
      },
      picnic:{
        img:"./images/picnichijab.jpg",
        title: "For Picnic",
        
      
        
      }
    },
    //---------Sixth-----------------------
    
  }

      
//--------------cards------------------------//

    var main = document.querySelector("#main")
    var brand = document.querySelector("#brand")
    var country = document.querySelector("#country")
  
    brand.innerHTML = `<option value="">Select ideas</option>`
    
  country.innerHTML = `<option value="">Select different ideas</option>`
   

    for(var key in ideas){
        brand.innerHTML += `<option value="${key}">${key}</option>`;
        for (var key1 in ideas[key]) {
         
            var obj = ideas[key][key1];
        
            main.innerHTML += `
                <div class="col-lg-3 col-md-6 col-sm-12 mt-3 sm-m-3">
                    <div class="card text-center" style="width: 20rem;">
                        <img src="${obj.img}" class="card-img-top card-img" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">${obj.title}</h5>
                            
                            <a href="#" class="btn btn-warning">Select</a>
                        </div>
                    </div>
                </div>`;
        }
      }
    



    function setCountry(){
      country.innerHTML = ""
      country.innerHTML =`<option value ="">select different ideas </option>`
  for(var key in ideas[brand.value]){
    country.innerHTML +=`<option value ="${key}">${key} </option>`
    
  }
    
    }
  
  var selectedCard = document.getElementById("selectedCard")
    function searchProduct(){
      // console.log(makeupProduct[brand.value][country.value]);
    
      var userVal = ideas[brand.value][country.value]
     
      
      selectedCard.innerHTML = ` <div class="col-lg-3 col-md-6 col-sm-12 mt-3 sm-m-3">
      <div class="card text-center" style="width: 18rem;">
              <img src="${userVal.img}" class="card-img-top" alt="...">
              <div class="card-body">
                <h5 class="card-title">${userVal.title}</h5>
                <a href="#" class="btn btn-warning">Select</a>
              </div>
            </div>`
               main.style.display = 'none'
            
      
      
    }
    function clearProduct (){
      selectedCard.style.display ='none'
      main.style.display= "flex"
    }