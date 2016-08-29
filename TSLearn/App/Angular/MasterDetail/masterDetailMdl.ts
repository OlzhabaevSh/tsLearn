import * as mdService from "./masterDetailService";
import * as mdController from "./masterDetailController";
import * as mdComponent from "./masterDetail";

export let Name: string = "masterDetailMdl";

let mdl = angular.module(Name, []);

mdl.service(mdService.Name, mdService.MasterDetailService);
mdl.controller(mdController.Name, mdController.MasterDetailController);
mdl.component(mdComponent.Name, mdComponent.masterDetail);

console.log('ss');
