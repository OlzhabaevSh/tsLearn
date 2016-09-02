import * as mdService from "./masterDetailService";
import * as mdController from "./masterDetailController";
import * as mdComponent from "./masterDetail";

export let Name: string = "masterDetailMdl";

let mdl = angular.module(Name, []);

// тут код регистрации
mdl.service(mdService.Name, mdService.MasterDetailService);
mdl.controller(mdController.Name, mdController.MasterDetailController);
mdl.component(mdComponent.Name, mdComponent.masterDetail);

