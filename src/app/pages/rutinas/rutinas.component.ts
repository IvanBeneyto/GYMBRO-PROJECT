import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';


export interface PeriodicElement {
  // name: string;
  // position: number;
  // weight: number;
  // symbol: string;

  ejercicio: string;
  series: number;
  repeticiones: string;
  peso: number;
}

export interface Rutina {
  // name: string;
  // position: number;
  // weight: number;
  // symbol: string;

  ejercicio: string;
  series: number;
  repeticiones: string;
  peso: number;
}




const ELEMENT_DATA: PeriodicElement[] = [
  {ejercicio: "", series: 4, repeticiones: "", peso: 1},
  {ejercicio: "", series: 4, repeticiones: "", peso: 1},
  {ejercicio: "", series: 4, repeticiones: "", peso: 1},
  {ejercicio: "", series: 4, repeticiones: "", peso: 1},
  {ejercicio: "", series: 4, repeticiones: "", peso: 1},
  {ejercicio: "", series: 4, repeticiones: "", peso: 1},
  {ejercicio: "", series: 4, repeticiones: "", peso: 1},
  {ejercicio: "", series: 4, repeticiones: "", peso: 1},
  {ejercicio: "", series: 4, repeticiones: "", peso: 1},
  {ejercicio: "", series: 4, repeticiones: "", peso: 1},
  {ejercicio: "", series: 4, repeticiones: "", peso: 1},
  {ejercicio: "", series: 4, repeticiones: "", peso: 1},
  {ejercicio: "", series: 4, repeticiones: "", peso: 1},
  {ejercicio: "", series: 4, repeticiones: "", peso: 1},
  {ejercicio: "", series: 4, repeticiones: "", peso: 1},
  {ejercicio: "", series: 4, repeticiones: "", peso: 1},
  {ejercicio: "", series: 4, repeticiones: "", peso: 1},
  {ejercicio: "", series: 4, repeticiones: "", peso: 1},
  {ejercicio: "", series: 4, repeticiones: "", peso: 1},
  {ejercicio: "", series: 4, repeticiones: "", peso: 1},
];

const ROUTINE_SEM2: Rutina[] = [
  {ejercicio: "", series: 4, repeticiones: "", peso: 1},
  {ejercicio: "", series: 4, repeticiones: "", peso: 1},
  {ejercicio: "", series: 4, repeticiones: "", peso: 1},
  {ejercicio: "", series: 4, repeticiones: "", peso: 1},
  {ejercicio: "", series: 4, repeticiones: "", peso: 1},
  {ejercicio: "", series: 4, repeticiones: "", peso: 1},
  {ejercicio: "", series: 4, repeticiones: "", peso: 1},
  {ejercicio: "", series: 4, repeticiones: "", peso: 1},
  {ejercicio: "", series: 4, repeticiones: "", peso: 1},
  {ejercicio: "", series: 4, repeticiones: "", peso: 1},
  {ejercicio: "", series: 4, repeticiones: "", peso: 1},
  {ejercicio: "", series: 4, repeticiones: "", peso: 1},
  {ejercicio: "", series: 4, repeticiones: "", peso: 1},
  {ejercicio: "", series: 4, repeticiones: "", peso: 1},
  {ejercicio: "", series: 4, repeticiones: "", peso: 1},
  {ejercicio: "", series: 4, repeticiones: "", peso: 1},
  {ejercicio: "", series: 4, repeticiones: "", peso: 1},
  {ejercicio: "", series: 4, repeticiones: "", peso: 1},
  {ejercicio: "", series: 4, repeticiones: "", peso: 1},
  {ejercicio: "", series: 4, repeticiones: "", peso: 1},
];


@Component({
  selector: 'app-rutinas',
  templateUrl: './rutinas.component.html',
  styleUrls: ['./rutinas.component.scss']
})
export class RutinasComponent implements OnInit, AfterViewInit {
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  dataSource2 = new MatTableDataSource<Rutina>(ROUTINE_SEM2);
  title:string = "SEMANA 1" ;
  title2:string = "SEMANA 2" ;

  // @ViewChild(MatPaginator) paginator: MatPaginator;

  ngAfterViewInit() {
    console.log("a " , this.dataSource2)
    // this.dataSource.paginator = this.paginator;
    // this.title = this.title
  }


rutina:any = {
  ejercicio:"",
  peso:"",
  series:"",
  repeticiones:"",
}
rutinas:any[]

  constructor() { }

  ngOnInit() {


//   this.rutina.ejercicio = "press banca", 
// this.rutina.peso = "50kg"

  }

}
