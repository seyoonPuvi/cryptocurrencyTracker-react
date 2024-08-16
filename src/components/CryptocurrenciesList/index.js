// Write your JS code here
import CryptocurrencyItem from '../CryptocurrencyItem'
import './index.css'

const CryptocurrenciesList = props => {
  const {cryptoList} = props

  return (
    <div className="crypto-list-cont">
      <div className="crypto-nav-cont">
        <p className="heading cointype">Coin Type</p>
        <div className="coin-type">
          <p className="heading">USD</p>
          <p className="heading">EURO</p>
        </div>
      </div>
      <ul className="crypto-info-cont">
        {cryptoList.map(each => (
          <CryptocurrencyItem cryptoData={each} key={each.id} />
        ))}
      </ul>
    </div>
  )
}

export default CryptocurrenciesList
