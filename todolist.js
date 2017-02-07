window.onload = function() {
    var el = document.getElementById('btn'),
        el2 = document.getElementById('results');
    el.addEventListener('click', function() {
        var value = document.getElementById('editbox').value;
        if (value) {
            var newListItem = document.createElement('li');
            newListItem.innerHTML = '<div class="checkmark">&#10004;</div>' + value;
            el2.appendChild(newListItem);
            var newCross = document.createElement('div');
            newCross.innerHTML = '&#10008;';
            newCross.className = 'cross';
            newListItem.appendChild(newCross);

            document.getElementById('editbox').value = '';
        }
    });

    var el3 = document.querySelector('ul');
    el3.addEventListener('click', function (event) {
        var target = event.target;
        if (target.tagName === 'DIV' && target.className === 'cross') target.parentNode.remove();
        else if (target.tagName === 'DIV' && target.className === 'checkmark') target.parentNode.setAttribute('class', 'crossline');
    });
};

