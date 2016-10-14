import angular from 'angular';
import groceryPageComponent from './grocery-page.component';
import groceryAPIService from './grocery-api.service';

const GroceryModule = angular.module('grocery', ['ngResource'])
    .config(($resourceProvider) => {
        $resourceProvider.defaults.stripTrailingSlashes = false;
     })
    .component('groceryPage', groceryPageComponent)
    .factory('groceryAPIService', groceryAPIService)

export default GroceryModule
