const isInCart = (state: any, id: number) => {
  const result = !!state.selectedItems.find((item: any) => item.id === id);
  return result;
};

const quantityCounter = (state: any, id: number) => {
  const Index = state.selectedItems.findIndex((item: any) => item.id === id);
  if (Index === -1) {
    return false;
  } else {
    return state.selectedItems[Index].quantity;
  }
};

export { isInCart, quantityCounter };
