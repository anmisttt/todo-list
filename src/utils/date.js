import moment from 'moment'

export const formatDate = (date) => {
    const monthNames = [`January`, `February`, `March`, `April`, `May`, `June`,
    `July`, `August`, `September`, `October`, `November`, `December`
  ];
    return `${new Date(date).getDate()} ${monthNames[new Date(date).getMonth()]}  ${new Date(date).getFullYear()}`
}

export const isValidDate = (date) => {
  return !isNaN(new Date(date));
}

export const sordDates = (date1, date2) => {
  if (moment(date1).isAfter(moment(date2))) {
    return 1;
  }
  if (moment(date1).isBefore(moment(date2))) {
    return -1;
  }
  return 0;
}