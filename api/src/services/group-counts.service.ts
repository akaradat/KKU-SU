import DB from '@databases';
import { GroupCount } from '@interfaces/group-counts.interface';

class GroupCountService {
  public async findAllGroupCount(): Promise<GroupCount[]> {
    const result = await DB.sequelize.query(`SELECT * FROM view_group_counts`);
    const allUser: GroupCount[] = <GroupCount[]>result[0];
    return allUser;
  }

  public async getMinGroupCount(): Promise<GroupCount> {
    const result = await DB.sequelize.query(`SELECT * FROM view_group_counts ORDER BY total, name LIMIT 1`);
    const allUser: GroupCount[] = <GroupCount[]>result[0];
    return allUser[0];
  }
}

export default GroupCountService;
