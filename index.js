var submitting = document.querySelector('button');

submitting.onclick = function () {
	submitting.disabled = true;
    if (submitting.disabled == true) {
        window.location.reload(true);
    }
}