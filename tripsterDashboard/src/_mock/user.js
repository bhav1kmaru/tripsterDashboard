import { faker } from '@faker-js/faker';
import { sample } from 'lodash';

// ----------------------------------------------------------------------

const users = [...Array(1)].map((_, index) => ({
  id: faker.datatype.uuid(),
  avatarUrl: `https://media-cdn.tripadvisor.com/media/photo-s/1d/10/99/d0/swimming-pool.jpg`,
  name: "The Lalit Mumbai",
  company: "The Lalit",
  isVerified: true,
  status: 'active',
  roomStatus: "Available",
}));

export default users;
