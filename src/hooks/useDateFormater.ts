export const useDateFormater = () => {
  const getMMddhhmmFormat = (dateUTC?: string) => {
    if (!dateUTC) return '';

    const date = new Date(dateUTC);
    return `${date.getMonth() + 1}/${date.getDate()} ${date.getHours()}:${date.getMinutes()}`;
  };

  return {getMMddhhmmFormat};
};
