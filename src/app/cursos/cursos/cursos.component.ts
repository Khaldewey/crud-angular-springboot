import { ErrorDialogComponent } from './../../shared/components/error-dialog/error-dialog.component';
import { CursosService } from './../services/cursos.service';
import { Component } from '@angular/core';
import { Curso } from '../model/curso';
import { catchError, Observable, of } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';



@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.scss']
})
export class CursosComponent {
  cursos$: Observable<Curso[]>
  displayedColumns = ['nome','categoria'];

  //cursosService: CursosService

  constructor(
    private cursosService: CursosService,
    public dialog: MatDialog){
    //this.cursosService = new CursosService()
    this.cursos$ = this.cursosService.lista().pipe(
     catchError(error => {
      this.onError('Erro ao carregar os cursos.');
      return of([])
     })
    );
  }

  onError(errorMsg: string) {
    this.dialog.open(ErrorDialogComponent, {
      data: errorMsg
    });


  }
}