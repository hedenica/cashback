import { format } from 'date-fns';

const dateFormatter = (str) => {
  const formattedString = str.replaceAll('-', '/')

  return format(Date.parse(formattedString), 'dd/MM/yyyy') 
}

export default dateFormatter