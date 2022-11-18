import { useFetch } from "../fetchData";

const DeliveryList = () => {
  let [loading, allDeliveries, error] = useFetch("./data/deliveries.json");
  if (loading) return <h1>Loading</h1>;
  if (error) return <pre>{error}</pre>;

  let { deliveries } = allDeliveries;

  return (
    <table className="table table-striped">
      <thead>
        <tr>
          <th scope="col">ID</th>
          <th scope="col">Origin</th>
          <th scope="col">Destination</th>
          <th scope="col"># of Resources</th>
          <th scope="col">Delivery Status</th>
        </tr>
      </thead>
      <tbody>
        {deliveries &&
          deliveries.map((delivery) => (
            <tr key={delivery.deliveryId}>
              <th>{delivery.deliveryId}</th>
              <th>{delivery.originLocationId}</th>
              <th>{delivery.destinationLocationId}</th>
              <th>{delivery.resourceIds.length}</th>
              <th>
                <div className="form-check form-switch">
                  {delivery.deliveryStatus === "delivered" ? (
                    <input
                      className="form-check-input"
                      type="checkbox"
                      role="switch"
                      checked
                    />
                  ) : (
                    <input
                      className="form-check-input"
                      type="checkbox"
                      role="switch"
                    />
                  )}
                </div>
              </th>
            </tr>
          ))}
      </tbody>
    </table>
  );
};

export default DeliveryList;
