import { UserEntity } from '../interfaces/user.entity';

export const userEntityMock: UserEntity = {
  cpf: '12341231',
  createdAt: new Date(),
  email: 'emailmock@email.com',
  id: 123,
  name: 'NameMock',
  password: 'senha',
  phone: '123123',
  updateAt: new Date(),
  typeUser: 2,
};
