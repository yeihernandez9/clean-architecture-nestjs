import { UserRepository } from './../../domain/repositories/userRepository.interface';
import { ILogger } from '../../domain/logger/logger.interface';
import { UserM } from '../../domain/model/user';
const bcrypt = require('bcrypt');

export class addUserUseCases {
  constructor(private readonly logger: ILogger, private readonly userRepository: UserRepository) {}

  async execute(username: string, password: string): Promise<UserM> {
    const user = new UserM();
    user.username = username;
    user.password = await bcrypt.hash(password, 10);
    const result = await this.userRepository.insert(user);
    this.logger.log('addUserUseCases execute', 'New User have been inserted');
    return result;
  }
}
