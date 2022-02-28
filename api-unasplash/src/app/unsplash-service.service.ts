import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UnsplashServiceService {

  // private nome mio: HttpClient, inizializazzione
  constructor(private httpUnsplash: HttpClient) { }


   //creo un metodo per il mio servizio
  getPhotoByTitle(title:string, userColor:string, userOrintation:string ){
    return this.httpUnsplash.get(`https://api.unsplash.com/search/photos?client_id=B-3ZvoyHXSPdwpAiRJdw2_TLVkkMyFfCviujwgPgAPU&query=${title}&color=${userColor}&${userOrintation}`)
  }
}

// `https://api.unsplash.com/search/photos?client_id=${this.myKey}&page=5&per_page=42&query=${keyword}=${orient}&color=${color}`



// https://api.unsplash.com/search/photos?client_id=APIKEY=${orient}&color=${color}&page=2&per_page=42&query=${str}?

