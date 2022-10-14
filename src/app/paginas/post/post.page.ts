import { Component, OnInit } from '@angular/core';
import {PostService} from '../../servicios/post.service';
import {Post} from '../../modelos/post';

@Component({
  selector: 'app-post',
  templateUrl: './post.page.html',
  styleUrls: ['./post.page.scss'],
})
export class PostPage implements OnInit {

  public lista: Array<Post>;
  public seleccionado: Post = new Post();

  constructor(
    private postServicios: PostService
  ) {
  }

  ngOnInit() {
    this.obtenerPosts();
  }

  obtenerPosts(){
    this.postServicios.obtenerPosts().subscribe(
      res => {
        this.lista = res;
      },
      error => {

      },
      ()=>{

      }
    );
  }

  seleccionar(dato: Post) {
    this.seleccionado = JSON.parse(JSON.stringify(dato));
  }
}
