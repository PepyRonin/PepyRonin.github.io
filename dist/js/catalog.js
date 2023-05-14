
let storage
switch (window.location.href) {
    case '/block.html':
        storage = JSON.parse(localStorage.getItem('blocks'))
        break;
    case '/mat.html':
        storage = JSON.parse(localStorage.getItem('mat'))
        break;
    case '/case.html':
        storage = JSON.parse(localStorage.getItem('case'))
        break;
    case '/CPU.html':
        storage = JSON.parse(localStorage.getItem('cpu'))
        break;
    case '/ram.html':
        storage = JSON.parse(localStorage.getItem('ram'))
        break;
    case '/block.html':
        storage = JSON.parse(localStorage.getItem('serv'))
        break;
    case '/ssd.html':
        storage = JSON.parse(localStorage.getItem('ssd'))
        break;
    case '/svc.html':
        storage = JSON.parse(localStorage.getItem('svc'))
        break;
    case '/gpu.html':
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
                <div class="love" id="like${obj.id}"><img src="./img/lover.png"></div>
                <div class="car" id="addtocart${obj.id}"><img src="./img/car.svg"></div>
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
