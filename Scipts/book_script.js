let currentIndex = 0;
const carouselItems = document.querySelectorAll('.carousel-item');
const carouselInner = document.getElementById('carousel-inner');

function showNext() {
    currentIndex = (currentIndex + 1) % carouselItems.length;
    carouselInner.style.transform = `translateX(${-currentIndex * 270}px)`;
}

setInterval(showNext, 3000); // Установка интервала в 3 секунды

        // Get the modal
        var modal = document.getElementById("myModal");

        // Get the button that opens the modal
        var btn = document.getElementById("myBtn");

        // Get the <span> element that closes the modal
        var span = document.getElementsByClassName("close")[0];

        // When the user clicks the button, open the modal
        btn.onclick = function() {
            modal.style.display = "block";
        }

        // When the user clicks on <span> (x), close the modal
        span.onclick = function() {
            modal.style.display = "none";
        }

        // When the user clicks anywhere outside of the modal, close it
        window.onclick = function(event) {
            if (event.target == modal) {
                modal.style.display = "none";
            }
        }

        // Get the modal
        var modal = document.getElementById("myModa");

        // Get the button that opens the modal
        var btn = document.getElementById("myBt");

        // Get the <span> element that closes the modal
        var span = document.getElementsByClassName("close")[0];

        // When the user clicks the button, open the modal
        btn.onclick = function() {
            modal.style.display = "block";
        }

        // When the user clicks on <span> (x), close the modal
        span.onclick = function() {
            modal.style.display = "none";
        }

        // When the user clicks anywhere outside of the modal, close it
        window.onclick = function(event) {
            if (event.target == modal) {
                modal.style.display = "none";
            }
        }

        // Get the modal
        var modal = document.getElementById("myMod");

        // Get the button that opens the modal
        var btn = document.getElementById("myB");

        // Get the <span> element that closes the modal
        var span = document.getElementsByClassName("close")[0];

        // When the user clicks the button, open the modal
        btn.onclick = function() {
            modal.style.display = "block";
        }

        // When the user clicks on <span> (x), close the modal
        span.onclick = function() {
            modal.style.display = "none";
        }

        // When the user clicks anywhere outside of the modal, close it
        window.onclick = function(event) {
            if (event.target == modal) {
                modal.style.display = "none";
            }
        }

    const buttons = document.querySelectorAll('.btn-primary');
    buttons.forEach(button => {
        button.addEventListener('mouseover', function() {
            button.style.backgroundColor = 'black';
            button.style.color = 'white';
        });

        button.addEventListener('mouseout', function() {
            button.style.backgroundColor = '';
            button.style.color = '';
        });
    });

    const showTooltip = (event, text) => {
        const tooltip = document.createElement('div');
        tooltip.classList.add('tooltip');
        tooltip.textContent = text;
        tooltip.style.position = 'absolute';
        tooltip.style.backgroundColor = 'black';
        tooltip.style.color = 'white';
        tooltip.style.padding = '5px 10px';
        tooltip.style.borderRadius = '5px';
        tooltip.style.top = `${event.clientY + 10}px`;
        tooltip.style.left = `${event.clientX}px`;
        document.body.appendChild(tooltip);
    };
    const linka = document.getElementById("linka")
    linka.title = "Chaplin Official"
    const jsn = document.getElementById("jsn")
    jsn.title = "Chaplin Official"
    const tbt = document.getElementById("tbt")
    tbt.title = "Chaplin Official"
    const hideTooltip = () => {
        const tooltip = document.querySelector('.tooltip');
        if (tooltip) {
            document.body.removeChild(tooltip);
        }
    };


    let search = document.querySelector(".search");
    let clear = document.querySelector(".clear");
    search.onclick = function(){
        document.querySelector(".containers").classList.toggle('active');
    }
    clear.onclick = function(){
        document.getElementById("search").value = "";
    }

