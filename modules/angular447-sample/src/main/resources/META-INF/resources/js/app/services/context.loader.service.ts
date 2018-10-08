import { Injectable } from '@angular/core';
import {Http} from '@angular/http';

@Injectable()
export class ContextLoaderService {

	url:string = "http://localhost:8080/fr/group/ordirope/testjp?p_p_id=angularportletconfgc&p_p_lifecycle=2&p_p_state=normal&p_p_mode=view&p_p_resource_id=angularportletconfgcContext&p_p_cacheability=cacheLevelPage";

    constructor(private http: Http) { }

    getValues() {
       return this.http.get(this.url);
    }
} 
