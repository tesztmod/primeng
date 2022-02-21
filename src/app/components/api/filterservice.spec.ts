import { FilterService } from './filterservice';
​
describe('FilterService Suite', () => {
​
    let data: any = [
        {brand: "VW", year: 2012, color: {name:"Orange"}, vin: "dsad231ff"},
        {brand: "Audi", year: 2011, color: {name:"Black"}, vin: "gwregre345"},
        {brand: "Renault", year: 2005, color: {name:"Black"}, vin: "h354htr"},
        {brand: "BMW", year: 2003, color: {name:"Blue"}, vin: "j6w54qgh"},
        {brand: "Mercedes", year: 1995, color: {name:"Red"}, vin: "hrtwy34"},
        {brand: "Volvo", year: 2005, color: {name:"Orange"}, vin: "jejtyj"},
        {brand: "Honda", year: 2012, color: {name:"Blue"}, vin: "g43gr"},
        {brand: "Jaguar", year: 2013,color: {name:"Black"}, vin: "greg34"},
        {brand: "Ford", year: 2000, color: {name:"White"}, vin: "h54hw5"},
        {brand: "Fiat", year: 2013, color: {name:"Yellow"}, vin: "245t2s"}
    ];
    
    let timeData  = [
        {date:'Tue Aug 04 2019 00:00:00 GMT+0300 (GMT+03:00)'},
        {date:'Tue Aug 05 2019 00:00:00 GMT+0300 (GMT+03:00)'},
        {date:'Tue Aug 07 2019 00:00:00 GMT+0300 (GMT+03:00)'}
    ];

    let filterService = new FilterService();

    
    it('Should filter by startsWith', () => {
        let filteredValue = filterService.filter(data,['brand'],'f','startsWith');
        expect(filteredValue.length).toEqual(2);
        filteredValue = filterService.filter(data,['brand'],'','startsWith');
        expect(filteredValue.length).toEqual(10);
        filteredValue = filterService.filter(data,[''],'f','startsWith');
        expect(filteredValue.length).toEqual(0);
    });
​
    it('Should filter by contains', () => {
        let filteredValue = filterService.filter(data,['brand'],'f','contains');
        expect(filteredValue.length).toEqual(2);
        filteredValue = filterService.filter(data,['brand'],'','contains');
        expect(filteredValue.length).toEqual(10);
        filteredValue = filterService.filter(data,[''],'f','contains');
        expect(filteredValue.length).toEqual(0);
    });
​
    it('Should filter by endsWith', () => {
        let filteredValue = filterService.filter(data,['brand'],'t','endsWith');
        expect(filteredValue.length).toEqual(2);
        filteredValue = filterService.filter(data,['brand'],'','endsWith');
        expect(filteredValue.length).toEqual(10);
        filteredValue = filterService.filter(data,[''],'t','endsWith');
        expect(filteredValue.length).toEqual(0);
    });
​
    it('Should filter by equals', () => {
        let filteredValue = filterService.filter(data,['brand'],'BMW','equals');
        expect(filteredValue.length).toEqual(1);
        filteredValue = filterService.filter(data,['brand'],'','equals');
        expect(filteredValue.length).toEqual(10);
        filteredValue = filterService.filter(data,[''],'BMW','equals');
        expect(filteredValue.length).toEqual(0);
    });
​
    it('Should filter by notEquals', () => {
        let filteredValue = filterService.filter(data,['brand'],'BMW','notEquals');
        expect(filteredValue.length).toEqual(9);
        filteredValue = filterService.filter(data,['brand'],'','notEquals');
        expect(filteredValue.length).toEqual(0);
        filteredValue = filterService.filter(data,[''],'BMW','notEquals');
        expect(filteredValue.length).toEqual(10);
    });
​
    it('Should filter by lt', () => {
        let filteredValue = filterService.filter(timeData,['date'],'Tue Aug 05 2019 00:00:00 GMT+0300 (GMT+03:00)','lt');
        expect(filteredValue.length).toEqual(1);
        filteredValue = filterService.filter(timeData,['date'],'','lt');
        expect(filteredValue.length).toEqual(0);
        filteredValue = filterService.filter(timeData,[''],'Tue Aug 05 2019 00:00:00 GMT+0300 (GMT+03:00)','lt');
        expect(filteredValue.length).toEqual(0);
    });
​
    it('Should filter by lte', () => {
        let filteredValue = filterService.filter(timeData,['date'],'Tue Aug 05 2019 00:00:00 GMT+0300 (GMT+03:00)','lte');
        expect(filteredValue.length).toEqual(2);
        filteredValue = filterService.filter(timeData,['date'],'','lte');
        expect(filteredValue.length).toEqual(0);
        filteredValue = filterService.filter(timeData,[''],'Tue Aug 05 2019 00:00:00 GMT+0300 (GMT+03:00)','lte');
        expect(filteredValue.length).toEqual(0);
    });
    ​
    it('Should filter by gt', () => {
        let filteredValue = filterService.filter(timeData,['date'],'Tue Aug 05 2019 00:00:00 GMT+0300 (GMT+03:00)','gt');
        expect(filteredValue.length).toEqual(1);
        filteredValue = filterService.filter(timeData,['date'],'','gt');
        expect(filteredValue.length).toEqual(3);
        filteredValue = filterService.filter(timeData,[''],'Tue Aug 05 2019 00:00:00 GMT+0300 (GMT+03:00)','gt');
        expect(filteredValue.length).toEqual(0);
    });
​
    it('Should filter by gte', () => {
        let filteredValue = filterService.filter(timeData,['date'],'Tue Aug 05 2019 00:00:00 GMT+0300 (GMT+03:00)','gte');
        expect(filteredValue.length).toEqual(2);
        filteredValue = filterService.filter(timeData,['date'],'','gte');
        expect(filteredValue.length).toEqual(3);
        filteredValue = filterService.filter(timeData,[''],'Tue Aug 05 2019 00:00:00 GMT+0300 (GMT+03:00)','gte');
        expect(filteredValue.length).toEqual(0);
    });

    describe('startsWith',()=>{
        it('should return true if the filter is empty', () => {
            const result = filterService.filters.startsWith('', ' ', '');
            
            expect(result).toBeTrue();
        });
    
        it('should return false if the value is empty', () => {
            const result = filterService.filters.startsWith(null, 'text', '');
            
            expect(result).toBeFalse();
        });
    });

    describe('contains',()=>{
        it('should return true if the filter is empty', () => {
            const result = filterService.filters.contains('', ' ', '');
            
            expect(result).toBeTrue();
        });
    
        it('should return false if the value is empty', () => {
            const result = filterService.filters.contains(null, 'text', '');
            
            expect(result).toBeFalse();
        });
    });

    describe('notContains',()=>{
        it('should return true if the filter is empty', () => {
            const result = filterService.filters.notContains('', ' ', '');
            
            expect(result).toBeTrue();
        });
    
        it('should return false if the value is empty', () => {
            const result = filterService.filters.notContains(null, 'text', '');
            
            expect(result).toBeFalse();
        });
    });

    describe('endsWith',()=>{
        it('should return true if the filter is empty', () => {
            const result = filterService.filters.endsWith('', ' ', '');
            
            expect(result).toBeTrue();
        });
    
        it('should return false if the value is empty', () => {
            const result = filterService.filters.endsWith(null, 'text', '');
            
            expect(result).toBeFalse();
        });
    });

    describe('equals',()=>{
        it('should return true if the filter is empty', () => {
            const result = filterService.filters.equals('', ' ', '');
            
            expect(result).toBeTrue();
        });
    
        it('should return false if the value is empty', () => {
            const result = filterService.filters.equals(null, 'text', '');
            
            expect(result).toBeFalse();
        });
    });

    describe('notEquals',()=>{
        it('should return true if the filter is empty', () => {
            const result = filterService.filters.notEquals('', ' ', '');
            
            expect(result).toBeFalse();
        });
    
        it('should return false if the value is empty', () => {
            const result = filterService.filters.notEquals(null, 'text', '');
            
            expect(result).toBeTrue();
        });
    });

   describe('lt',()=>{ 
        it('should return true if the filter is empty', () => {
            const result = filterService.filters.lt('', null, '');

            expect(result).toBeTrue();
        });

        it('should return false if the value is empty', () => {
            const result = filterService.filters.lt(null, ' ', '');
    
            expect(result).toBeFalse();
        });
    });


    describe('lte',()=>{ 
        it('should return true if the filter is empty', () => {
            const result = filterService.filters.lte('', null, '');

            expect(result).toBeTrue();
        });

        it('should return false if the value is empty', () => {
            const result = filterService.filters.lte(null, ' ', '');
    
            expect(result).toBeFalse();
        });
    });

    describe('gt',()=>{ 
        it('should return true if the filter is empty', () => {
            const result = filterService.filters.gt('', null, '');

            expect(result).toBeTrue();
        });

        it('should return false if the value is empty', () => {
            const result = filterService.filters.gt(null, ' ', '');
    
            expect(result).toBeFalse();
        });
    });

    describe('gte',()=>{ 
        it('should return true if the filter is empty', () => {
            const result = filterService.filters.gte('', null, '');

            expect(result).toBeTrue();
        });

        it('should return false if the value is empty', () => {
            const result = filterService.filters.gte(null, ' ', '');
    
            expect(result).toBeFalse();
        });
    });

    describe('dateIs',()=>{ 
        it('should return true if the filter is empty', () => {
            const result = filterService.filters.dateIs('', null);

            expect(result).toBeTrue();
        });

        it('should return false if the value is empty', () => {
            const result = filterService.filters.dateIs(null, ' ');
    
            expect(result).toBeFalse();
        });
    });

    describe('dateIsNot',()=>{ 
        it('should return true if the filter is empty', () => {
            const result = filterService.filters.dateIsNot('', null);

            expect(result).toBeTrue();
        });

        it('should return false if the value is empty', () => {
            const result = filterService.filters.dateIsNot(null, ' ');
    
            expect(result).toBeFalse();
        });
    });

    describe('dateBefore',()=>{ 
        it('should return true if the filter is empty', () => {
            const result = filterService.filters.dateBefore('', null);

            expect(result).toBeTrue();
        });

        it('should return false if the value is empty', () => {
            const result = filterService.filters.dateBefore(null, ' ');
    
            expect(result).toBeFalse();
        });
    });

    describe('dateAfter',()=>{ 
        it('should return true if the filter is empty', () => {
            const result = filterService.filters.dateAfter('', null);

            expect(result).toBeTrue();
        });

        it('should return false if the value is empty', () => {
            const result = filterService.filters.dateAfter(null, ' ');
    
            expect(result).toBeFalse();
        });
    });
});
