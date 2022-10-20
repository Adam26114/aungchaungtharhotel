// Star Header
// Start nab bar
function dropbtn(){
    document.getElementById("mydropdown").classList.toggle('show');
}

function dropfilter(){
    var getsearch,filter,getdropdiv,getlinks,linkvalue;

    getsearch = document.getElementById('search');
    filter = getsearch.value.toUpperCase();
    getdropdiv = document.getElementById("mydropdown");
    getlinks = getdropdiv.getElementsByTagName("a");

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
// End Header