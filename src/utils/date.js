export const formatDate = (date) => {
    const monthNames = [`January`, `February`, `March`, `April`, `May`, `June`,
    `July`, `August`, `September`, `October`, `November`, `December`
  ];
    return `${new Date(date).getDate()} ${monthNames[new Date(date).getMonth()]}  ${new Date(date).getFullYear()}`
}

export const isValidDate = (date) => {
  return !isNaN(new Date(date));
}