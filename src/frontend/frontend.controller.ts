import { Controller, Query, Get, HttpException} from '@nestjs/common';

import { insuranceOptions, serviceOptions } from './constants.dropdowns';

@Controller('/frontend')
export class FrontendController {

    @Get('dropdown/insuranceOptions')
    getInsuranceOptions(){
        // Standard return
        return (insuranceOptions)
    }

    @Get('dropdown/serviceOptions')
    getServiceOptions(@Query('exclude') exclude?:string){
        // @exclude can be a set of comma-separated strings (?exclude=1,2)
        // would only return service option 3
        let filteredServiceOptions: {value: string, label: string}[]
        try {
            // check if query has exclude, if so filter it out
            if(exclude?.length > 0) {
                const excludeSet = exclude.split(',');
                filteredServiceOptions = serviceOptions.filter(option => {
                    if (excludeSet.includes(option.value)){
                        return
                    }
                    return option
                })
            } 
            return (serviceOptions)
        } catch (error) {
            throw new HttpException('Unexpected Error', 500)
        }
        
    }
}
