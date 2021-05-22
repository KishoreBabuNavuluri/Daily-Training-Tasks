import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

  num: number=0;
  even:string='';
  odd:string='';
  flag: boolean=true;
  constructor() { }

  // @Output() countFromParent: number;
    setinterval(): void {
     let timerId=setInterval(()=> {
        if(this.flag) {
          if(this.num%2==0) {
            this.even+=this.num.toString();
          }
          else {
            this.odd+=this.num.toString();
          }
            this.num+=1;       
            console.log(this.num);  
        }
      }, 1000);

      if(!this.flag) {
        setTimeout(()=> clearInterval(timerId), 1000);
        this.num=0;
        this.even='';
        this.odd='';
        this.flag=true;
      }
    }

    clearinterval(): void {
      this.flag=false;
    }
    // setInterval(): void {
    //   while(this.flag) {
    //     this.num+=1;
    //   }
    // }


  ngOnInit(): void {
  }

}
