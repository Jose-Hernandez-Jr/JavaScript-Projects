function my_dictionary(){
    var Airsoft = {  // This is the dictionary I made, with the vaule pairs below.
        Type:"Sniper" ,
        Model:"MSR303",
        Color:"Tan",
        Brand:"Ares"
    };
    delete Airsoft.Type; //This deleted a part of the dicionary I have.
    document.getElementById("Dictionary").innerHTML = Airsoft.Type;
}