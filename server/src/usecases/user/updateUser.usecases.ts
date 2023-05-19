import { UserRepository } from 'src/domain/repositories/userRepository.interface';
import { ILogger } from 'src/domain/logger/logger.interface';

export class updateUserCases {
  constructor(private readonly logger: ILogger, private readonly UserRepository) {}
}
