import DB from '@databases';
import HttpException from '@exceptions/HttpException';
import { Event } from '@interfaces/events.interface';
import { Sponsor } from '@interfaces/sponsors.interface';
import { isEmpty } from '@utils/util';

class EventService {
  public events = DB.Events;
  public sponsors = DB.Sponsors;

  public async findAllEvent(): Promise<Event[]> {
    const allEvent: Event[] = await this.events.findAll();
    return allEvent;
  }

  public async findAllSponsor(): Promise<Sponsor[]> {
    const allSponsor: Sponsor[] = await this.sponsors.findAll();
    return allSponsor;
  }

  public async findAllEventByType(type: string): Promise<Event[]> {
    const allowTypeList = ['EVENT', 'CHECK'];
    type = type.toLocaleUpperCase();
    if (isEmpty(type) || !allowTypeList.includes(type)) throw new HttpException(400, "You're not type");

    const findEvent: Event[] = await this.events.findAll({
      // attributes: ['name', 'studentId' /*, 'groupId'*/],
      where: {
        type,
      },
    });
    if (!findEvent) throw new HttpException(409, "Can't find your events.");

    return findEvent;
  }
}

export default EventService;
