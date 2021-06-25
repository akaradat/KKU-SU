import { NextFunction, Request, Response } from 'express';
import { Event } from '@interfaces/events.interface';
import { Sponsor } from '@interfaces/sponsors.interface';
import eventService from '@services/events.service';

class EventsController {
  public eventService = new eventService();

  public getEvents = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const findAllEventsData: Event[] = await this.eventService.findAllEvent();

      res.status(200).json({
        data: findAllEventsData,
        message: 'findAll',
      });
    } catch (error) {
      next(error);
    }
  };

  public getSponsors = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const findAllSponsorsData: Sponsor[] = await this.eventService.findAllSponsor();

      res.status(200).json({
        data: findAllSponsorsData,
        message: 'findAll',
      });
    } catch (error) {
      next(error);
    }
  };

  public getEventByType = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const eventType = String(req.params.type);
      const findEventDatas: Event[] = await this.eventService.findAllEventByType(eventType);

      res.status(200).json({ data: findEventDatas, message: 'findByType' });
    } catch (error) {
      next(error);
    }
  };
}

export default EventsController;
