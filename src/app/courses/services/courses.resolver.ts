import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { CourseEntityService } from "./course-entity.service";
import { filter, first, map, tap } from "rxjs/operators";


//This resolver class initiates the backend course to get courses on route transition and 
//ensures that backend call is only completed to get courses only one time
@Injectable()
export class CoursesResolver implements Resolve<boolean>{

    constructor(private courseService: CourseEntityService){}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {

        return this.courseService.loaded$
            .pipe(
                tap(loaded => {
                    if (!loaded){                 
        //get all is not meant to go and get from api, it is meant to send a trigger to tell another service
        //to get from backend
                        this.courseService.getAll();
                    }
                }),
                //only true values so transistion does not complete with false value
                filter(loaded => !!loaded),
                //first makes sures that when first value is emitted the observable will complete
                first()
            );
    }
}