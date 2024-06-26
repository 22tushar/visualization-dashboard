import { faker } from '@faker-js/faker';
import { sample } from 'lodash';

// ----------------------------------------------------------------------

const users = [...Array(24)].map((_, index) => ({
  id: faker.datatype.uuid(),
  avatarUrl: `/static/mock-images/avatars/avatar_${index + 1}.jpg`,
  name: faker.name.findName(),
  company: sample([
    '3.12',
  '3.96',
  '3.32',
  '3.67',
  '3.78',
  '3.77',
  '3.56',
  '3.32',
  '3.23',
  '3.87',
]),
  price:sample([
     '500',
     '500',
     '200',
     '700',
    '800',
  '900',
'350' ,
'-',
'-' ]),
  action: sample([
   'view','buy'
  ]),
  role: sample([
    '213412',
    '324315',
    '335454',
     '343253',
     '33245',
     '3432365',
     '3473264',
     '3642542',
     '343252'
  ]),
   profit: sample([
    '319',
    '211.5',
    '178',
     '133.8',
     '176',
     '345',
     '238.9',
     '244',
     '199'
  ]),

  win: sample([
    '0.65',
    '.65',
    '0.23',
     '0.80',
     '.87',
     '0.94',
     '0.9',
     '0.45',
     '0.23'
  ])
}));

export default users;


// '3.12',
//     '3.96',
//     '3.32',
//     '3.67',
//     '3.78',
//     '3.77',
//     '3.56',
//     '3.32',
//     '3.23',
//     '3.87',