var showBtnElem = document.querySelector(".show");
var pics = document.querySelector(".showPic");
var picElem = document.querySelector(".pictures");
var checkingBtnElem = document.querySelector(".checking");

// // let pic = picElem.value;
// var product = {
//     art :['/products/white_pearl_nail_art_stone_different_size_wheel_rhinestones_beads_1510158960_6e2820ca.jpg' , '/stone3.jpg', '/stones.jpg_340x340q80.jpg_.webp']
//     ,fillers :['/OPI-Nails-Files-Rhombus-25pc.jpeg', '/nail-file-1.jpg']

//     // product.[value.pictures] 
// }


var product = {
    Powder: 'products/white_pearl_nail_art_stone_different_size_wheel_rhinestones_beads_1510158960_6e2820ca.jpg',
    fillers: 'products/OPI-Nails-Files-Rhombus-25pc.jpeg'
}


function check_value() { 
    var img = document.createElement("img");
    var imageUrl = picElem.value;

    console.log(product[imageUrl]);
    
    

    img.src = product[imageUrl];
    var src = document.getElementById("showPic");
     
    src.appendChild(img);
  }
  
function allShow() {
    // pics.innerHTML = ""
    // pics.
    // alert('k')
        var img = document.createElement("img");
        for( i = 0; i < product.length; i++){
            const picProd = img[i];
            picProd.push(product);
        }
        var text = document.createTextNode();
        all.appendChild(text);
        return text;
      
      
}
// showBtnElem.addEventListener("click", allShow);

