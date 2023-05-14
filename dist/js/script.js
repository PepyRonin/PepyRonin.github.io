
var slider = Peppermint(document.getElementById('peppermint'))

    rightArr = document.getElementById('right-arr')
    leftArr = document.getElementById('left-arr')

    slider.recalcWidth()

rightArr.addEventListener('click', slider.next, false);
leftArr.addEventListener('click', slider.prev, false);
