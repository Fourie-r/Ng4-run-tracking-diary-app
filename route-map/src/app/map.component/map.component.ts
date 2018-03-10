import { Component, OnInit, AfterViewInit } from '@angular/core';
import { IModel } from '../shared/model';
import { ActivatedRoute } from '@angular/router';
import { MapService } from '../services/map.service';


@Component({
  selector: 'app-map-component',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit, AfterViewInit {

  constructor( private _mapService: MapService, private _activatedRoute: ActivatedRoute) { }

  activity: IModel;
  activityName: string;
  activityComment: string;
  activityDate: Date;
  activityDistance: number;
  gpx: any;

  ngOnInit() {

    this.activity = this._mapService.getActivity( +this._activatedRoute.snapshot.params['id']);
  }



  ngAfterViewInit() {
    this._mapService.plotActivity(+this._activatedRoute.snapshot.params['id']);
  }
}
