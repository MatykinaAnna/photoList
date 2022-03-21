import { Component, Input, Output, EventEmitter } from '@angular/core';
import { HttpService} from './http.service';
import { HttpServicePost } from './http.service.post';
import { HttpClient} from '@angular/common/http';
import { DataForModelWindow } from './classes/dataForModalWindow'
import { Comment } from "../app/classes/comment";

@Component({
    selector: 'modal-window',
    templateUrl: '../layout/app.modalWindow.html',
    styleUrls: ['../style/app.modalWindow.css'],

    providers: [HttpService, HttpServicePost]
})

export class AppModalWindow  { 

    private httpService: HttpService;
    private httpServicePost: HttpServicePost
    public data: DataForModelWindow;
    public _idImg: number;
    public comment: string = '';

    @Output() closePhoto = new EventEmitter();

    @Input() set idImg (id: number){
        if (id != undefined){
            this._idImg = id
        }
    }

    constructor( private http: HttpClient ){
        this.httpServicePost = new HttpServicePost(this.http)
    }

    ngOnInit(){
        this.httpService = new HttpService(this.http, `https://boiling-refuge-66454.herokuapp.com/images/${this._idImg}`)

        this.httpService.getData().subscribe((data:any) => {
            this.data = new DataForModelWindow (data.comments, data.id, data.url)
            console.log('this.data', this.data)
            console.log('this.data', data)
        });
    }

    close(): void {
        console.log('close')
        this.closePhoto.emit()
    }

    send(): void {
        let d: number = Date.now()
        let id: number = 1
        let comment = new Comment (id, this.comment, d)

        this.httpServicePost.postData(comment)
            .subscribe(
                (data: any) => {
                    console.log(data)
                },
                error => console.log(error)
            )
    }

    delete(): void{
        this.comment = ''
    }

}