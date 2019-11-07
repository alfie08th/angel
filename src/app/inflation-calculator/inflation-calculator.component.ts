import {AfterViewInit, Component, ElementRef, OnInit} from '@angular/core';

@Component({
  selector: 'app-inflation-calculator',
  templateUrl: './inflation-calculator.component.html',
  styleUrls: ['./inflation-calculator.component.css']
})
export class InflationCalculatorComponent implements OnInit, AfterViewInit {

  constructor(private elem: ElementRef) {
  }

  count: number;
  dollarThen: number;
  dollarNow: number;
  years: any;
  inputBox: any;
  currentYear: number;
  closeCount: number;
  cpi: any;
  currentDollar = 0;
  thenDollar = 0;
  currentCpi = 0;
  thenCpi = 0;

  ngOnInit() {
    this.cpi = [];
    this.closeCount = 0;
    this.count = 0;
    this.dollarNow = 0;
    this.dollarThen =  0;
    this.years = [];
    let date = new Date();
    this.currentYear = Number(date.getFullYear());
    let descendYear  = this.currentYear;
    let totalYear = this.currentYear-1912;
    for(let i = 0; i<totalYear; i++){
      this.years[i] = descendYear;
      descendYear--;
    }
    this.inputBox= ['', ''];
    this.showResult();
  }

  convertResult() {
    console.log('reprimind')
  }

  ngAfterViewInit() {

    let dollarInput = this.elem.nativeElement.getElementsByClassName("dollarInputClass");
    dollarInput[1].disabled = true;

    dollarInput[0].onkeyup = function(){
      dollarInput[1].placeholder = Number(dollarInput[0].value) + Math.floor((Math.random() * 10) + 1);
    }
  }

  showResult() {
    let res = [];
    let avgCPI = [];

    fetch('./assets/cpi.txt')
      .then(response => response.text())
      .then(text =>{
        res = text.split(" ");
        res.push('0');
        let year = this.currentYear;
        for(let i =0; i<res.length-1; i++){
          avgCPI[i] = Number(res[i]);
          year--;
          console.log('avgCPI[' + i + "]", avgCPI[i]);
        }
        localStorage.setItem('cpi', avgCPI.toString());
      });
    this.cpi = localStorage.getItem('cpi').split(',');
  }

  convert() {
    this.currentDollar = (this.currentCpi/this.thenCpi)*this.thenDollar;
  }

  convertBack() {
    this.thenDollar = (this.thenCpi/this.currentCpi)*this.currentDollar;
  }

  showMenu(index){
    let yearUl = this.elem.nativeElement.getElementsByClassName('year-ul');
    let dollarThenLabel = this.elem.nativeElement.getElementsByClassName('yearDropDown');

    yearUl[index].style.display = "block";
    yearUl[index].style.zIndex = '100';

    let slowTransition = ()=>{
      yearUl[index].style.transition = "5s";
      yearUl[index].style.display = "none";
    };

    yearUl[index].addEventListener('mouseleave', ()=>{
      slowTransition();
    });

    dollarThenLabel[index].addEventListener('mouseleave', ()=>{
      slowTransition();
    });
  }
}
