let scrollpercentage = () =>{
    let scrollprogress = document.getElementById("progress");
    let progressValue = document.getElementById("progress-value");
    let pos = document.documentElement.scrollTop;
    let calcHeight = document.documentElement.scrollHeight - document.documentElement.calcHeight;
    let scrollValue = Math.round (pos * 100 / calcHeight);

    scrollprogress.style.background  = `conic-gradient(#008ff ${scrollValue}%, #c0c0ff ${scrollValue}%)`;
    progressValue.textContent = `${scrollValue}%`;

}

window.onscroll = scrollpercentage;
window.onload = scrollpercentage;