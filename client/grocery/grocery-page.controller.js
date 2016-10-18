 
function GroceryPageController(groceryAPIService, $interval) {
    const ctrl = this;

    function get_grocerylist_items() {
        groceryAPIService.gitems.get().$promise.then((data) => {
            ctrl.gitems = data.results;
        });
    }

    get_grocerylist_items();
    $interval(get_grocerylist_items, 5000);

    

}

export default GroceryPageController;