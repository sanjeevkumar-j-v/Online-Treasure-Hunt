// Script to open and close sidebar
function w3_open() {
    document.getElementById("mySidebar").style.display = "block";
    document.getElementById("myOverlay").style.display = "block";
}

function w3_close() {
    document.getElementById("mySidebar").style.display = "none";
    document.getElementById("myOverlay").style.display = "none";
}

// Modal Image Gallery
function onClick(element) {
    document.getElementById("img01").src = element.src;
    document.getElementById("modal01").style.display = "block";
    var captionText = document.getElementById("caption");
    captionText.innerHTML = element.alt;
}
var elem = document.documentElement;

/* Function to open fullscreen mode */
function openFullscreen() {
  if (elem.requestFullscreen) {
    elem.requestFullscreen();
  } else if (elem.mozRequestFullScreen) { /* Firefox */
    elem.mozRequestFullScreen();
  } else if (elem.webkitRequestFullscreen) { /* Chrome, Safari & Opera */
    elem.webkitRequestFullscreen();
  } else if (elem.msRequestFullscreen) { /* IE/Edge */
    elem = window.top.document.body; //To break out of frame in IE
    elem.msRequestFullscreen();
  }
}

var photos = document.querySelectorAll("#photo-grid img");
var headings = document.querySelectorAll("h1 ");
function dispPhoto() {
        for (let photo of photos){
            let coordinate = photo.getBoundingClientRect();
            
            if ((photo.getAttribute("animDone") == "false" ) && coordinate.top <= window.innerHeight)
                {
                    photo.setAttribute("animDone", "true");
                    photo.classList.add("zoomIn");  
                }
            else if (coordinate.top > window.innerHeight) 
                {
                    photo.setAttribute("animDone","false");
                    // photo.classList.remove("zoomIn");
                }
        }
        

    }
function dispHeading() {
    for (let heading of headings){
            let coordinate = heading.getBoundingClientRect();
            // heading.style.display="block";
            // if (coordinate.top <= window.innerHeight)
            //     {
            //         heading.classList.add("lightSpeedIn"); 
            //     }
            if ((heading.getAttribute("animDone") == "false" ) && coordinate.top <= window.innerHeight)
            {
                heading.setAttribute("animDone", "true");
                // heading.classList.add("lightSpeedIn");  
            }
            //   else if (coordinate.top > window.innerHeight) 
            //   {
            //       heading.setAttribute("animDone","false");
            //       heading.classList.remove("lightSpeedIn");
            //   }
                
        }
    }

window.addEventListener("scroll",dispHeading);
//   window.onload(dispPhoto);



var leftval = 0, topval = 0;
window.addEventListener("scroll",function(event){
    document.getElementById("status").style.display="block";
    let perc = currentScrollPercentage();
    document.getElementById("status").style.width= Math.floor(perc) + 'vw';
    //   checkScroll();
});
window.addEventListener("click",function(event){
    document.getElementById("status").style.display="none";    
});


function currentScrollPercentage()
{
    return ((document.documentElement.scrollTop + document.body.scrollTop) / (document.documentElement.scrollHeight - document.documentElement.clientHeight) * 100);
}


