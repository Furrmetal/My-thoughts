window.onload = function () {
    document.body.classList.add('сокрытие');
    window.setTimeout(function() {
        document.body.classList.add('скрыто');
        document.body.classList.remove('сокрытие');
    }, 500); remove()
}

function remove () {
    var deleting = document.getElementsByClassName('Прелоадер');
    deleting.parentNode.removeChild('deleting');
}