function DisplayPage (navItem){

    var targetPageID = ExtractPageIDByNavItem(navItem);
    var pageData = document.getElementById("PageData");
    var currentPageID = pageData.getAttribute("data-CurrentPageID");
    pageData.setAttribute("data-CurrentPageID", targetPageID);

    document.getElementById(currentPageID).style.display = "none";
    document.getElementById(targetPageID).style.display = "block";

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

function ToggleHamburger (){
    document.getElementById("Hamburger").classList.toggle("change");
    document.getElementById("MobileNav").classList.toggle("d-none");
}