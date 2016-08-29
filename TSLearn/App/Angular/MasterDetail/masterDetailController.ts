import * as masterDetailSrv from "./masterDetailService";

export let Name: string = "masterDetailController";

export interface IPerson {
    name: string;
    age: number;
    position: masterDetailSrv.Position;
    positionTitle: string;
}

export class MasterDetailController implements ng.IComponentController {

    public persons: Array<IPerson>;
    public currentPerson: IPerson;

    constructor(public masterDetailService: masterDetailSrv.MasterDetailService) {
        this.persons = new Array();
    }

    public init() {
        let persons = this.masterDetailService.GetPersons();

        let res = new Array<IPerson>();

        persons.forEach((prs, i) => {
            res.push({
                name: prs.name,
                age: prs.age,
                position: prs.position,
                positionTitle: masterDetailSrv.Position[prs.position]
            });
        });

        this.persons = res;
    }

    public select(person: IPerson) {
        this.currentPerson = person;
    }


}

MasterDetailController.$inject = [masterDetailSrv.Name];
