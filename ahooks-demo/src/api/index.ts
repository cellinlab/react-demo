import Mock from 'mockjs';

export function getUserId(): Promise<number> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(Mock.mock('@id'));
    }, 1000);
  });
};

export function getUsername(id?: number): Promise<string> {
  console.log('getUsername', id);
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(Mock.mock('@name'));
    }, 1000);
  });
}

export function changeUsername(name: string): Promise<{ success: boolean }> {
  console.log('changeUsername', name);
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        success: true,
      });
    }, 1000);
  });
}

export function getTime(): Promise<string> {
  console.log('getTime');
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(Mock.mock('@time'));
    }, 1000);
  });
}

export function deleteUser(userId: number): Promise<{ success: boolean }> {
  console.log('deleteUser', userId);
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        success: true,
      });
    }, 1000);
  });
}