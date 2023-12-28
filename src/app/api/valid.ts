import dayjs from 'dayjs';

export const isValidDate = (date: string): boolean => {
  const dateFormat = 'YYYY/MM/DD';
  const dateObj = dayjs(date, { format: dateFormat });
  return dateObj.isValid();
};

export const errorMessage = (title: string, date: string, markDiv: number): string => {
  let message: string[] = [];
  if (title === '') message = ['タイトルは必須です'];
  if (!isValidDate(date)) message = [...message, '日付の形式が不正です'];
  if (Number.isNaN(markDiv)) message = [...message, 'マーク区分は数値で入力してください'];
  const errorMessage = message.join('\n');
  return errorMessage;
};
