'use strict';
var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        document.getElementById('main').innerHTML = this.responseText;
    }
};
xmlhttp.open('GET', 'php/images.php', true);
xmlhttp.send();