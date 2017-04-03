import {Component, OnInit} from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import {Artist} from '../../../../Artist';
import {Album} from '../../../../Album';
import {SpotifyService} from '../../services/spotify.service';

@Component({moduleId: module.id, selector: 'artist', templateUrl: `artist.component.html`})
export class ArtistComponent {
    id : string;
    artist : Artist[];
    albums : Album[];

    constructor(private _spotifyService : SpotifyService, private _route : ActivatedRoute) {}

    ngOnInit() {
        // Called after the constructor, initializing input properties, and the first
        // call to ngOnChanges. Add 'implements OnInit' to the class.
        this
            ._route
            .params
            .map(params => params['id'])
            .subscribe((id) => {
                this._spotifyService.getArtist(id)
                    .subscribe(artist => {
                        this.artist = artist;
                    })
                this._spotifyService.getAlbums(id)
                    .subscribe(albums => {
                        this.albums = albums.items;
                    })
            });
    }
}