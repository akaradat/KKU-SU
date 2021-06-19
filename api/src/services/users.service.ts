import bcrypt from 'bcrypt';
import DB from '@databases';
import { CreateUserDto } from '@dtos/users.dto';
import HttpException from '@exceptions/HttpException';
import { User } from '@interfaces/users.interface';
import { isEmpty } from '@utils/util';
import { Op } from 'sequelize';
import groupCountService from '@services/group-counts.service';
// findGroupByStudentId/593020000-1

class UserService {
  public users = DB.Users;
  public groupCountService = new groupCountService();

  public async findAllUser(): Promise<User[]> {
    const allUser: User[] = await this.users.findAll({ include: [DB.Groups] });
    return allUser;
  }

  public async findUserGroupByStudentId(studentId: string): Promise<User> {
    if (isEmpty(studentId)) throw new HttpException(400, "You're not studentId");

    const findUser: User = await this.users.findOne({
      attributes: ['name', 'studentId' /*, 'groupId'*/],
      where: {
        studentId,
      },
      include: [
        {
          model: DB.Groups,
          as: 'group',
          attributes: ['name', 'facebookUrl'],
        },
      ],
    });
    if (!findUser) throw new HttpException(409, "Can't find your group.");

    return findUser;
  }

  public async findUserById(userId: number): Promise<User> {
    if (isEmpty(userId)) throw new HttpException(400, "You're not userId");

    const findUser: User = await this.users.findByPk(userId);
    if (!findUser) throw new HttpException(409, "You're not user");

    return findUser;
  }

  public async createUser(userData: CreateUserDto): Promise<User> {
    if (isEmpty(userData)) throw new HttpException(400, "You're not userData");

    const findUser: User = await this.users.findOne({
      where: {
        [Op.or]: [{ email: userData.email }, { studentId: userData.studentId }],
      },
    });
    if (findUser) throw new HttpException(409, `You're email ${userData.email} or student id ${userData.studentId} already exists`);

    const group = await this.groupCountService.getMinGroupCount();
    const createUserData: User = await this.users.create({ ...userData, groupId: group.group_id });
    return createUserData;
  }

  public async updateUser(userId: number, userData: CreateUserDto): Promise<User> {
    if (isEmpty(userData)) throw new HttpException(400, "You're not userData");

    const findUser: User = await this.users.findByPk(userId);
    if (!findUser) throw new HttpException(409, "You're not user");

    // const hashedPassword = await bcrypt.hash(userData.password, 10);
    // await this.users.update({ ...userData, password: hashedPassword }, { where: { id: userId } });

    const updateUser: User = await this.users.findByPk(userId);
    return updateUser;
  }

  public async deleteUser(userId: number): Promise<User> {
    if (isEmpty(userId)) throw new HttpException(400, "You're not userId");

    const findUser: User = await this.users.findByPk(userId);
    if (!findUser) throw new HttpException(409, "You're not user");

    await this.users.destroy({ where: { id: userId } });

    return findUser;
  }
}

export default UserService;
