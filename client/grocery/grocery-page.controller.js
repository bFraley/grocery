 
function GroceryPageController(groceryAPIService) {
    const ctrl = this;

        function getGITEMS() {
        groceryAPIService.gitems.get().$promise.then((data) => {
            ctrl.gitems = data.results;
        });
    }

    getGITEMS();
    $interval(getGITEMS, 5000);

    
    

}

export default GroceryPageController;