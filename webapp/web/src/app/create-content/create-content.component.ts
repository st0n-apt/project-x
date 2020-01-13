import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';




interface Post {
  title: string;
  content: string;
}

@Component({
    selector: 'app-create-content',
    templateUrl: './create-content.component.html',
    styleUrls: ['./create-content.component.scss']
})
export class CreateContentComponent {
  title: string;
  content: string;
  addPost() {
        this.afs.collection('posts').add({'title': this.title, 'content': this.content});
  }
  postsCol: AngularFirestoreCollection<Post>;
  posts: Observable<Post[]>;
  constructor(private afs: AngularFirestore) {}
  
  ngOnInit() {
    this.postsCol = this.afs.collection('posts');
    this.posts = this.postsCol.valueChanges();
  }


}
