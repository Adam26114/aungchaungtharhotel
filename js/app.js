// Start Jquery Area
$(document).ready(function(){
    //Start Room Section 
    $('.roompopup').magnificPopup({type:'image'});
    //En Room Section 

});
// End Jquery Area

// Star Header
// Start nab bar
function dropbtn(e){
    //   document.getElementById('mydropdown').classList.toggle('show');
    //   console.log('hi');

    // underfined

    // console.log(e.target);
    // console.log(e.target.nextElementSibling);

    e.target.nextElementSibling.classList.toggle('show');


}

function dropfilter(){
    var getsearch,filter,getdropdiv,getlinks,linkvalue;

    getsearch = document.getElementById('search');
    filter = getsearch.value.toUpperCase();
    // getdropdiv = document.getElementById("mydropdown");
    // getlinks = getdropdiv.getElementsByTagName("a");

    getlinks = document.querySelectorAll(".mydropdowns a")

    // console.log(getlinks);

    for(var x = 0 ; x < getlinks.length ; x++){
        // linkvalue = getlinks[x].textContent;
        linkvalue = getlinks[x].textContent || getlinks[x].innerText;
        // console.log(linkvalue);


        if(linkvalue.toUpperCase().indexOf(filter) > -1){
            getlinks[x].style.display = "block"
        }else{{
            getlinks[x].style.display = "none"
        }}

    }


}
// End nab bar


// Start Auto Background

function* genfun(){
    var index = 8;

    while(true){
        yield index++;

        if(index > 13){
            index = 8;
        }
    }
}

var getgen = genfun();
// console.log(getgen.next().value);
// console.log(getgen.next().value);
// console.log(getgen.next().value);
// console.log(getgen.next().value);
// console.log(getgen.next().value);
// console.log(getgen.next().value);
// console.log(getgen.next().value);
// console.log(getgen.next().value);


var getheader = document.querySelector('header');
getheader.style.backgroundImage = `url("./assets/img/banner/banner${getgen.next().value}.jpg")`;

function autoload(){
    // console.log(getgen.next().value);

    getheader.style.backgroundImage = `url("./assets/img/banner/banner${getgen.next().value}.jpg")`;
}

setInterval(autoload,2500);

// End Auto Background


// End Header

// Start Testimonials
    const getcpmpanyname = document.querySelector('.companyname')
    const getrole = document.querySelector('.role')
    const gettestimonial = document.querySelector('.testimonial')

    const testimonialdatas=[
        {
            name:"Rich Star Restaurant",
            position:"Our Outlet",
            text:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        },
        {
            name:"48 Sky Bar Cafe",
            position:"Our Partner",
            text:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        },
        {
            name: "52 Beach Hotel" ,
            position: "Our Branch" ,
            text:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        },
        {
            name: "Cool Land Swimming Pool" ,
            position: "Our Client" ,
            text:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        },
        {
            name:"Chaung Thar SPA",
            position: "Our Business",
            text:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        }
    ];

let idx = 0;

function updatetestimonial(){

}

setInterval(updatetestimonial,10000)
    

// End Testimonials

// 3TM