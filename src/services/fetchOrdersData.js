import { fa, faker } from '@faker-js/faker'
import { formatCurrency } from '../utils/formatCurrency'



const range = (len) => {
  const arr = []
  for (let i = 0; i < len; i++) {
    arr.push(i)
  }
  return arr
}

const newPerson = () => {
  return {
    orderId: faker.string.uuid(),
    productsCount: faker.number.int({ min: 1, max: 10 }),
    subTotal: formatCurrency(faker.number.int(1000), 'USD', 'en-US'),
    tax: formatCurrency(faker.number.int(10),'USD', 'en-US'),
    status: faker.helpers.arrayElement([
      'pending',
        'shipped',
        'delivered',
        'cancelled',
        'returned',
    ]),
    grandTotal: formatCurrency(faker.number.int(1000), 'USD', 'en-US'),
  }
}

export function makeData(...lens) {
  const makeDataLevel = (depth = 0) => {
    const len = lens[depth] ?? 0;
    return range(len).map(() => {
      return {
        ...newPerson(),
        subRows: lens[depth + 1] ? makeDataLevel(depth + 1) : undefined,
      };
    });
  };

  return makeDataLevel();
}


const data = makeData(10000)

export async function fetchData(options) {
  // Simulate some network latency
  await new Promise(r => setTimeout(r, 500))

  return {
    rows: data.slice(
      options.pageIndex * options.pageSize,
      (options.pageIndex + 1) * options.pageSize
    ),
    pageCount: Math.ceil(data.length / options.pageSize),
    rowCount: data.length,
  }
}
