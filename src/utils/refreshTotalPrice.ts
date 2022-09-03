export const refreshTotalPrice = (items: any) => {
  return items.reduce((sum: number, item: any) => {
    return sum + item.price * item.counter;
  }, 0);
};
