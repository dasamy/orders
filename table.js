
class TableRow extends React.Component {
  render() {
    const {
      data
    } = this.props;
    const row = data.map((data) =>
    <tr>
      <td key={data.LatestShipDate}>{data.LatestShipDate}</td>
      <td key={data.OrderType}>{data.OrderType}</td>
      <td key={data.PurchaseDate}>{data.PurchaseDate}
      <td key={data.AmazonOrderId}>{data.AmazonOrderId}</td>
   <td key={data.BuyerEmail}>{data.BuyerEmail}</td>
   <td key={data.IsReplacementOrder}>{data.IsReplacementOrder}</td>
 <td key={data.LastUpdateDate}>{data.LastUpdateDate}</td>
 <td key={data.NumberOfItemsShipped}>{data.NumberOfItemsShipped}</td>
 <td key={data.ShipServiceLevel}>{data.ShipServiceLevel}</td>
 <td key={data.OrderStatus}>{data.OrderStatus}</td>
 <td key={data.SalesChannel}>{data.SalesChannel}</td>
 <td key={data.IsBusinessOrder}>{data.IsBusinessOrder}</td>
 <td key={data.NumberOfItemsUnshipped}>{data.NumberOfItemsUnshipped}</td>
 <td key={data.BuyerName}>{data.BuyerName}</td>
 <td key={data.OrderTotal}>{data.OrderTotal}</td>
 <td key={data.IsPremiumOrder}>{data.IsPremiumOrder}</td>
 <td key={data.EarliestShipDate}>{data.EarliestShipDate}</td>
 <td key={data.MarketPlaceId}>{data.MarketPlaceId}</td>
 <td key={data.FulfillementChannel}>{data.FulfillementChannel}</td>
 <td key={data.PaymentMethod}>{data.PaymentMethod}</td>
 <td key={data.ShippingAddress}>{data.ShippingAddress}</td>
 <td key={data.IsPrime}>{data.IsPrime}</td>
 <td key={data.ShipmentServiceLevelCategory}>{data.ShipmentServiceLevelCategory}</td>
 <td key={data.SellerOrderId}>{data.SellerOrderId}</td>
 </tr>
    );
    return (
      <span>{row}</span>
    );
  }
}

class Table extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <table>
        <TableRow data={this.props.data} />
      </table>
    );
  }
}

ReactDOM.render(<Table data={obj} />, document.getElementById("table"));