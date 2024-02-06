import { Injectable } from '@angular/core';
import { EntityCollectionServiceBase, EntityCollectionServiceElementsFactory } from '@ngrx/data';
import { Course } from '../model/course';

@Injectable()
//service allows us to manipulate entities in the cache, fetch data from backend and save. Also query data in the store.
export class CourseEntityService extends EntityCollectionServiceBase<Course>{

    //creates some of core elements to build core entity service
    constructor(serviceElementsFactory: EntityCollectionServiceElementsFactory){
        super('Course', serviceElementsFactory);
    }
}


