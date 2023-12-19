import { Component,OnInit } from '@angular/core';
import { DataService } from './services/data.service';
import { Data } from './models/data.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app6';

  data: Data[] = [];
  selectedTutorial: Data | undefined; // Tambahkan properti selectedTutorial

  constructor(private dataService: DataService ) {

  }

  ngOnInit(): void {
    this.loadData();
  }

  loadData() {
    this.dataService.getData().subscribe((response) => {
      this.data = response;
    });
  }

  postDataTutorial(name: string, currency: string, balance:string,country:string,city:string){
    const balanceValue = parseFloat(balance);
    this.dataService.post(name, currency,balanceValue,country,city).subscribe((item) => {
      console.log('success post data', item)
    })
  }

  isModalOpen = false;

  openModal():void {
    this.isModalOpen = true;
    document.body.classList.add('overflow-hidden'); // Menyembunyikan scrollbar ketika modal muncul
  }

  closeModal():void {
    this.isModalOpen = false;
    document.body.classList.remove('overflow-hidden'); // Mengembalikan scrollbar

  }
}
