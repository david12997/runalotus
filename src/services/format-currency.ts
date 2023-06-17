
const FormatCurrency = (value: string, currency: string, locale:string): string => {


    return`$ ${new Intl.NumberFormat(locale).format(Math.ceil(parseInt(value)))} ${currency}`
}

export default FormatCurrency;