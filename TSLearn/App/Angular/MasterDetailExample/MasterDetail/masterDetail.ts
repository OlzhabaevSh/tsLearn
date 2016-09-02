import * as masterDetailCtrl from "./masterDetailController";

export let Name: string = "masterDetail";

// создаем компоненту
export let masterDetail: ng.IComponentOptions = {
    controller: masterDetailCtrl.Name,
    templateUrl: '/App/Angular/MasterDetailExample/MasterDetail/Template.html'
    
};
