describe ("nailBARit", function(){
it ("Should return images that are acrylic powders",function(){
    var numberPICS = nailBAR();
    numberPICS.Client("img");
    assert.deepEqual([],  numberPICS.Client()); 
})
})