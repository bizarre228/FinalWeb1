function fadeIn(element, duration) {
        var targetOpacity = 1;
        var currentOpacity = 0;
        var startTime = null;

        function animate(currentTime) {
            if (!startTime) startTime = currentTime;
            var timeElapsed = currentTime - startTime;
            var opacity = currentOpacity + timeElapsed / duration;
            element.style.opacity = Math.min(opacity, targetOpacity);

            if (opacity < targetOpacity) {
                requestAnimationFrame(animate);
            }
        }

        requestAnimationFrame(animate);
    }

document.addEventListener("DOMContentLoaded", function() {
        var element = document.getElementById('myElement');
        fadeIn(element, 2000);
});

function playSound(soundId) {
            let audio = document.getElementById(soundId);
            audio.play();
}

function openTab(evt, tabName) {
    const tablinks = document.getElementsByClassName("tablinks");
    const tabcontent = document.getElementsByClassName("tabcontent");
        for (let i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
        for (let i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
        document.getElementById(tabName).style.display = "block";
        evt.currentTarget.className += " active";
}


    const tab1 = document.getElementById('tab1')
    const tab2 = document.getElementById('tab2')
    const tab3 = document.getElementById('tab3')

        tab1.addEventListener('click', () => {
            let audio = new Audio('source/c8fd8d10309e3e0.mp3')
            audio.play();
        })

        tab2.addEventListener('click', () => {
            let audio = new Audio('source/c8fd8d10309e3e0.mp3')
            audio.play();
        })

        tab3.addEventListener('click', () => {
            let audio = new Audio('source/c8fd8d10309e3e0.mp3')
            audio.play();
        })

    let search = document.querySelector(".search");
    let clear = document.querySelector(".clear");
    search.onclick = function(){
        document.querySelector(".containers").classList.toggle('active');
    }
    clear.onclick = function(){
        document.getElementById("search").value = "";
    }
