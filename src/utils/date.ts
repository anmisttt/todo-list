import moment from 'moment'

export const formatDate = (date: string) => {
    const monthNames = [`January`, `February`, `March`, `April`, `May`, `June`,
    `July`, `August`, `September`, `October`, `November`, `December`
  ];
    return `${new Date(date).getDate()} ${monthNames[new Date(date).getMonth()]}  ${new Date(date).getFullYear()}`
}

export const isValidDate = (date: string) => {
  return !!(new Date(date));
}

export const sordDates = (date1: string, date2: string) => {
  if (moment(date1).isAfter(moment(date2))) {
    return 1;
  }
  if (moment(date1).isBefore(moment(date2))) {
    return -1;
  }
  return 0;
}