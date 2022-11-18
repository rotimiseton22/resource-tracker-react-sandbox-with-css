import { useState } from "react";
import { useFetch } from "../fetchData";

const DeliveryForm = () => {
  //let [allLocations, setAllLocations] = useState([]);
  //let [resourcesAtLocation, setResourcesAtLocation] = useState([]);
  let [deliveryOrigin, setDeliveryOrigin] = useState("");
  let [deliveryDestination, setDeliveryDestination] = useState("");

  let [locationsLoading, allLocations, locationsError] = useFetch(
    "./data/locations.json"
  );

  let [resourcesLoading, allResources, resourcesError] = useFetch(
    "./data/resources.json"
  );

  if (locationsLoading || resourcesLoading) return <h1>Retrieving Data....</h1>;
  if (locationsError || resourcesError)
    return <pre>{locationsError || resourcesError}</pre>;
  let { locations } = allLocations;
  let { resources } = allResources;

  return (
    <form>
      <div className="mb-3">
        <label className="form-label">Origin</label>
        <select
          className="form-select"
          name="origin"
          value={deliveryOrigin}
          onChange={(e) => setDeliveryOrigin(e.target.value)}
        >
          {locations &&
            locations.map((location) => (
              <option key={location.locationId} value={location.locationId}>
                {location.name}
              </option>
            ))}
        </select>

        <label className="form-label">Destination</label>
        <select
          className="form-select"
          name="destination"
          value={deliveryDestination}
          onChange={(e) => setDeliveryDestination(e.target.value)}
        >
          {locations &&
            locations
              .filter((location) => location.locationId !== deliveryOrigin)
              .map((location) => (
                <option key={location.locationId} value={location.locationId}>
                  {location.name}
                </option>
              ))}
        </select>
      </div>
      <div className="mb-3">
        {resources &&
          resources
            .filter((resource) => resource.lastLocationId === deliveryOrigin)
            .map((resource) => (
              <div className="form-check">
                <input
                  type="checkbox"
                  value={resource.id}
                  className="form-check-input"
                />
                <label key={resource.id} className="form-check-label">
                  {resource.id}
                </label>
              </div>
            ))}
      </div>
    </form>
  );
};

export default DeliveryForm;
