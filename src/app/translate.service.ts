import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TranslateService {
  private currentLang = new BehaviorSubject<String>("en");
  currentLang$ = this.currentLang.asObservable();



  constructor(private http: HttpClient) {}

  setLanguage(lang: String) {
    this.currentLang.next(lang);
    this.loadLanguage(lang);
  }

  private loadLanguage(lang: String) {
    this.http.get(`assets/i18n/${lang}.json`)
      .subscribe(
        (data) => {
          console.log(data);
        },
        (error) => console.error("Error loading language file", error)

        );
      
  }
}
