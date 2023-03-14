type Person = {
  name: string;
};

export function getPerson(): Promise<Person> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        name: 'Cell',
      });
    }, 1000);
  });
}
