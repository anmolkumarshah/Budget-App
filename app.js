/* Budget controller */
var budgetController = (function () {

    var Expenses = function (id, description, value) { /* Expense function constructor */
        this.id = id;
        this.description = description;
        this.value = value;
    };

    var Income = function (id, description, value) { /* Income function constructor */
        this.id = id;
        this.description = description;
        this.value = value;
    };

    var data = { /* Data Structure */
        allItems: {
            exp: [],
            inc: [],
        },

        total: {
            exp: 0,
            inc: 0,
        }
    }

    return {
        addItem: function (type, des, val) {
            var newItem, ID;
            if(data.allItems[type].length > 0){
                ID = data.allItems[type][data.allItems[type].length - 1].id + 1; /* genetating id */
            }else{
                ID = 0;
            }
            
            
            if (type === 'exp') {
                newItem = new Expenses(ID, des, val);
                data.allItems.exp.push(newItem);
            } else if (type === 'inc') {
                newItem = new Income(ID, des, val);
                data.allItems.inc.push(newItem);
            }
            return newItem;
        },
        
        testing : function(){
            console.log(data);
        }
    };


})();

/* UI controller */
var UIController = (function () {

    var DOMstrings = {
        inputType: ".add__type",
        inputDescription: ".add__description",
        inputValue: ".add__value",
        inputBtn: ".add__btn",
    }

    return {

        getinput: function () {

            return { /* return object containing type, description and value */

                type: document.querySelector(DOMstrings.inputType).value, /* either inc or exp */
                description: document.querySelector(DOMstrings.inputDescription).value,
                value: document.querySelector(DOMstrings.inputValue).value,

            }
        },

        getDomstring: function () {
            return DOMstrings;
        }
    }

})();

/* Controller */
var controller = (function (budgetCtrl, UICtrl) {

    var setupEventListner = function () {

        var DOM = UICtrl.getDomstring(); /* having object of all inputs */

        document.querySelector(DOM.inputBtn).addEventListener('click', ctrlAddItem)

        document.addEventListener('keypress', function (event) {

            if (event.keyCode === 13 || event.which === 13)
                ctrlAddItem();
        });
    }

    var ctrlAddItem = function () {
        /* Get field input data */
        var input = UICtrl.getinput();
        budgetCtrl.addItem(input.type, input.description, input.value);
        budgetCtrl.testing();
        /* Add the item to the budget controller */

        /* Add the item to the UI */

        /* Calculate the budget */

        /* Display the budget to the UI */
    }

    return {
        init: function () {
            console.log("Application is started");
            setupEventListner();
        },

    }

})(budgetController, UIController);


controller.init();
