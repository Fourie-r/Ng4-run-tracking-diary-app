import { IModel } from './model';


export const ACTIVITY_DATA: IModel[] = [
    {
        id: 1,
        name: 'Big lap round the park',
        date: new Date(),
        comment: 'Perfect running evening in Hamburg',
        distance: 5.6,
        gpxData: '../../assets/gpx/1.gpx'
    },

    {
        id: 2,
        name: 'Small lap round the block',
        date: new Date(),
        comment: 'Nice running day with rain in Hamburg',
        distance: 3.6,
        gpxData: '../../assets/gpx/2.gpx'
    }
];
