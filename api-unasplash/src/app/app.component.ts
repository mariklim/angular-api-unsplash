import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FormGroup, FormControl, Validators} from '@angular/forms';

//importo il mio servizio che ho creato
import { UnsplashServiceService } from './unsplash-service.service';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  photosArr :any=[];
  photoArrRes:any=[];

  colorsList: any = ['black', 'white', 'yellow']
  orientationsList: any = ['landscape', 'portrait', 'squarish']

  //per salvare la stringa del utente
  userTitle:string = "";
  userColor:string = "";
  userOrientation:string = "";

//dechiaro il mio servizio
constructor(private unsplashService: UnsplashServiceService){}

//select 


//test Photo

testPhotoByTitle(myForm : NgForm){
  this.userTitle = myForm.form.value.title

  console.log(this.userTitle)

  this.userColor = myForm.form.value.selectColor
  console.log(this.userColor)

  this.userOrientation = myForm.form.value.selectOrientation
  console.log(this.userColor)



//richiamo il mio servizio  
this.unsplashService.getPhotoByTitle(this.userTitle,this.userColor,this.userOrientation).subscribe({

  next: dati=>{
  this.photosArr = dati
  this.photoArrRes = this.photosArr.results
   console.log('results',this.photoArrRes)
   console.log(this.photoArrRes[0].urls.small)
  },
  //opzionale
  error: errore=>console.log(errore),
  complete: ()=>{}
  
})
}

}




