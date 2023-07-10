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

    // Move shown up
    const currentPage = document.querySelector(`[data-index="${activeIndex}"]`)
    currentPage.dataset.status = 'after';
    
    // Move not shown down
    const prevIndex = activeIndex - 1 >= 0 ? activeIndex - 1 : 7;

    const prevPage = document.querySelector(`[data-index="${prevIndex}"]`);

    prevPage.dataset.status = 'shown';

    // Update activeIndex

    activeIndex = activeIndex + 1 <= pages.length - 1 ? activeIndex + 1 : 0;
}