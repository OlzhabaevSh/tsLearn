import * as personService from "./personService";

export let Name: string = "common-mdl";

let mdl = angular.module(Name, []);
// regist service
mdl.service(personService.Name, personService.PersonWebService);

