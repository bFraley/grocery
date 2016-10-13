import angular from 'angular';
import groceryPageComponent from './grocery-page.component';

const GroceryModule = angular.module.'grocery, []')
        .component 'groceryPage', groceryPageComponent);
