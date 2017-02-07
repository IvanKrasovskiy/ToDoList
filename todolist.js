document.addEventListener('DOMContentLoaded', function () {
  var button = document.getElementById('btn'),
      listContainer = document.getElementById('results');
  button.addEventListener('click', function () {
    var value = document.getElementById('editbox').value;
    if (value.trim()) {
      listContainer.innerHTML += '' +
        '<li>' +
          '<div class="checkmark">&#10004;</div>'
          + value +
          '<div class="cross">&#10008</div>' +
        '</li>';
      document.getElementById('editbox').value = '';
    }
  });

  listContainer.addEventListener('click', function (event) {
    event.preventDefault();
    var target = event.target;
    if (target.classList.contains('cross')) {
      return target.parentNode.remove();
    }
    if (target.classList.contains('checkmark')) {
      return target.parentNode.setAttribute('class', 'crossline');
    }
  });
});

