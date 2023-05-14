
let storage
switch (window.location.href) {
    case 'http://localhost:3000/block.html':
        storage = JSON.parse(localStorage.getItem('blocks'))
        break;
    case 'http://localhost:3000/mat.html':
        storage = JSON.parse(localStorage.getItem('mat'))
        break;
    case 'http://localhost:3000/case.html':
        storage = JSON.parse(localStorage.getItem('case'))
        break;
    case 'http://localhost:3000/CPU.html':
        storage = JSON.parse(localStorage.getItem('cpu'))
        break;
    case 'http://localhost:3000/ram.html':
        storage = JSON.parse(localStorage.getItem('ram'))
        break;
    case 'http://localhost:3000/block.html':
        storage = JSON.parse(localStorage.getItem('serv'))
        break;
    case 'http://localhost:3000/ssd.html':
        storage = JSON.parse(localStorage.getItem('ssd'))
        break;
    case 'http://localhost:3000/svc.html':
        storage = JSON.parse(localStorage.getItem('svc'))
        break;
    case 'http://localhost:3000/gpu.html':
        storage = JSON.parse(localStorage.getItem('gpu'))
        break;
}
// localStorage.setItem('cart', JSON.stringify(data));

$.each(storage, function (index, obj) {
    $('#catalog').append(
        `<div class="block-box box"><img src="${obj.img}" style="margin-top: 30px;">
        <p>${obj.name}</p>
        <div class="stroka">
            <div class="stroka-price">
                <div class="price"><p>${obj.price}₽</p></div>
            </div>
            <div class="stroka-love-car">
                <div class="love" id="like${obj.id}"><img src="../img/lover.png"></div>
                <div class="car" id="addtocart${obj.id}"><img src="../img/car.svg"></div>
            </div>
        </div>
    </div>`
    );
    let addtocart = $("#addtocart" + obj.id);
    let containter = $("#" + obj.id);
    let price = obj.price;

    addtocart.on("click", function () {

        let time_storage = JSON.parse(localStorage.getItem('cart'))
        if (time_storage == '' || time_storage == undefined || time_storage == null) {
            time_storage = [storage[index]]
        }
        else {
            var index1 = time_storage.findIndex(function (time_storage) {
                return time_storage.id == obj.id
            })
        }
        if (index1 == -1) {
            time_storage.push(storage[index])
        }
        localStorage.setItem('cart', JSON.stringify(time_storage));
    })
});
