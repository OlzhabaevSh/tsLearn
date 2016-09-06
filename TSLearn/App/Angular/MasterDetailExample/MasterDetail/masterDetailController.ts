import * as masterDetailSrv from "./masterDetailService";

import * as personService from "./../common/personService";

export let Name: string = "masterDetailController";

export interface IPerson {
    name: string;
    age: number;
    position: masterDetailSrv.Position;
    positionTitle: string;
}

export class MasterDetailController implements ng.IComponentController {

    // список персонов и выбранный элемент
    public persons: Array<IPerson>;
    public currentPerson: IPerson;

    // второй список
    public personsWeb: Array<personService.IPersonVM>;

    // паблик присваевает аргументы в поля
    constructor(public masterDetailService: masterDetailSrv.MasterDetailService, public personWebService: personService.PersonWebService) {
        this.persons = new Array();
   
    }

    // функция инит
    public init() {
        // получаем список персонов
        this.persons = <IPerson[]>this.masterDetailService.GetPersons();
        var s: ng.IHttpService;

        // обратите внимание, как работаем с циклом. аргументы типизированы
        this.persons.forEach((value, i) => {
            value.positionTitle = masterDetailSrv.Position[value.position];
        });


        // use second service
        this.personsWeb = this.personWebService.get(10);


    }

    public select(person: IPerson) {
        this.currentPerson = person;
    }


}

// экранируем зависимости
MasterDetailController.$inject = [masterDetailSrv.Name, personService.Name];
