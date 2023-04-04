window.onload = function () {
    document.body.classList.add('сокрытие');
    window.setTimeout(function() {
        document.body.classList.add('скрыто');
        document.body.classList.remove('сокрытие');
        remove()
    }, 1000);
}

function remove () {
    var deletting = document.getElementsByClassName('Прелоадер');
    deletting.parentNode.removeChild('deletting');
}
