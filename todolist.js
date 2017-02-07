window.onload = function() {
    var el = document.getElementById('btn'),
        el2 = document.getElementById('results');
    el.addEventListener('click', function() {
        var value = document.getElementById('Kregen').value;
        if (value) {
            var newListItem = document.createElement('li');
            newListItem.innerHTML = '<div class="Gala">&#10004;</div>' + value;
            el2.appendChild(newListItem);
            var newCross = document.createElement('div');
            newCross.innerHTML = '&#10008;';
            newCross.className = 'Cross';
            newListItem.appendChild(newCross);

            document.getElementById('Kregen').value = '';
        }
    });

    var el3 = document.querySelector('ul');
    el3.addEventListener('click', function (event) {
        var target = event.target;
        if (target.tagName === 'DIV' && target.className === 'Cross') target.parentNode.remove();
        else if (target.tagName === 'DIV' && target.className === 'Gala') target.parentNode.setAttribute('class', 'crossline');
    });
};

