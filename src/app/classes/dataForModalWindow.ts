import { Comment } from "./comment";

export class DataForModelWindow {
    public comments: Comment[]= [];
    public id: number;
    public url: string;

    constructor (
        comments: any[],
        id: number,
        url: string
    ){
        comments.forEach((item)=>{
            this.comments.push(new Comment(item.id, item.text, item.date))
        })
        this.id = id
        this.url = url
    }
}