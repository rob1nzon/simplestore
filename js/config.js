$(function() {
	simpleCart.bind( 'beforeCheckout' , function( data ){
  data.value1 = NameInput.value+" "+EmailInput.value+" "+PhoneInput.value;
  order = document.getElementsByClassName('itemRow');
  order_str='';
//for (var i = 0; i < order.length; i++) {
//   order_str+=order[i].getElementsByClassName('item-name')[0].innerText;
//   order_str+=': '
//   order_str+=order[i].getElementsByClassName('item-quantity')[0].innerText;
//   order_str+=', '
//}
data.value2 = localStorage.simpleCart_items;

});
	simpleCart({

	    // array representing the format and columns of the cart, see
	    // the cart columns documentation
	    cartColumns: [
	        { attr: "name" , label: "Название" },
	        { attr: "price" , label: "Цена", view: 'currency' },
	        { view: "decrement" , label: false },
	        { attr: "quantity" , label: "Кол-во" },
	        { view: "increment" , label: false },
	        { attr: "total" , label: "Всего", view: 'currency' },
	        { view: "remove" , text: "Удалить" , label: false }
	    ],

	    // "div" or "table" - builds the cart as a table or collection of divs
	    cartStyle: "div",

	    // how simpleCart should checkout, see the checkout reference for more info
	    checkout: {
	        type: "SendForm" ,
		url: "https://maker.ifttt.com/trigger/shop/with/key/de4sE6cA9wc2wrC7AcV1wB",
		    method: "GET" , 
// 	        email: "you@yours.com",
		success: "success.html" , 
      		// url to return to on cancelled checkout, default is null
        	cancel: "cancel.html" 
	    },

	    // set the currency, see the currency reference for more info
	   
	    // collection of arbitrary data you may want to store with the cart,
	    // such as customer info
	    data: {name:"name"},

	    // set the cart langauge (may be used for checkout)
	    language: "english-us",

	    // array of item fields that will not be sent to checkout
	    excludeFromCheckout: [
	    	'qty',
	    	'thumb'
	    ],

	    // custom function to add shipping cost
	    shippingCustom: null,

	    // flat rate shipping option
	    shippingFlatRate: 200,

	    // added shipping based on this value multiplied by the cart quantity
	    shippingQuantityRate: 0,

	    // added shipping based on this value multiplied by the cart subtotal
	    shippingTotalRate: 0,

	    // tax rate applied to cart subtotal
	    taxRate: 0,

	    // true if tax should be applied to shipping
	    taxShipping: false,

	    // event callbacks
	    beforeAdd               	: null,
	    afterAdd                	: null,
	    load                    	: null,
	    beforeSave              	: null,
	    afterSave               	: null,
	    update                  	: null,
	    ready                   	: null,
	    checkoutSuccess             : null,
	    checkoutFail                : null,
	    beforeCheckout              : null

	});
	simpleCart.currency({
    code: "RUB" ,
	    name: "рубли" ,
	    symbol: "₽" ,
	    delimiter: " " , 
	    decimal: "," , 
	    after: true ,
	    accuracy: 2
});
	simpleStore.init({

		// brand can be text or image URL
		brand : "Socks store",

		// numder of products per row (accepts 1, 2 or 3)
		numColumns : 3,

		// name of JSON file, located in directory root
		spreadsheetID : "1JNtE3UzBEAfLj1VwYeDdR7AJPVXdyeR4J7ayYvo7rL8"
		//JSONFile : "products.json"

	});

});
