$(function () {

    updateCart()

    $.each(JSON.parse(localStorage.getItem('cart')), function (index, obj) {
        $('.cart-container').append(
            `<div class="block-box" id="${obj.id}"><img class="img-sell" src="${obj.img}">
            <p>${obj.name}</p>
                <p>${obj.price}₽</p>
            <div class="add-count">
                <input type="button" id="buttonCountMinus${obj.id}" value="-">
                <div id="buttonCountNumber${obj.id}">x${obj.count}</div>
                <input type="button" id="buttonCountPlus${obj.id}" value="+">
                <input type="hidden" value="1" id="num${obj.id}" name="num">
            </div>
            <div class="add-count total-sell-count" id="total-sell-count${obj.id}">
            ${obj.price}₽
            </div>
            <div class="delete" id="button-delete${obj.id}"><img src="./img/delete.png" width="35px" height="35px"></div>
        </div>`
        );
        let containter = $("#" + obj.id);
        let buttonCountPlus = document.getElementById("buttonCountPlus" + obj.id);
        let buttonCountMinus = document.getElementById("buttonCountMinus" + obj.id);
        let count = document.getElementById("buttonCountNumber" + obj.id);
        let count2 = $("#total-sell-count" + obj.id);
        let deletebutton = $("#button-delete" + obj.id);
        let number = obj.count;
        let price = obj.price;
        deletebutton.on("click", function () {
            containter.remove()
            cart = JSON.parse(localStorage.getItem('cart'))
            var index = cart.findIndex(function (cart) {
                return cart.id == obj.id
            });
            cart.splice(index, 1);
            localStorage.setItem('cart', JSON.stringify(cart));
            updateCart()
        })
        buttonCountPlus.onclick = function () {
            if (number <= 3) {
                number++;
                count.innerHTML = 'x' + number;
                count2.html(number * price + '₽');
                cart = JSON.parse(localStorage.getItem('cart'))
                var index = cart.findIndex(function (cart) {
                    return cart.id == obj.id
                });
                cart[index].count=number
                localStorage.setItem('cart', JSON.stringify(cart));
                updateCart()
            }
        };

        buttonCountMinus.onclick = function () {
            if (number >= 2) {
                number--;
                count.innerHTML = 'x' + number;
                count2.html(number * price + '₽');
                cart = JSON.parse(localStorage.getItem('cart'))
                var index = cart.findIndex(function (cart) {
                    return cart.id == obj.id
                });
                cart[index].count=number
                localStorage.setItem('cart', JSON.stringify(cart));
                updateCart()
            }
        }
    });
   
    function updateCart(){
        let count=0;
        let summ=0;
        $.each(JSON.parse(localStorage.getItem('cart')), function (index, obj) {
            
                count+=Number(obj.count)
                summ+=Number(obj.count)*Number(obj.price)
            
        })
        $("#total_price_summ1").html(count+" Товара")
        
        $("#total_price_summ2").html(summ+"₽")
        
    }
});
