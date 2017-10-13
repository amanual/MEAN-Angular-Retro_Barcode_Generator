import { Component } from '@angular/core';
// import { random-color } from 'random-color';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent { 
   emptyArr=[];
   arr: String[] = ['green', 'yellow', 'blue', 'FloralWhite', 'GreenYellow', 'Lime', 'Red'];
   result = this.someMethod();
  //  console.log(result);
  someMethod() {
    for (let i of this.arr) {
      var x = Math.floor(Math.random() * 7) 
      this.emptyArr.push(this.arr[x]);
    }
    console.log(this.emptyArr)
    return this.emptyArr;
  }
  

}
