function vote() {
    button.innerHTML = ' ... ';

    var xhr = new XMLHttpRequest();

    xhr.open('GET', 'vote', true);

    xhr.onreadystatechange = function () {
        if(xhr.readyState != 4) {
            return;
        }

        if(xhr.status != 200) {
            alert('Error:' + xhr.status + ': ' + xhr.statusText);
            return;
        }

        button.innerHTML = xhr.responseText;
    }

    xhr.send(null);
}
