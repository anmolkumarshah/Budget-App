/* Budget controller */
var budgetController = (function(){
   
    
    
})();

/* UI controller */
var UIController = (function(){
    
    var ctrlAddItem = function(){
        /* Get field input data */
        
        /* Add the item to the budget controller */
        
        /* Add the item to the UI */
        
        /* Calculate the budget */
        
        /* Display the budget to the UI */        
    }
    document.querySelector(".add__btn").addEventListener('click', ctrlAddItem)
    
    document.addEventListener('keypress', function(event){
            
        if(event.keyCode === 13 || event.which === 13)
            ctrlAddItem();
    });
    
})();

/* Controller */
var controller = (function(budgetCtrl, UICtrl){
    
    
})(budgetController, UIController);

