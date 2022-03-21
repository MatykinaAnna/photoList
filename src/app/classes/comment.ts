export class Comment {
    
    public id: number;
    public text: string;
    public date: string;

    constructor (id:number, text: string, date: number) {
        this.id = id
        this.text = text

        let d = new Date(date).getDate()
        let m = new Date(date).getMonth() + 1
        let y = new Date(date).getFullYear()
        
        let dateStr = ''
        if (d<10){
            dateStr = dateStr + '0'
        }
        dateStr = dateStr+String(d)+'.'
        if (m<10){
            dateStr = dateStr + '0'
        }
        dateStr = dateStr+String(m)+'.'+String(y)


        this.date = dateStr
    }
}