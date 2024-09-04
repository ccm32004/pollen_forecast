
var address = "Markham"
var linkMaps = `https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=AIzaSyDV7cciQOm8ywNdOZxMY-q5MXvypiOD8nQ`;

//autocomplete function: autocomplete 

//google maps geocoding api key:
//pollen api key: 

//use google geocoder API to convert address to longitude and latitude

//implement location search button
function search(event){
    event.preventDefault();
    const val = document.querySelector('#search').value;
    address = val;
    linkMaps = `https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=AIzaSyDV7cciQOm8ywNdOZxMY-q5MXvypiOD8nQ`;
    displaySearch();
    // add location of the thing

}

function setLocation(){
    var locationBox = document.querySelector('.location');
    locationBox.textContent = "Current Location: " + address;
}

const form = document.querySelector('#form');
form.addEventListener('submit', search);

async function getCoordinates(){ //this will return a promise, not the actual pollen link, since it is an asynchronous function. ie a promise is an object that may produce a value in the future
    const response = await fetch(linkMaps); 
    const received = await response.json();
    
    const latitiude  = received.results[0].geometry.location.lat;
    console.log(latitiude);

    const longitude  = received.results[0].geometry.location.lng;
    console.log(longitude);

    const pollenLink = createPollenLink(latitiude, longitude);
    console.log(pollenLink);
    return pollenLink;  
}

async function getAdditionalPollenData(){
    const response = await fetch(linkMaps); 
    const received = await response.json();
    
    const latitiude  = received.results[0].geometry.location.lat;
    console.log(latitiude);

    const longitude  = received.results[0].geometry.location.lng;
    console.log(longitude);

    const pollenLink = createSpecificPlantPollenLink(latitiude, longitude);
    console.log(pollenLink);
    return pollenLink;  
}


function createPollenLink(lat, lng){
    return `https://api.breezometer.com/pollen/v2/forecast/daily?lat=${lat}&lon=${lng}&days=3&key=664b23bd3f0045e19d53e23cf0871671`; //&features=plants_information this is for specific variants
}

function createSpecificPlantPollenLink(lat, lng){
    return `https://api.breezometer.com/pollen/v2/forecast/daily?lat=${lat}&lon=${lng}&days=3&key=664b23bd3f0045e19d53e23cf0871671&features=plants_information`; 
}


async function testing(){
    const link = await getAdditionalPollenData(); //this allows you to ensure the promise is completed, and will return the link desired
    console.log(link);
    const response = await fetch(link);
    const received = await response.json();
    console.log(received.data);
    //choose the proper box first
    var outerBox = display.querySelector('.outerBox');
    var today = outerBox.querySelector('.todayBox');
    var rightBox = today.querySelector('.rightBox'); 
    //var innerBox = today.querySelector('.innerBox'); 

    rightBox.innerHTML = '';


    if (received.data[0].plants['alder'].data_available != false){
        const innerBox = document.createElement('div');
        innerBox.classList.add('innerBox');
        
        innerBox.textContent = received.data[0].plants['alder'].display_name + ': ' + received.data[0].plants['alder'].index.category;
        rightBox.appendChild(innerBox);
    }

    else if (received.data[0].plants['ash'].data_available != false){
        const innerBox = document.createElement('div');
        innerBox.classList.add('innerBox');
        innerBox.textContent = received.data[0].plants['ash'].display_name + ': ' + received.data[0].plants['ash'].index.category;
        
        rightBox.appendChild(innerBox);
    }

    else if (received.data[0].plants['birch'].data_available != false){
        const innerBox = document.createElement('div');
        innerBox.classList.add('innerBox');
        innerBox.textContent = received.data[0].plants['birch'].display_name + ': ' + received.data[0].plants['birch'].index.category;
        
        rightBox.appendChild(innerBox);
    }

    else if (received.data[0].plants['cottonwood'].data_available != false){
        const innerBox = document.createElement('div');
        innerBox.classList.add('innerBox');
        innerBox.textContent = received.data[0].plants['cottonwood'].display_name + ': ' + received.data[0].plants['cottonwood'].index.category;
        
        rightBox.appendChild(innerBox);
    }

    else if (received.data[0].plants['elm'].data_available != false){
        const innerBox = document.createElement('div');
        innerBox.classList.add('innerBox');
        innerBox.textContent = received.data[0].plants['elm'].display_name + ': ' + received.data[0].plants['elm'].index.category;
        
        rightBox.appendChild(innerBox);
    }

    else if (received.data[0].plants['graminales'].data_available != false){
        const innerBox = document.createElement('div');
        innerBox.classList.add('innerBox');
        innerBox.textContent = received.data[0].plants['graminales'].display_name + ': ' + received.data[0].plants['graminales'].index.category;
        
        rightBox.appendChild(innerBox);
    }

    else if (received.data[0].plants['maple'].data_available != false){
        const innerBox = document.createElement('div');
        innerBox.classList.add('innerBox');
        innerBox.textContent = received.data[0].plants['maple'].display_name + ': ' + received.data[0].plants['maple'].index.category;
        
        rightBox.appendChild(innerBox);
    }
    
    else if (received.data[0].plants['oak'].data_available != false){
        const innerBox = document.createElement('div');
        innerBox.classList.add('innerBox');
        innerBox.textContent = received.data[0].plants['oak'].display_name + ': ' + received.data[0].plants['oak'].index.category;
        
        rightBox.appendChild(innerBox);
    }

    else if (received.data[0].plants['pine'].data_available != false){
        const innerBox = document.createElement('div');
        innerBox.classList.add('innerBox');
        innerBox.textContent = received.data[0].plants['pine'].display_name + ': ' + received.data[0].plants['pine'].index.category;
        
        rightBox.appendChild(innerBox);
    }

    else if (received.data[0].plants['ragweed'].data_available != false){
        const innerBox = document.createElement('div');
        innerBox.classList.add('innerBox');
        innerBox.textContent = received.data[0].plants['ragweed'].display_name + ': ' + received.data[0].plants['ragweed'].index.category;
        
        rightBox.appendChild(innerBox);
    }
   
    /*for(let i = 0; i < 4; i++){
        const innerBox = document.createElement('div');
        innerBox.classList.add('innerBox');

        leftBox.appendChild(innerBox);
    } */

    //parse through all of the properties of additional pollen, data

}

async function testingTwo(){
    const link = await getAdditionalPollenData(); //this allows you to ensure the promise is completed, and will return the link desired
    console.log(link);
    const response = await fetch(link);
    const received = await response.json();
    console.log(received.data);
    //choose the proper box first
    var outerBox = display.querySelector('.outerBox');
    var today = outerBox.querySelector('.todayBox');
    var rightBox = today.querySelector('.rightBox'); 
    //var innerBox = today.querySelector('.innerBox'); 

    //remove existing childnodes in rightBox
    var innerBoxes = rightBox.querySelectorAll('.innerBox');
    for (let i = 0; i < innerBoxes.length; i++) {
        innerBoxes[i].remove();
    }


    if (received.data[0].plants['alder'].data_available != false){
        const innerBox = document.createElement('div');
        innerBox.classList.add('innerBox');
        
        innerBox.textContent = received.data[0].plants['alder'].display_name + ': ' + received.data[0].plants['alder'].index.category;
        rightBox.appendChild(innerBox);
    }

    else if (received.data[0].plants['ash'].data_available != false){
        const innerBox = document.createElement('div');
        innerBox.classList.add('innerBox');
        innerBox.textContent = received.data[0].plants['ash'].display_name + ': ' + received.data[0].plants['ash'].index.category;
        
        rightBox.appendChild(innerBox);
    }

    else if (received.data[0].plants['birch'].data_available != false){
        const innerBox = document.createElement('div');
        innerBox.classList.add('innerBox');
        innerBox.textContent = received.data[0].plants['birch'].display_name + ': ' + received.data[0].plants['birch'].index.category;
        
        rightBox.appendChild(innerBox);
    }

    else if (received.data[0].plants['cottonwood'].data_available != false){
        const innerBox = document.createElement('div');
        innerBox.classList.add('innerBox');
        innerBox.textContent = received.data[0].plants['cottonwood'].display_name + ': ' + received.data[0].plants['cottonwood'].index.category;
        
        rightBox.appendChild(innerBox);
    }

    else if (received.data[0].plants['elm'].data_available != false){
        const innerBox = document.createElement('div');
        innerBox.classList.add('innerBox');
        innerBox.textContent = received.data[0].plants['elm'].display_name + ': ' + received.data[0].plants['elm'].index.category;
        
        rightBox.appendChild(innerBox);
    }

    else if (received.data[0].plants['graminales'].data_available != false){
        const innerBox = document.createElement('div');
        innerBox.classList.add('innerBox');
        innerBox.textContent = received.data[0].plants['graminales'].display_name + ': ' + received.data[0].plants['graminales'].index.category;
        
        rightBox.appendChild(innerBox);
    }

    else if (received.data[0].plants['maple'].data_available != false){
        const innerBox = document.createElement('div');
        innerBox.classList.add('innerBox');
        innerBox.textContent = received.data[0].plants['maple'].display_name + ': ' + received.data[0].plants['maple'].index.category;
        
        rightBox.appendChild(innerBox);
    }
    
    else if (received.data[0].plants['oak'].data_available != false){
        const innerBox = document.createElement('div');
        innerBox.classList.add('innerBox');
        innerBox.textContent = received.data[0].plants['oak'].display_name + ': ' + received.data[0].plants['oak'].index.category;
        
        rightBox.appendChild(innerBox);
    }

    else if (received.data[0].plants['pine'].data_available != false){
        const innerBox = document.createElement('div');
        innerBox.classList.add('innerBox');
        innerBox.textContent = received.data[0].plants['pine'].display_name + ': ' + received.data[0].plants['pine'].index.category;
        
        rightBox.appendChild(innerBox);
    }

    else if (received.data[0].plants['ragweed'].data_available != false){
        const innerBox = document.createElement('div');
        innerBox.classList.add('innerBox');
        innerBox.textContent = received.data[0].plants['ragweed'].display_name + ': ' + received.data[0].plants['ragweed'].index.category;
        
        rightBox.appendChild(innerBox);
    }
   
    /*for(let i = 0; i < 4; i++){
        const innerBox = document.createElement('div');
        innerBox.classList.add('innerBox');

        leftBox.appendChild(innerBox);
    } */

    //parse through all of the properties of additional pollen, data

}



//populate basic data
async function getPollenData1(link){
    const response = await fetch(link);
    const received = await response.json();
    console.log(received.data);

    //choosing the today box and outerbox2
    var children = display.querySelector('.outerBox').childNodes;
    
    var i, l, e, d2; 

    

        //gets all descendants of today box, which are left and right boxes
        child = children[0];
        for (l = 0; l < 1; l++){
            d2 = child.querySelectorAll('.innerBox'); //choosing only the innerboxes in the todaybox, which can also be grandchildren?

            for (let j = 0; j < 4; j++){ //choosing the four boxes in the today box

                if (j === 0){ //if we are on the first date box
                    d2[j].textContent = "Today";
                }

                else{
                    if (j === 1){
                        d2[j].textContent = received.data[l].types['grass'].display_name + ':  ' + received.data[l].types['grass'].index.category;
                    }

                    else if (j === 2){
                        d2[j].textContent = received.data[l].types['tree'].display_name + ':  ' + received.data[l].types['tree'].index.category;
                    }

                    else{

                        d2[j].textContent = received.data[l].types['weed'].display_name + ':  ' + received.data[l].types['weed'].index.category;

                        } 
                    }
                }

            }

        }
        

        //if (i === 0){
            //distinguishes today box from the others
            //child.classList.add('today');
        //}

        //loop through each innerbox in the the day boxes (there are four)
        
//populates the other days
async function getPollenData2(link){
    const response = await fetch(link);
    const received = await response.json();
    console.log(received.data);

    //choosing the today box and outerbox2
    var children = display.querySelector('.outerBox').childNodes;

    var i, l, k, e, d2; 
    var child = children[1]; //choosing outerbox
    grandchildren = child.childNodes; 


    for (let j = 0; j < 2; j++){ 
        var grandchild = grandchildren [j];
        d2 = grandchild.querySelectorAll('.innerBox'); //each d2 represents an inner box selected in a day box

        for (let k = 0; k < 4; k++){//there are four inner boxes in each day box
            if(k === 0){ // first inner box for otherboxes
                d2[k].textContent = received.data[j+1].date;
            }
            else{
                //populating the other three boxes with actual data woo

                if (k === 1){
                    d2[k].textContent = received.data[j+1].types['grass'].display_name + ':  ' + received.data[j+1].types['grass'].index.category;
                }

                else if (k === 2){
                    d2[k].textContent = received.data[j+1].types['tree'].display_name + ':  ' + received.data[j+1].types['tree'].index.category;
                }

                else{
                    d2[k].textContent = received.data[j+1].types['weed'].display_name + ':  ' + received.data[j+1].types['weed'].index.category;
                }

            }

        }
    }
}

const display = document.querySelector('.display');

function createTable(){
    const outerBox = document.createElement('div');
    outerBox.classList.add('outerBox');

    display.appendChild(outerBox);

    const todayBox = document.createElement('div');
    todayBox.classList.add('todayBox');

    //adding the two half boxes in today box
   
    const leftBox= document.createElement('div');
    leftBox.classList.add('leftBox');

    todayBox.appendChild(leftBox);

    const rightBox= document.createElement('div');
    rightBox.classList.add('rightBox');

    todayBox.appendChild(rightBox);
    
    
    //inners boxes in today box for elements
    for(let i = 0; i < 4; i++){
        const innerBox = document.createElement('div');
        innerBox.classList.add('innerBox');
        if(i === 0){
            innerBox.classList.add('dateBox');
        }

        leftBox.appendChild(innerBox);
    }


    outerBox.appendChild(todayBox);


    //creating the boxes for the other days, situated at the bottom

    const outerBox2 = document.createElement('div');
    outerBox2.classList.add('outerbox2');
    outerBox.appendChild(outerBox2);


    for(let i = 0; i < 2; i++){
        const otherBox = document.createElement('div');
        otherBox.classList.add('otherBox');

        for(let i = 0; i < 4; i++){ //adding 4 inner boxes to the inner boxes
            const innerBox = document.createElement('div');
            innerBox.classList.add('innerBox');
            if(i === 0){
                innerBox.classList.add('dateBox');
            }
            
    
            otherBox.appendChild(innerBox);
        }

        outerBox2.appendChild(otherBox);
    }

}
async function displaySearch(){

    const link = await getCoordinates();
    console.log("final link:");
    console.log(link);
    getPollenData1(link);
    getPollenData2(link);
    testingTwo();
    setLocation();

}

async function main(){

    const link = await getCoordinates();
    console.log("final link:");
    console.log(link);
    createTable();
    getPollenData1(link);
    getPollenData2(link);
    testing();
    setLocation();

}

main();

//displays pollen data for five days in table?
//function that creates a table, populates each table with indexed object's stuff?


//features we want:
//default: user must enter their location
//displays the index, as well key grasses,perhaps also do a thing that loops through each type of plant, and if it is null, then don't add anything woo