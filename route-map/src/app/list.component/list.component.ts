import { Component, OnInit } from '@angular/core';
import { ActivityService } from '../services/activity.service';
import { IModel } from '../shared/model';
import { ACTIVITY_DATA } from '../shared/activity.data';

@Component({
  selector: 'app-list-component',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  constructor(private _activityService: ActivityService) { }

  activities: IModel[];
  totalDistance: number;
  totalActivities: number;



  ngOnInit() {

    this.activities = this._activityService.getActivities();
    this.totalDistance = this._activityService.getTotalDistance(this.activities);
    this.totalActivities = this._activityService.getTotalActivities(this.activities);


  }

}
