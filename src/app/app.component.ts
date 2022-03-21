import { Component, OnInit } from '@angular/core';
import { HttpService} from './http.service';
import { HttpClient} from '@angular/common/http';

import { Photo } from './classes/photo';
     
@Component({
    selector: 'my-app',
    templateUrl: '../layout/app.component.html',
    styleUrls: ['../style/app.component.css'],

    providers: [HttpService]
})
export class AppComponent implements OnInit { 

    listOfPhoto: Photo[];
    private httpService: HttpService;
    idImg: number;
    modalWindow: boolean = false

    constructor( private http: HttpClient ){
        this.httpService = new HttpService(http, 'https://boiling-refuge-66454.herokuapp.com/images')
    }

    ngOnInit(): void{
          
        this.httpService.getData().subscribe((data:any) => {
            console.log(data)
            this.listOfPhoto = data
        });
    }

    openPhoto(id: number): void{
        console.log ('id', id)
        this.idImg = id
        this.modalWindow = !this.modalWindow
    }

    closePhoto():void {
        console.log('closePhoto')
        this.modalWindow = !this.modalWindow
    }

}