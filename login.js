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