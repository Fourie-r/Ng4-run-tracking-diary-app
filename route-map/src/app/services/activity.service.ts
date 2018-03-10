import { Injectable } from '@angular/core';
import { ACTIVITY_DATA } from '../shared/activity.data';
import { IModel } from '../shared/model';

@Injectable()
export class ActivityService {


  getActivities(): IModel[] {

    return ACTIVITY_DATA;
  }

  getTotalDistance(activities: IModel[]): number {

    const distances = activities.map( a => a.distance);
    const dis = distances.reduce((prev, curr) => prev + curr, 0);

    return dis;
  }

  getTotalActivities(activities: IModel[]): number {

    return activities.length;
  }

}
