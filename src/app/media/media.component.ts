import { Component, OnInit } from '@angular/core';
import { Media } from '../media';
import { MediaService } from '../media.service';

@Component({
  selector: 'app-media',
  templateUrl: './media.component.html',
  styleUrls: ['./media.component.css']
})
export class MediaComponent implements OnInit {

  public medias: Media[] = []


  constructor(private _mediaService: MediaService) {
    this._mediaService.getMedias().subscribe(
      (data:any)=>{
        this.medias = data;
      },
      (err:any)=>{
        alert('Internal server error')
      }
    )
   }

  ngOnInit(): void {
  }

}
