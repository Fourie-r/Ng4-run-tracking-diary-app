import { Injectable } from '@angular/core';
import { ACTIVITY_DATA } from '../shared/activity.data';
import { IModel } from '../shared/model';
import { ActivityService } from './activity.service';
import { environment } from '../../environments/environment';

const apiToken = environment.MAPBOX_API_KEY;
declare let omnivore: any;
declare let L: any;
const defaultCoords: number[] = [40, -80];
const defaultZoom = 25;



@Injectable()
export class MapService {

    constructor() {}

    getActivity(id: number) {
        return ACTIVITY_DATA.slice(0).find(activity => activity.id === id);

    }

    plotActivity(id: number) {

        const mySpace = {
            'color': "#3949AB",
            'weight': 5,
            'opacity': 0.95
        };

        const map = L.map('map').setView(defaultCoords, defaultZoom);

        map.maxZoom = 100;

        L.tileLayer('https://api.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
            attribution: 'Map data &copy; <a href= "https://openstreetmap.org"> OpenStreetMap</a>',
            maxZoom: 18,
            id: 'mapbox.streets-basic',
            accessToken: apiToken
        }).addTo(map);

        const customLayer = L.geoJson(null, {
            style: mySpace
        });

        const gpxLayer = omnivore.gpx(ACTIVITY_DATA.slice(0).find(activity => activity.id === id).gpxData, null, customLayer).
        on('ready', function() {
            map.fitBounds(gpxLayer.getBounds());

        }).addTo(map);
    }
}
