function validate(form) { 
    var pname = 'bunny';
    var sword = 'Oscar'
    if (form.pname.value!=pname || form.sword.value!=sword) { 
        alert("Wrong petname and safe word");
    } else { 
        document.location.href="album.html";
    }
    return false
}

let activeIndex=0;

const pages = document.getElementsByClassName("page");

const handleFlipPage = () => {
    const currentPage = document.querySelector(`[data-index="${activeIndex}"]`);

    if (activeIndex==7) {
        // Move last page to top
        currentPage.style.zIndex = 8;

        // Move all down
        for (let i = 0; i < pages.length; i++) {
            let elem = pages[i];
            if (elem.dataset.status=='after') {
                elem.dataset.status='shown';
            }
        }

        // Move active up
        currentPage.dataset.status = 'after';

        setTimeout(function() {
            // Move active to bottom
            currentPage.style.zIndex = 0;
            
            //Move active down
            currentPage.dataset.status = 'shown';
        },1500);

    } else {
        // Move active up
        currentPage.dataset.status = 'after';
    }

    activeIndex = activeIndex + 1 <= pages.length - 1 ? activeIndex + 1 : 0;
}