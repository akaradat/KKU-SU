import { Router } from 'express';
import Route from '@interfaces/routes.interface';
import EventsController from '@/controllers/events.controller';

class EventsRoute implements Route {
  public path = '/events';
  public router = Router();
  public eventsController = new EventsController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get(`${this.path}`, this.eventsController.getEvents);
    this.router.get(`${this.path}/findEventByType/:type(\\w+)`, this.eventsController.getEventByType);
  }
}

export default EventsRoute;
