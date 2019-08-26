function nailBAR(){
    var storedBar = [];
    // var products =[{
    //     "powder": [Acrylic];
    //    "Imge":[[{url: 'bulk-acrylic.jpg_300x300.jpg'}],
    //             [{url:'gg-blend-7.webp'}],[{url:'71s8hExcDAL._SL1000_.jpg'}]]
    // }]


    function Client(picture, product){
        if(picture === "powder"){
            return ""
        }
        if(picture === "brushes"){
            return ""
        }
        if(picture === "fillers"){
            return products;
        }
        if(picture === "Lamps"){
            return ""
        }
        if(picture === "art"){
            return products;        }
    }
    return{
        nailBAR,
        Client
    }
}