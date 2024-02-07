import {
  AfterViewInit,
  Component,
  Input,
  OnInit,
  ViewChild,
} from "@angular/core";
import { MatPaginator } from "@angular/material/paginator";
import { MatTableDataSource } from "@angular/material/table";

@Component({
  selector: "rutine-table",
  templateUrl: "./rutine-table.component.html",
  // styleUrls: ['./rutinas.component.scss']
})
export class RutineTableComponent implements OnInit, AfterViewInit {
  displayedColumns: string[] = ["ejercicio", "series", "repeticiones", "peso"];
  // dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  @Input() dataSource;
  @Input() title;

  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngAfterViewInit() {
    console.log(this.dataSource);
    this.dataSource.paginator = this.paginator;
  }

  rutina: any = {
    ejercicio: "",
    peso: "",
    series: "",
    repeticiones: "",
  };
  rutinas: any[];

  constructor() {}

  ngOnInit() {
    //   this.rutina.ejercicio = "press banca",
    // this.rutina.peso = "50kg"
  }
}
