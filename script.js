function DisplayPage (navItem){

    var targetPageID = ExtractPageIDByNavItem(navItem);
    var pageData = document.getElementById("PageData");
    var currentPageID = pageData.getAttribute("data-CurrentPageID");
    if (targetPageID != currentPageID){
    pageData.setAttribute("data-CurrentPageID", targetPageID);

    document.getElementById(currentPageID).classList.add("animate-remove");
    document.getElementById(targetPageID).classList.remove("animate-remove");

    setTimeout(function(){SetDisplayValue(currentPageID, "none");}, 1000);
    SetDisplayValue(targetPageID, "block");
    }
}

function SetDisplayValue (elementID, displayValue){
    document.getElementById(elementID).style.display = displayValue;
}


function DisplayPageMobile (navItem){
    DisplayPage(navItem);
    ToggleHamburger();
}

function ExtractPageIDByNavItem(navItem){
    return navItem.id.substring(8);
}

function ToggleNightMode (){

}

function ToggleShownHidden(id) {
    var item = document.getElementById(id);
    item.classList.toggle("Shown");
    item.classList.toggle("Hidden");
}

function ToggleHamburger (){
    document.getElementById("Hamburger").classList.toggle("change");
    ToggleShownHidden("MobileNav");
    ToggleShownHidden("MainPage");

    //document.getElementById("MobileNav").classList.toggle("d-none");
    //document.getElementById("MainPage").classList.toggle("d-none");
}

function ToggleNightMode() {
    ToggleShownHidden("NightModeSun");
    ToggleShownHidden("NightModeMoon");

}