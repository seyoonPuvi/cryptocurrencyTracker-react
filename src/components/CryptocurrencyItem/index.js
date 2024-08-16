// Write your JS code here
import './index.css'

const CryptocurrencyItem = props => {
  const {cryptoData} = props
  const {currencyName, usdValue, euroValue, currencyLogo} = cryptoData

  return (
    <li className="crypto-info">
      <div className="coin-info-cont">
        <img src={currencyLogo} alt={currencyName} className="currency-logo" />
        <p className="currency-name">{currencyName}</p>
      </div>
      <div className="currency-cont">
        <p className="currency">{usdValue}</p>
        <p className="currency">{euroValue}</p>
      </div>
    </li>
  )
}

export default CryptocurrencyItem
