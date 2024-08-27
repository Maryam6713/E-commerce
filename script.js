var ideas = {
  //---------first--------------
    homeDecorations: {
      room: { img:"./image2/bedroom.jpg", title: "Room Decorations",},
      kitchen:{img:"./images/kitchen.jpg", title: "Kitchen Decoration",},
      balcony:{ img:"./images/homebalcony.jpg", title: "Balcony Decoration"},
      launch:{img:"./images/lauch1.jpg",title: "TV Launch Decoration",},
      roof:{img:"./images/roof1.jpg", title: "Roof Decoration",},
      wall:{ img:"./images/wall1.jpg", title: "Wall Decoration",}
    },
    //--------second------------------

    schoolDecorations: {
      classroom: { img:"./images/class1.jpg", title: "classroom Decorations", },
      office:{ img:"./images/office1.jpg", title: "School office Decoration",},
      play:{ img:"./images/play.jpeg", title: "School Play ground Decoration", },
      library:{img:"./images/library1.jpg", title: "School Library Decoration", },
      schoolbalcony:{ img:"./images/schoolbalcony.webp",title: "School Balcony Decoration",},
      schoolwall:{ img:"./images/schoolwall.jpg", title: "School Wall Decoration" }
    },
    //----------Third-----------------
    plantDecorations: {
      inwindow: {img:"./images/windowplant.jpg",title: "For Window",},
      inbalcony:{ img:"./images/balconyplant.jpg", title: "For Balcony",},
      inStairs:{ img:"./images/stairplant.jpg", title: "For Wall",},
      inRoom:{ img:"./images/roomplant.jpeg", title: "For Room",},
      inRoof:{img:"./images/roofplant.webp",title: "For Roof", },
      inDoor:{img:"./images/doorplant.jpg",title: "For Door", }
    },
    //---------Forth--------------
    DressForWomen: {
      wedding: {img:"./images/weddingdress.jpg",title: "For wedding", },
      party:{img:"./images/partydress.webp",title: "For Party",},
      job:{img:"./images/jobdress.jpg",title: "For Job",},
      university:{img:"./images/universitydress.jpg",title: "For University", },
     dailyWear:{img:"./images/daily.jpg",title: "For Daily Wear At Home", },
      picnic:{ img:"./images/picnicdress.jpg", title: "For Picnic", }
    },
    //-------------Fifth------------
    hijab_Style: {
     forwedding: { img:"./images/hijabwed.jpg", title: "For wedding",},
      forparty:{ img:"./image2/hijab2.jpg", title: "For party",},
      forjob:{ img:"./images/hijaboffice.jpg", title: "For Job",},
      foruniversity:{ img:"./images/unihijab.jpg", title: "For University", },
    fordailyWear:{ img:"./images/dailyhijab.jpg", title: "For Daily Wear"},
     forpicnic:{img:"./images/picnichijab.jpg",title: "For Picnic",}
    },
    //---------Sixth-----------------------
    abaya_Style: {
      coat: { img:"./images/abaya1.jpg", title: "coat abaya",},
      upperType:{ img:"./images/abaya2.jpg", title: "upper type abaya",},
      umbrella:{ img:"./images/abaya3.jpg", title: "umbrella abaya",},
      blackAbaya:{ img:"./images/abaya4.jpg", title: "black abaya", },
     simpleAbaya:{ img:"./images/abaya5.jpg", title: "simple abaya"},
      seaGreen:{img:"./images/abaya6.jpg",title: "sea green abaya",}
    },
    //-----------seventh-----------------
    DressForMen: {
      wedding_outfit: { img:"./images/men1.jpg", title: "wedding outfit",},
      party_outfit:{ img:"./images/men2.jpg", title: "party outfit",},
      event_outfit:{ img:"./images/men3.jpg", title: "event outfit",},
      job_outfit:{ img:"./images/men4.jpg", title: "job outfit", },
     student_outfit:{ img:"./images/men5.jpg", title: "student outfit"},
      eid_outfit:{img:"./images/men6.jpg",title: "eid outfit",}
    },
    //------------eighth-----------------
    curtains: {
      with_bed: { img:"./images/curtain1.jpg", title: "For bed",},
      with_door:{ img:"./images/curtain2.jpg", title: "For door",},
      with_window:{ img:"./images/curtain3.webp", title: "For window",},
      for_office:{ img:"./images/curtain4.jpg", title: "For office", },
     for_kids_room:{ img:"./images/curtain5.jpg", title: "For kids rooms"},
      for_events:{img:"./images/curtain6.jpg",title: "For events",}
    },
    //-------------ninth---------------
    shoesForWomen: {
      pencil_heal: { img:"./images/shoe1.jpeg", title: "pencil heal",},
      sport_shoes:{ img:"./images/shoe2.jpg", title: "sport shoes",},
      gliter:{ img:"./image2/shoe3.jpg", title: "gliter type shoes",},
      home_slippers:{ img:"./images/shoe4.webp", title: "soft slippers", },
     sandal:{ img:"./images/shoe5.jpg", title: "sandals"},
      sandal_heal:{img:"./images/shoe6.jpg",title: "heal sandals",}
    },
    //-----------tenth-------------
    shoesForMen: {
      sport_shoes: { img:"./image2/shoes01.jpeg", title: "sport shoes",},
      black_shoes:{ img:"./image2/shoes2.jpeg", title: "black shoes",},
      pishawari_sandal:{ img:"./image2/shoes3.webp", title: "pishawari sandal",},
      brawon:{ img:"./image2/shoes4.webp", title: "brown slippers", },
     dailyWear:{ img:"./image2/shoes5.jpg", title: "daily wear slippers"},
      slippers:{img:"./image2/shoes6.jpg",title: "simple slippers",}
    },
    //------------eleventh---------------
    makeupLook: {
      mehandi_look: { img:"./image2/makeup1.jpg", title: "mehandi makeup look",},
      wedding_look:{ img:"./image2/makeup2.jpg", title: "wedding makeup look",},
      valima_look:{ img:"./image2/makeup3.jpg", title: "valima makeup look",},
      eid_look:{ img:"./image2/makeup4.jpg", title: "eid makeup look", },
     party_look:{ img:"./image2/makeup5.jpg", title: "party makeup look"},
      simple_look:{img:"./image2/makeup6.jpg",title: "events makeup look",}
  },

 
    }

      
//--------------cards------------------------//

    var main = document.querySelector("#main")
    var cards = document.querySelector("#allcards")
    var nested = document.querySelector("#country")
  
    cards.innerHTML = `<option value="">Select ideas</option>`
    
  nested.innerHTML = `<option value="">Select different ideas</option>`
   

  for (var key in ideas) {
    cards.innerHTML += `<option value="${key}">${key}</option>`;
    for (var key1 in ideas[key]) {
        var obj = ideas[key][key1];
    
        main.innerHTML += `
            <div class="col-lg-3 col-md-4 col-sm-12 mt-3 sm-m-3">
                <div class="card text-center" style="width: 18rem;">
                    <img src="${obj.img}" class="card-img card-img-top img-fluid" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">${obj.title}</h5>
                         <button class="btn btn-warning" onclick="showColorPicker(this)">Color</button>
                        <a href="#" class="btn btn-warning">Select</a>
                    </div>
                </div>
            </div>`;
    }
}

function setCountry(){
  nested.innerHTML = ""
  nested.innerHTML =`<option value ="">select ideas name </option>`
for(var key in ideas[cards.value]){
nested.innerHTML +=`<option value ="${key}">${key} </option>`

}

}
var selectedCard = document.getElementById("selectedCard");
function searchCards(){
  
  var userVal = ideas[cards.value][nested.value]
 
  
  selectedCard.innerHTML = ` <div class="col-lg-4 col-md-6 col-sm-12 mt-3 sm-m-3 d-inline-block">
  <div class="card text-center" style="width: 18rem;">
          <img src="${userVal.img}" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">${userVal.title}</h5>
            <p class="card-text"><p>
             <button class="btn btn-warning" onclick="showColorPicker(this)">Color</button>
            <a href="#" class="btn btn-primary">select</a>
          </div>
        </div>  </div>`
           main.style.display = 'none'
        
  
  
           selectedCard.style.display = 'flex';
         selectedCard.style.flexWrap = 'wrap'; 
         selectedCard.style.justifyContent = 'center'
}

      
      
      function showColorPicker(button) {
        var card = button.closest('.card');
        var colorPicker = document.createElement('input');
        colorPicker.type = 'color';
        colorPicker.oninput = function() {
          card.style.backgroundColor = this.value;
        };
        colorPicker.click();
      }
      

     function clearCards (){
      selectedCard.style.display ='none'
      main.style.display= "flex"
    }